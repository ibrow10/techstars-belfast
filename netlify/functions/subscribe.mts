// Newsletter signup: adds a contact to the Techstars Belfast Mailchimp audience
// via the Marketing API, so the homepage form can stay on the page and show a
// proper result. Mailchimp sends the double opt-in confirmation email.
//
// Needs MAILCHIMP_API_KEY in the Netlify environment (Mailchimp > Account >
// Extras > API keys). MAILCHIMP_LIST_ID defaults to the Techstars Belfast
// audience; override only if the audience changes. Without a key this returns
// 503 and the browser falls back to posting the form to Mailchimp's hosted page.

import { createHash } from "node:crypto";

const DEFAULT_LIST_ID = "c4d5b2e454";

const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });

export default async (req: Request) => {
    const apiKey = Netlify.env.get("MAILCHIMP_API_KEY");
    const listId = Netlify.env.get("MAILCHIMP_LIST_ID") || DEFAULT_LIST_ID;
    if (!apiKey) return json({ error: "not_configured" }, 503);

    let body: { email?: string; name?: string; hp?: string };
    try {
        body = await req.json();
    } catch {
        return json({ error: "bad_request", message: "Send JSON." }, 400);
    }

    // Honeypot filled in: pretend it worked, don't touch Mailchimp.
    if (body.hp) return json({ status: "pending" });

    const email = (body.email || "").trim().toLowerCase();
    const name = (body.name || "").trim().slice(0, 100);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return json({ error: "invalid_email", message: "Enter a valid email address." }, 400);
    }

    const dc = apiKey.split("-").pop();
    const hash = createHash("md5").update(email).digest("hex");
    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/${hash}`;

    const res = await fetch(url, {
        method: "PUT",
        headers: {
            Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email_address: email,
            status_if_new: "pending",
            merge_fields: name ? { FNAME: name } : {},
            tags: ["website"],
        }),
    });

    const data = await res.json().catch(() => ({}));

    if (res.ok) {
        // pending = confirmation email sent; subscribed = already on the list.
        return json({ status: data.status });
    }

    // Mailchimp returns { title, detail } on errors. Keep the message short and
    // never echo the raw detail for server-side faults.
    if (res.status === 400) {
        const title = String(data.title || "");
        if (/Forgotten Email Not Subscribed|Member In Compliance State/i.test(title)) {
            return json({ error: "compliance", message: "This address can't be added automatically. Use the contact page and we'll add you by hand." }, 400);
        }
        if (/Invalid Resource/i.test(title)) {
            return json({ error: "invalid_email", message: "That email address doesn't look right." }, 400);
        }
    }
    console.error("Mailchimp error", res.status, data);
    return json({ error: "upstream", message: "Something went wrong. Try again in a minute." }, 502);
};

export const config = {
    path: "/api/subscribe",
    method: "POST",
};

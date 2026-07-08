import eventsFeed from '../data/events-feed.json';

// Markdown mirror of the events page for AI agents, generated from the
// same feed at every build so it never drifts. Linked from /llms.txt.
export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const events = (eventsFeed as any[]).filter((e) => !e.private);
  const upcoming = events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const past = events.filter((e) => e.date < today).sort((a, b) => b.date.localeCompare(a.date));

  const line = (e: any) => {
    const bits = [
      `- **${e.title}** — ${e.date}`,
      e.time ? `, ${e.time}` : '',
      e.venue ? `, ${e.venue}` : '',
      e.audience ? ` (${e.audience})` : '',
    ].join('');
    const detail = e.description ? `\n  ${e.description}` : '';
    const link = e.link ? `\n  Details and registration: ${e.link}` : '';
    return bits + detail + link;
  };

  const body = [
    '# Techstars Belfast Events',
    '',
    `Generated from the live events feed on ${today}. Sign up to the monthly founder email at https://techstarsbelfast.com to hear about new ones first.`,
    '',
    '## Upcoming',
    '',
    upcoming.length ? upcoming.map(line).join('\n\n') : 'No upcoming events published right now. Check https://techstarsbelfast.com/events or the monthly founder email.',
    '',
    '## Recent',
    '',
    past.map(line).join('\n\n'),
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}

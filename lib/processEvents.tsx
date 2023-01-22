export default function processEvents(data: any) {
  const events: Array<EventCard> = data.items.map((e: any) => ({
    id: `${e?.sys?.id}`,
    title: `${e?.fields?.name}`,
    image: `https:${e?.fields?.thumbnail?.fields?.file?.url}`,
    date: `${e?.fields?.date}`,
    description: `${e?.fields?.description}`,
    slug: `${e?.fields?.slug}`,
    location: `${e?.fields?.locationText}`,
    body: e?.fields?.content,
  }));

  // const events: Array<ResourceCard> = eventsData.sort((a: any, b: any) => (a.year < b.year ? 1 : -1));

  return { events };
}

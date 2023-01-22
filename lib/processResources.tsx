export default function processResources(data: any) {
  const resourcesData: Array<ResourceCard> = data.items.map((e: any) => ({
    id: `${e?.sys?.id}`,
    title: e?.fields?.name ? `${e?.fields?.name}` : "/",
    image: `https:${e?.fields?.image?.fields?.file?.url}`,
    slug: `${e?.fields?.slug}`,
    year: e?.fields?.year ? `${e?.fields?.year}` : "",
    content: e?.fields?.content,
    resource: e?.fields?.link ? `${e?.fields?.link}` : undefined,
    file: e?.fields?.file?.fields?.file?.url ? e?.fields?.file?.fields?.file?.url : undefined,
    resourceName: `${e?.fields?.linkName}`,
  }));

  const resources: Array<ResourceCard> = resourcesData.sort((a: any, b: any) => (a.year < b.year ? 1 : -1));
  return { resources };
}

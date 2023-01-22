export default function processProjects(data: any) {
  const projects: Array<ProjectCard> = data.items.map((e: any) => ({
    id: `${e?.sys?.id}`,
    title: `${e?.fields?.name}`,
    description: `${e?.fields?.summary}`,
    photo: `https:${e?.fields?.thumbnail?.fields?.file?.url}`,
    slug: `${e?.fields?.slug}`,
    startDate: e?.fields?.startDate,
    endDate: e?.fields?.endDate,
    content: e?.fields?.content,
  }));

  return { projects };
}

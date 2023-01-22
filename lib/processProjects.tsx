import formatDate from "./fortmatDate";

export default function processProjects(data: any) {
  const projects: Array<ProjectCard> = data.items.map((e: any) => ({
    id: `${e?.sys?.id}`,
    title: `${e?.fields?.name}`,
    description: `${e?.fields?.summary}`,
    photo: `https:${e?.fields?.thumbnail?.fields?.file?.url}`,
    slug: `${e?.fields?.slug}`,
    startDate: e?.fields?.startDate ? formatDate(`${e?.fields?.startDate}`) : `undefined`,
    endDate: e?.fields?.endDate ? formatDate(`${e?.fields?.endDate}`) : `undefined`,
  }));

  return { projects };
}

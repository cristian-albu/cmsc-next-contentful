export default function processTeam(data: any) {
  const teamData = data.items.map((e: any) => ({
    id: `${e?.sys?.id}`,
    team: e?.fields?.echipa,
    council: e?.fields?.consiliuDirector,
    name: `${e?.fields?.name}`,
    slug: `${e?.fields?.slug}`,
    position: `${e?.fields?.position}`,
    councilPosition: `${e?.fields?.pozitieConsiliu}`,
    photo: `https:${e?.fields?.thumbnail?.fields?.file?.url}`,
    order: e?.fields?.order,
  }));

  const team: Array<TeamCard> = teamData.filter((e: TeamCard) => e?.team).sort((a: any, b: any) => (a.order > b.order ? 1 : -1));

  const council: Array<TeamCard> = teamData.filter((e: TeamCard) => e?.council).sort((a: any, b: any) => (a.order > b.order ? 1 : -1));

  return { team, council };
}

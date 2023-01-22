export default function processPartners(data: any) {
  const partners: Array<PartnerCard> = data.items.map((e: any) => ({
    id: `${e?.sys?.id}`,
    name: `${e?.fields?.name}`,
    logo: `https:${e?.fields?.logo?.fields?.file?.url}`,
    url: `${e?.fields?.link}`,
  }));

  return { partners };
}

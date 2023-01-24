import HeroSection from "@/components/section/HeroSection";
import React from "react";
import EventsSection from "@/components/section/EventsSection";
import PartnerSection from "@/components/section/PartnerSection";
import ProjectSection from "@/components/section/ProjectSection";
import ResourcesSection from "@/components/section/ResourcesSection";
import OurTeamSection from "@/components/section/OurTeamSection";
import DirectoryCouncilSection from "@/components/section/DirectoryCouncilSection";
import CallToActionSection from "@/components/section/CallToActionSection";
import client from "@/client";
import processTeam from "@/lib/processTeam";
import processPartners from "@/lib/processPartners";
import processEvents from "@/lib/processEvents";
import processResources from "@/lib/processResources";
import processProjects from "@/lib/processProjects";
import { GetStaticProps } from "next";
import Head from "next/head";
import DynamicHead from "@/components/DynamicHead";

export default function Home({ teamData, partnerData, eventsData, projectsData, resourcesData }: any) {
  const { team, council } = processTeam(teamData);
  const { partners } = processPartners(partnerData);
  const { events } = processEvents(eventsData);
  const { resources } = processResources(resourcesData);
  const { projects } = processProjects(projectsData);

  return (
    <>
      <DynamicHead
        title={`Centrul de Mediere si Securitate Comunitara (CMSC)`}
        description={`Centrul de Mediere si Securitate Comunitara (CMSC) este o fundatie independenta infiintata in anul 2000 in Iasi, Romania, construind impreuna cu comunitatile locale modele de dezvoltare si cooperare menite sa ofere un spatiu mai sigur, deschis si sustenabil.`}
        image={`/assets/hero_img_3.jpg`}
      />
      <HeroSection />
      <EventsSection eventsList={events} />
      <PartnerSection partnerList={partners} />
      <ProjectSection projectList={projects} />
      <ResourcesSection resourcesList={resources} />
      <OurTeamSection teamMembersList={team} />
      <DirectoryCouncilSection teamMembersList={council} />
      <CallToActionSection />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const teamData = await client.getEntries({ content_type: "teamMembers", order: "fields.order" });

  const partnerData = await client.getEntries({ content_type: "partners" });

  const resourcesData = await client.getEntries({
    content_type: "resources",
    select: "fields.name,fields.slug,fields.year",
    order: "fields.year",
  });

  const eventsData = await client.getEntries({
    content_type: "events",
    limit: 2,
    select: "fields.name,fields.slug,fields.thumbnail,fields.date,fields.locationText,fields.description",
    order: "-fields.date",
  });

  const projectsData = await client.getEntries({
    content_type: "projectsPrograms",
    select: "fields.name,fields.slug,fields.thumbnail,fields.summary",
    limit: 4,
  });

  return {
    props: { teamData, partnerData, eventsData, resourcesData, projectsData },
    revalidate: 180,
  };
};

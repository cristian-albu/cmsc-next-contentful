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

export default function Home({ teamData, partnerData, eventsData, projectsData, resourcesData }: any) {
  const { team, council } = processTeam(teamData);
  const { partners } = processPartners(partnerData);
  const { events } = processEvents(eventsData);
  const { resources } = processResources(resourcesData);
  const { projects } = processProjects(projectsData);

  return (
    <>
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
  const teamData = await client.getEntries({ content_type: "teamMembers" });

  const partnerData = await client.getEntries({ content_type: "partners" });

  const resourcesData = await client.getEntries({ content_type: "resources" });

  const eventsData = await client.getEntries({ content_type: "events", limit: 2 });

  const projectsData = await client.getEntries({ content_type: "projectsPrograms", limit: 4 });

  return {
    props: { teamData, partnerData, eventsData, resourcesData, projectsData },
    revalidate: 600,
  };
};

import client from "@/client";
import DynamicHead from "@/components/DynamicHead";
import PartnerCard from "@/components/PartnerCard";
import TeamCard from "@/components/TeamCard";
import HorizontalLine from "@/components/layout/HorizontalLine";
import Section from "@/components/layout/Section";
import Wrapper from "@/components/layout/Wrapper";
import DirectoryCouncilSection from "@/components/section/DirectoryCouncilSection";
import OurTeamSection from "@/components/section/OurTeamSection";
import PartnerSection from "@/components/section/PartnerSection";
import { staticData } from "@/data/staticData";
import processPartners from "@/lib/processPartners";
import processTeam from "@/lib/processTeam";
import React from "react";
import { AiOutlineTeam } from "react-icons/ai";

export default function About({ teamMembers, partnersList }: any) {
  const { team, council } = processTeam(teamMembers);

  const { partners } = processPartners(partnersList);

  return (
    <>
      <DynamicHead title="Despre noi" />
      <Section>
        <Wrapper>
          <div className="mt-[8rem]">
            <span className="text-3xl lg:text-5xl mb-5 flex gap-2 items-center">
              <AiOutlineTeam />
              <p>{staticData.about.title}</p>
            </span>

            <div className="flex flex-wrap justify-between">
              <p className="w-full lg:w-[48%] mb-5">{staticData.about.description}</p>
              <p className="w-full lg:w-[48%] mb-5">{staticData.about.description2}</p>
            </div>
          </div>
        </Wrapper>
      </Section>

      <OurTeamSection teamMembersList={team} />
      <DirectoryCouncilSection teamMembersList={council} />
      <PartnerSection partnerList={partners} />
    </>
  );
}

export async function getStaticProps() {
  const teamData = await client.getEntries({ content_type: "teamMembers" });

  const partnerData = await client.getEntries({ content_type: "partners" });

  return {
    props: { teamMembers: teamData, partnersList: partnerData },
    revalidate: 30,
  };
}

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
      <DynamicHead
        title={`Despre noi`}
        description={`Proiectele și serviciile Centrului de Mediere si Securitate Comunitară se bazează pe dezvoltarea și promovarea politicilor publice și a modelelor de dezvoltare comunitară, a cooperării și dezvoltării de bune practici, precum și campanii sau inițiative legislative care pot contribui la o viață mai sigură pentru comunitățile noastre. CMSC a coordonat peste 30 de proiecte regionale începând din 2000 și își continuă activitățile în mod constant axate pe introducerea unor standarde noi și mai bune în dezvoltarea comunității și sprijinirea victimelor. Introducerea unor modele de siguranță comunitară europeană și internațională, adaptate nevoilor și realităților regiunii nedezvoltate în care își dezvoltă programele (atât în ​​zonele rurale, cât și în cele urbane, în 9 județe și aproape 20 de comunități - în partea de NE a României) au constituit prioritatea maximă de la înființarea sa. `}
        image={`/assets/hero_img_3.jpg`}
      />
      <Section>
        <Wrapper>
          <div className="mt-[8rem]">
            <span className="text-3xl lg:text-5xl mb-5 flex gap-2 items-center">
              <AiOutlineTeam />
              <p>{staticData.about.title}</p>
            </span>

            <div className="flex flex-wrap justify-between">
              <p className="w-full lg:w-[48%] mb-5">
                {staticData.about.description}
              </p>
              <p className="w-full lg:w-[48%] mb-5">
                {staticData.about.description2}
              </p>
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
    revalidate: 1000 * 60 * 60 * 4,
  };
}

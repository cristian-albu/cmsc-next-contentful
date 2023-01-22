import React from "react";
import Section from "../layout/Section";
import Wrapper from "../layout/Wrapper";
import TeamCard from "../TeamCard";
import HorizontalLine from "../layout/HorizontalLine";
import { staticData } from "@/data/staticData";

export default function OurTeamSection({ teamMembersList }: TeamList) {
  return (
    <Section>
      <Wrapper>
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-5xl">{staticData.about.team}</h2>
          <HorizontalLine />
          <div className="w-full flex justify-center flex-wrap">
            {teamMembersList.map((e: TeamCard) => (
              <TeamCard photo={e.photo} name={e.name} position={e.position} slug={e.slug} id={e.id} key={e.id} />
            ))}
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}

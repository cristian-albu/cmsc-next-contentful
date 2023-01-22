import React from "react";
import Section from "../layout/Section";
import Wrapper from "../layout/Wrapper";
import TeamCard from "../TeamCard";
import HorizontalLine from "../layout/HorizontalLine";
import LinkButton from "../LinkButton";
import { AiOutlineTeam } from "react-icons/ai";
import { staticData } from "@/data/staticData";

export default function DirectoryCouncilSection({ teamMembersList }: TeamList) {
  return (
    <Section bg="light">
      <Wrapper>
        <div className="w-[100%] flex flex-col items-center text-center">
          <h2 className="text-5xl">{staticData.about.council}</h2>
          <HorizontalLine />
          <div className="w-[100%] flex justify-center flex-wrap mb-5">
            {teamMembersList.map((e: TeamCard) => (
              <TeamCard photo={e.photo} name={e.name} position={e.councilPosition} slug={e.slug} key={e.id} id={e.id} />
            ))}
          </div>
          <LinkButton type="dark" text="Vezi mai multe despre noi" link="/despre-noi" icon={<AiOutlineTeam />} />
        </div>
      </Wrapper>
    </Section>
  );
}

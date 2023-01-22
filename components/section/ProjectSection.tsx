import React from "react";
import Section from "../layout/Section";
import Wrapper from "../layout/Wrapper";
import ProjectCard from "../ProjectCard";
import Link from "next/link";
import { BsBook } from "react-icons/bs";
import LinkButton from "../LinkButton";
import HorizontalLine from "../layout/HorizontalLine";
import { staticData } from "@/data/staticData";

export default function ProjectSection({ projectList }: ProjectList) {
  return (
    <Section>
      <Wrapper>
        <div className="flex flex-wrap justify-between items-center">
          <h2 className="text-5xl">{staticData.projects.title}</h2>
          <HorizontalLine />
          <div className="flex w-[100%] flex-col items-start mb-5 lg:w-[40%]">
            <p className="mb-5">{staticData.projects.desc}</p>
            <p>{staticData.projects.listTitle} </p>
            <ul className="list-disc pl-5 mb-5">
              {staticData.projects.list.map((e: string, i: number) => (
                <li key={i}>{e} </li>
              ))}
            </ul>
            <LinkButton type="dark" text="Vezi toate proiectele" link="/proiecte-si-programe" icon={<BsBook />} />
          </div>
          <div className="w-[100%] flex flex-wrap lg:w-[50%]">
            {projectList.map((e: ProjectCard, i: number) => (
              <ProjectCard title={e.title} photo={e.photo} slug={e.slug} key={i} />
            ))}
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}

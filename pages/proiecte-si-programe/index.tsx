import client from "@/client";
import DynamicHead from "@/components/DynamicHead";
import ProjectCard from "@/components/ProjectCard";
import HorizontalLine from "@/components/layout/HorizontalLine";
import Section from "@/components/layout/Section";
import Wrapper from "@/components/layout/Wrapper";
import { staticData } from "@/data/staticData";
import processProjects from "@/lib/processProjects";
import { GetStaticProps } from "next";
import React from "react";
import { BsBook } from "react-icons/bs";

export default function Projects({ projectsData }: any) {
  const { projects } = processProjects(projectsData);

  return (
    <>
      <DynamicHead
        title={`Proiecte şi Programe`}
        description={`Proiectele si serviciile Centrului de Mediere si Securitate Comunitara sunt construite pe dezvoltarea si promovarea de politici publice si modele de dezvoltare comunitara, de cooperare si dezvoltare de bune practici, precum si campanii sau initiative legislative care sa contribuie la o viata mai sigura pentru comunitatile noastre, in familie si in societate.`}
        image={`/assets/hero_img_4.jpg`}
      />
      <Section bg="light">
        <div className=" flex flex-col items-center justify-center mt-[8rem] mb-[-3rem]">
          <Wrapper>
            <span className="flex mb-10">
              <BsBook className="text-3xl md:text-5xl mr-3" />
              <h1 className="text-3xl md:text-5xl">
                {staticData.projects.title}
              </h1>
            </span>
          </Wrapper>
          <Wrapper>
            <div className="flex justify-between flex-wrap">
              <div className="w-[100%] md:w-[48%] flex flex-col">
                <p>{staticData.projects.desc}</p>
              </div>
              <div className="w-[100%] md:w-[48%] flex flex-col">
                <p>{staticData.projects.listTitle} </p>
                <ul className="list-disc pl-5 mb-5">
                  {staticData.projects.list.map((e: string, i: number) => (
                    <li key={i}>{e} </li>
                  ))}
                </ul>
              </div>
            </div>
          </Wrapper>
        </div>
      </Section>

      <Section wave="top">
        {projects.map((e: ProjectCard, i: number) => (
          <Wrapper key={i}>
            <ProjectCard
              title={e.title}
              photo={e.photo}
              slug={e.slug}
              style="fullW"
              description={e.description}
              startDate={e.startDate}
              endDate={e.endDate}
            />
          </Wrapper>
        ))}
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projectsData = await client.getEntries({
    content_type: "projectsPrograms",
    select:
      "fields.name,fields.slug,fields.thumbnail,fields.summary,fields.startDate",
  });

  return {
    props: { projectsData },
    revalidate: 60 * 30,
  };
};

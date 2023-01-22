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
      <DynamicHead title="Proiecte şi programe" />
      <Section bg="light">
        <div className=" flex flex-col items-center justify-center mt-[8rem] mb-[-3rem]">
          <Wrapper>
            <span className="flex mb-10">
              <BsBook className="text-3xl md:text-5xl mr-3" />
              <h1 className="text-3xl md:text-5xl">{staticData.projects.title}</h1>
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
            <ProjectCard title={e.title} photo={e.photo} slug={e.slug} style="fullW" description={e.description} startDate={e.startDate} endDate={e.endDate} />
          </Wrapper>
        ))}
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projectsData = await client.getEntries({ content_type: "projectsPrograms" });

  return {
    props: { projectsData },
    revalidate: 600,
  };
};

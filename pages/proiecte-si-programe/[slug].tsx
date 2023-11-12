import client from "@/client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticPaths, GetStaticProps } from "next";
import Wrapper from "@/components/layout/Wrapper";
import Section from "@/components/layout/Section";
import richTextOptions from "@/lib/richTextOptions";
import Image from "next/image";
import Link from "next/link";
import processProjects from "@/lib/processProjects";
import DynamicHead from "@/components/DynamicHead";

export default function Project({ projectsData, otherProjects }: any) {
  const { projects } = processProjects(projectsData);
  const project = projects[0];
  const recommendedProjects = processProjects(otherProjects).projects.filter(
    (e: ProjectCard) => e.id != project.id
  );

  return (
    <>
      <DynamicHead
        title={project.title}
        description={project.description}
        image={project.photo}
      />
      <Section bg="color" wave="bottom">
        <Wrapper>
          <div className="w-full mt-[6rem] flex justify-between items-center flex-wrap">
            <div className="w-full md:w-[48%] flex flex-col items-start">
              <h1 className="text-3xl lg:text-4xl mb-3">{project.title}</h1>
              <p>{project.description}</p>
            </div>
            <div className="w-full md:w-[48%] my-5">
              <Image
                src={project.photo}
                width={400}
                height={400}
                alt=""
                className="drop-shadow-xl rounded-md w-full h-auto"
              />
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section bg="light">
        <Wrapper>
          <div className="flex items-start justify-between mt-[-3rem] flex-wrap">
            <div className="w-full md:w-[70%]">
              {documentToReactComponents(project.content, richTextOptions)}
            </div>
            <div className="w-full md:w-[25%] flex flex-col ">
              <h2 className="text-2xl mb-3">Alte proiecte:</h2>
              {recommendedProjects.map((e: ProjectCard) => (
                <Link href={`/proiecte-si-programe/${e.slug}`} key={e.id}>
                  <div className="w-full bg-[#fff] p-5 mb-8 drop-shadow-md rounded-md hover:drop-shadow-xl transition-all hover:translate-y-[-1rem]">
                    <Image
                      src={e.photo}
                      width={400}
                      height={400}
                      alt=""
                      className=" rounded-md mb-3 w-full h-auto"
                    />
                    <div>{e.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Wrapper>
      </Section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "projectsPrograms",
    select: "fields.slug",
  });

  const paths = res.items.map((items: any) => ({
    params: { slug: items.fields.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectsData = await client.getEntries({
    content_type: "projectsPrograms",
    "fields.slug": params?.slug,
  });

  const otherProjects = await client.getEntries({
    content_type: "projectsPrograms",
    limit: 4,
  });

  return {
    props: { projectsData, otherProjects },
    revalidate: 60 * 30,
  };
};

import client from "@/client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticPaths, GetStaticProps } from "next";
import Wrapper from "@/components/layout/Wrapper";
import Section from "@/components/layout/Section";
import richTextOptions from "@/lib/richTextOptions";
import processProjects from "@/lib/processProjects";

export default function Project({ projectsData }: any) {
  const { projects } = processProjects(projectsData);

  console.log(projects);
  return (
    <>
      <Section>
        <Wrapper>{projects[0].title}</Wrapper>
      </Section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "projectsPrograms", select: "fields.slug" });

  const paths = res.items.map((items: any) => ({
    params: { slug: items.fields.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectsData = await client.getEntries({ content_type: "projectsPrograms", "fields.slug": params?.slug });

  return {
    props: { projectsData },
    revalidate: 180,
  };
};

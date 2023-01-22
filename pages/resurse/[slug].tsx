import client from "@/client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticPaths, GetStaticProps } from "next";
import Wrapper from "@/components/layout/Wrapper";
import Section from "@/components/layout/Section";
import richTextOptions from "@/lib/richTextOptions";
import processResources from "@/lib/processResources";
import Image from "next/image";

export default function Project({ resourceData, otherResources }: any) {
  const { resources } = processResources(resourceData);
  const resource = resources[0];
  const recommendedResources = processResources(otherResources).resources.filter((e: ResourceCard) => e.id != resource.id);

  return (
    <>
      <Section bg="light">
        <Wrapper>
          <div className="w-full mt-[6rem] flex justify-between items-center flex=wrap">
            <div className="w-full lg:w-[48%]">
              <p className="text-3xl lg:text-4xl mb-3">{resource.title}</p>
              <p>{resource.year}</p>
            </div>
            <div className="w-full lg:w-[48%]">
              <Image src={resource.image} width={400} height={400} alt="" className="drop-shadow-xl rounded-md" />
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section wave="top">
        <Wrapper>
          <div className="flex items-start justify-between mt-[-3rem] flex-wrap">
            <div className="w-full lg:w-[70%]">{documentToReactComponents(resource.content, richTextOptions)}</div>
            <div className="w-[25%]"></div>
          </div>
        </Wrapper>
      </Section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "resources", select: "fields.slug" });

  const paths = res.items.map((items: any) => ({
    params: { slug: items.fields.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resourceData = await client.getEntries({ content_type: "resources", "fields.slug": params?.slug });

  const otherResources = await client.getEntries({ content_type: "resources", limit: 4 });

  return {
    props: { resourceData, otherResources },
    revalidate: 180,
  };
};

import client from "@/client";
import DynamicHead from "@/components/DynamicHead";
import EventsCard from "@/components/EventsCard";
import ResourceCard from "@/components/ResourceCard";
import HorizontalLine from "@/components/layout/HorizontalLine";
import Section from "@/components/layout/Section";
import Wrapper from "@/components/layout/Wrapper";
import processResources from "@/lib/processResources";
import { GetStaticProps } from "next";
import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Resources({ resourcesData }: any) {
  const { resources } = processResources(resourcesData);

  return (
    <>
      <DynamicHead title="Resurse" />
      <Section bg="light">
        <Wrapper>
          <span className="flex gap-3 text-5xl mt-[8rem]  mb-[1rem]">
            <HiOutlineDocumentText />
            <h1>Resurse</h1>
          </span>
          <p className="w-[100%] md:w-[50%] mb-[-4rem]">
            Spațiu dedicat celor dintre voi care doresc să navigheze în siguranță prin valuri de informații,clipuri video, cărți și proiecte realizate împreună
            cu tine, pentru tine
          </p>
        </Wrapper>
      </Section>
      <Section wave="top">
        <Wrapper>
          <div className="flex flex-wrap w-full justify-between mt-[-3rem]">
            {resources.map((e: ResourceCard) => (
              <ResourceCard title={e.title} slug={e.slug} image={e.image} year={e.year} key={e.id} />
            ))}
          </div>
        </Wrapper>
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const resourcesData = await client.getEntries({
    content_type: "resources",
    select: "fields.name,fields.slug,fields.year,fields.image",
    order: "fields.year",
  });

  return {
    props: { resourcesData },
    revalidate: 180,
  };
};

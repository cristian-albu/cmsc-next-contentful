import client from "@/client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import processEvents from "@/lib/processEvents";
import { GetStaticPaths, GetStaticProps } from "next";
import Wrapper from "@/components/layout/Wrapper";
import Section from "@/components/layout/Section";
import richTextOptions from "@/lib/richTextOptions";

export default function Event({ eventsData }: any) {
  const { events } = processEvents(eventsData);

  return (
    <>
      <Section>
        <Wrapper>
          <div className="w-[70%]">{documentToReactComponents(events[0].body, richTextOptions)}</div>
        </Wrapper>
      </Section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "events", select: "fields.slug" });

  const paths = res.items.map((items: any) => ({
    params: { slug: items.fields.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const eventsData = await client.getEntries({ content_type: "events", "fields.slug": params?.slug });

  return {
    props: { eventsData },
    revalidate: 180,
  };
};

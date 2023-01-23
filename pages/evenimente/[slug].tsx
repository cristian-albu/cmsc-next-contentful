import client from "@/client";
import React, { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticPaths, GetStaticProps } from "next";
import Wrapper from "@/components/layout/Wrapper";
import Section from "@/components/layout/Section";
import richTextOptions from "@/lib/richTextOptions";
import Image from "next/image";
import Link from "next/link";
import DynamicHead from "@/components/DynamicHead";
import processEvents from "@/lib/processEvents";
import formatDate from "@/lib/fortmatDate";

export default function Project({ eventsData, otherEvents }: any) {
  const { events } = processEvents(eventsData);
  const event = events[0];
  const recommendedResources = processEvents(otherEvents).events.filter(
    (e: EventCard, i: number) => e.id != event.id && (event.body.content.length > i + 2 || i < 1)
  );

  const [newDate, setNewDate] = useState(event.date);

  useEffect(() => {
    setNewDate(formatDate(newDate));
  }, []);

  return (
    <>
      <DynamicHead title={event.title} />
      <Section bg="light">
        <Wrapper>
          <div className="w-full mt-[6rem] flex justify-between items-center flex-wrap">
            <div className="w-full md:w-[48%] flex flex-col items-start">
              <h1 className="text-3xl lg:text-4xl mb-3">{event.title}</h1>

              <p className="my-3">{newDate}</p>
              <p>{event.description}</p>
            </div>
            <div className="w-full md:w-[48%] my-5">
              <Image src={event.image} width={400} height={400} alt="" className="drop-shadow-xl rounded-md w-full h-auto" />
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section wave="top">
        <Wrapper>
          <div className="flex items-start justify-between mt-[-3rem] flex-wrap">
            <div className="w-full md:w-[70%]">{documentToReactComponents(event.body, richTextOptions)}</div>
            <div className="w-full md:w-[25%] flex flex-col ">
              <h2 className="text-2xl mb-3">Alte resurse:</h2>
              {recommendedResources.map((e: EventCard) => (
                <div key={e.id} className="w-full bg-[#fff] p-5 mb-8 drop-shadow-md rounded-md hover:drop-shadow-xl transition-all hover:translate-y-[-1rem]">
                  <Link href={`/evenimente/${e.slug}`}>
                    <Image src={e.image} width={400} height={400} alt="" className=" rounded-md mb-3 w-full h-auto" />
                    <div>{e.title}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
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

  const otherEvents = await client.getEntries({ content_type: "events", limit: 4 });

  return {
    props: { eventsData, otherEvents },
    revalidate: 180,
  };
};

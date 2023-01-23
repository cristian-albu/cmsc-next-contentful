import client from "@/client";
import DynamicHead from "@/components/DynamicHead";
import EventsCard from "@/components/EventsCard";
import HorizontalLine from "@/components/layout/HorizontalLine";
import Section from "@/components/layout/Section";
import Wrapper from "@/components/layout/Wrapper";
import processEvents from "@/lib/processEvents";
import { GetStaticProps } from "next";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

export default function Events({ eventsData }: any) {
  const { events } = processEvents(eventsData);
  return (
    <>
      <DynamicHead title="Evenimente" />
      <Section>
        <Wrapper>
          <div className="mt-[5rem] flex flex-col justify-center items-center">
            <span className="flex gap-2 text-5xl">
              <AiOutlineCalendar />
              <p>Evenimente</p>
            </span>

            <HorizontalLine />
          </div>
        </Wrapper>
        <Wrapper>
          <div className="flex justify-between items-start flex-wrap w-full">
            {events.map((e: EventCard) => (
              <EventsCard key={e.id} id={e.id} title={e.title} image={e.image} date={e.date} description={e.description} slug={e.slug} location={e.location} />
            ))}
          </div>
        </Wrapper>
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const eventsData = await client.getEntries({
    content_type: "events",
    select: "fields.name,fields.slug,fields.thumbnail,fields.date,fields.locationText,fields.description",
    order: "fields.date",
  });

  return {
    props: { eventsData },
    revalidate: 180,
  };
};

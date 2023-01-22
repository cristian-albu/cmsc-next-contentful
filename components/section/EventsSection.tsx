import React from "react";
import Section from "../layout/Section";
import Wrapper from "../layout/Wrapper";
import HorizontalLine from "../layout/HorizontalLine";
import LinkButton from "../LinkButton";
import EventsCard from "../EventsCard";
import { AiOutlineCalendar } from "react-icons/ai";

export default function EventsSection({ eventsList }: EventList) {
  return (
    <Section bg="light">
      <Wrapper>
        <div className="flex justify-center items-center w-[100%]  flex-col ">
          <h2 className="text-5xl">Evenimente</h2>
          <HorizontalLine />
          <div className="flex  justify-between items-start w-[100%] mb-5 flex-wrap">
            {eventsList.map((e: EventCard, i: number) => (
              <EventsCard id={e.id} title={e.title} image={e.image} date={e.date} description={e.description} slug={e.slug} location={e.location} key={i} />
            ))}
          </div>
          <LinkButton type="dark" text="Vezi toate evenimentele" link="/evenimente" icon={<AiOutlineCalendar />} />
        </div>
      </Wrapper>
    </Section>
  );
}

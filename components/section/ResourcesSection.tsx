import React from "react";
import Section from "../layout/Section";
import Wrapper from "../layout/Wrapper";
import Link from "next/link";
import LinkButton from "../LinkButton";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function ResourcesSection({ resourcesList }: ResourceList) {
  return (
    <Section bg="color">
      <Wrapper>
        <div className="flex justify-between flex-wrap items-center ">
          <div className="flex flex-col w-[100%] lg:w-[38%] items-start gap-3 mb-5">
            <h2 className="text-5xl">Resurse</h2>
            <p>
              Spațiu dedicat celor dintre voi care doresc să navigheze în siguranță prin valuri de informații, clipuri video, cărți și proiecte realizate
              împreună cu tine, pentru tine
            </p>
            <LinkButton text="Vezi toate" link="/resurse" icon={<HiOutlineDocumentText />} />
          </div>
          <div className="flex w-[100%] lg:w-[60%] flex-wrap gap-3">
            {resourcesList.map((e: ResourceCard) => (
              <Link
                href={`/resurse/${e.slug}`}
                key={`${e.id}`}
                className="border-[1px] p-2 rounded-full transition-colors hover:bg-[#fff] hover:text-dark relative flex items-end"
                id="resourceHover"
              >
                {e.title.slice(0, 25)}
                {e.title.length <= 25 ? "" : "..."}

                {e.title.length >= 25 ? (
                  <div className={`absolute bg-[#fff] text-dark rounded-md drop-shadow-xl p-3 bottom-[2rem] left-[20%] w-[80%]`}>{e.title}</div>
                ) : (
                  <></>
                )}
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}

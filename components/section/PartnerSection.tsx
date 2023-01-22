import React from "react";
import Section from "../layout/Section";
import Wrapper from "../layout/Wrapper";
import HorizontalLine from "../layout/HorizontalLine";
import PartnerCard from "../PartnerCard";

export default function PartnerSection({ partnerList }: PartnerList) {
  return (
    <Section bg="light">
      <Wrapper>
        <div className="flex flex-col justify-between items-center w-[100%]">
          <h2 className="text-5xl">Parteneri</h2>
          <HorizontalLine />
          <div className="flex justify-center items-start w-[100%] flex-wrap">
            {partnerList.map((e: PartnerCard, i: number) => (
              <PartnerCard logo={e.logo} name={e.name} url={e.url} key={i} />
            ))}
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}

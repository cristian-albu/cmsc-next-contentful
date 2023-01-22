import React from "react";
import Section from "../layout/Section";
import Wrapper from "../layout/Wrapper";
import LinkButton from "../LinkButton";
import { FaRegEnvelope } from "react-icons/fa";

export default function CallToActionSection() {
  return (
    <Section bg="color" wave="top">
      <Wrapper>
        <div className="flex flex-col justify-center items-center gap-[1rem] text-center my-[10rem]">
          <h2 className="text-5xl">Apel la acţiune</h2>
          <p>
            Pentru persoanele care au nevoie de asistenta de urgenta in cazuri de violenta domestica sau violenta pe baza de gen, va rugam sa ne scrieti la
            email info@cmsc.ro sau pe facebook
          </p>
          <LinkButton text="Contactaţi-ne" link="/contact" icon={<FaRegEnvelope />} />
        </div>
      </Wrapper>
    </Section>
  );
}

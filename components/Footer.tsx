import React from "react";
import Section from "./layout/Section";
import Wrapper from "./layout/Wrapper";
import Link from "next/link";

export default function Footer({ setShowPrivacy }: any) {
  return (
    <>
      <Section bg="dark">
        <Wrapper>
          <p className="text-5xl">Informaţii utile</p>
          <div className="py-[3rem] flex justify-between flex-wrap">
            <div className="flex flex-col items-start justify-start w-full lg:w-[48%] gap-3">
              <p className="text-xl ">Paginile CMSC</p>
              <Link href="/">Acasă</Link>
              <Link href="/proiecte-si-programe">Proiecte şi programe</Link>
              <Link href="/evenimente">Evenimente</Link>
              <Link href="/resurse">Resurse</Link>
              <Link href="/despre-noi">Despre noi</Link>
              <Link href="/contact">Contact</Link>
              <a className="cursor-pointer" onClick={() => setShowPrivacy(true)}>
                Politica de confidenţialitate
              </a>
            </div>
            <div className="flex flex-col items-start justify-start w-full lg:w-[48%] gap-3">
              <p className="text-xl ">Date contact</p>
              <a href="">Pagina Facebook</a>
              <a href="">Email: lalbu@cmsc.ro</a>
              <a href="">Telefon mobil: +40 722 500 372</a>
              <a href="">Telefon fix: +40 332 231 249</a>
              <a href="">Constantin Langa Street no. 103X, Miroslava village, Miroslava commune, Iasi county, Romania, 707305</a>
            </div>
          </div>
        </Wrapper>
      </Section>
    </>
  );
}

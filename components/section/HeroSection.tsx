import React from "react";
import Wrapper from "../layout/Wrapper";
import Section from "../layout/Section";
import Image from "next/image";
import LinkButton from "../LinkButton";
import { FaRegEnvelope } from "react-icons/fa";

const styles = {
  imageContainer: `w-[47%] aspect-square h-auto object-cover overflow-hidden  rounded-lg drop-shadow-xl mt-[4rem] mb-[-2rem]`,
  imageContainer2: `w-[47%] aspect-square h-auto object-cover  overflow-hidden rounded-lg drop-shadow-xl`,
  image: `min-w-[100%] aspect-square  object-cover`,
};

const heroImages = ["/assets/hero_img_1.jpg", "/assets/hero_img_2.jpg", "/assets/hero_img_3.jpg", "/assets/hero_img_4.jpg"];

export default function HeroSection() {
  return (
    <Section bg="color" wave="bottom">
      <Wrapper>
        <div className="flex items-center justify-between my-[1rem] mt-[8rem]  flex-wrap">
          <div className="flex flex-col w-[100%] gap-5 justify-center items-start md:w-[50%]">
            <h1 className="text-5xl">Construim comunități mai sigure împreună</h1>
            <div>
              Centrul de Mediere si Securitate Comunitara (CMSC) este o fundatie independenta infiintata in anul 2000 in Iasi, Romania, construind impreuna cu
              comunitatile locale modele de dezvoltare si cooperare menite sa ofere un spatiu mai sigur, deschis si sustenabil.
            </div>
            <LinkButton text="Contactaţi-ne" link="/contact" icon={<FaRegEnvelope />} />
          </div>
          <div className="flex w-[100%] flex-wrap justify-between items-center md:w-[40%]">
            {heroImages.map((e: string, i: number) => (
              <div className={i % 2 == 0 ? styles.imageContainer : styles.imageContainer2} key={i}>
                <Image src={e} width={300} height={300} alt="decorative" className={styles.image} />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}

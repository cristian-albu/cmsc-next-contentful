import React from "react";
import Section from "./layout/Section";
import Wrapper from "./layout/Wrapper";
import Link from "next/link";
import Script from "next/script";

export default function Footer({ setShowPrivacy }: any) {
  return (
    <>
      <Section bg="dark">
        <Wrapper>
          <p className="text-5xl">Informaţii utile</p>
          <div className="py-[3rem] flex justify-between flex-wrap">
            <div className="flex flex-col items-start justify-start w-full lg:w-[48%] gap-3">
              <p className="text-xl ">Date contact</p>
              <a href="https://www.facebook.com/centruldemedieresisecuritatecomunitara" target="_blank" rel="noreferrer">
                Pagina Facebook
              </a>
              <p>Email: lalbu@cmsc.ro</p>
              <p>Telefon verde: 0800.070.017</p>
              <p>Telefon urgență: +40787.878.806</p>
              <a href="https://goo.gl/maps/dN65DYnXFbjzioZh9" target="_blank" rel="noreferrer">
                Constantin Langa Street no. 103X, Miroslava village, Miroslava commune, Iasi county, Romania, 707305
              </a>
            </div>
            <div className="flex flex-col items-start justify-start w-full lg:w-[48%] gap-3">
              <p className="text-xl ">Paginile CMSC</p>
              <Link href="/">Acasă</Link>
              <Link href="/proiecte-si-programe">Proiecte şi programe</Link>
              <Link href="/evenimente">Evenimente</Link>
              <Link href="/resurse">Resurse</Link>
              <Link href="/despre-noi">Despre noi</Link>
              <Link href="/contact">Contact</Link>
              <div className="cursor-pointer" onClick={() => setShowPrivacy(true)}>
                Politica de confidenţialitate
              </div>
            </div>
          </div>
          <p>
            Dacă dumneavoastră, sau unei persoane cunoscute, vă este teamă de o persoană apropiată, dacă vă simțiți în nesiguranță sau amenințată: * ne puteți
            suna gratuit la Tel. Verde: 0800.070.017 (accesibil doar în România); * puteți apela la Telefonul de urgență: +40787.878.806, tarif normal pe
            telefon (apel vocal) și gratuit online pentru mesaje scrise sau vocale pe Telegram, WhatsApp și pentru mesaje scrise de tip SMS. * puteți trimite un
            mesaj scris pe platforma www.helenahelpline.com Helena Helpline este accesibila NON STOP in limba română, rusă, ucraineană și engleză.
          </p>
          <div>
            <div>
              <div id="google_translate_element"></div>
              <Script id="googleTranslateScript" type="text/javascript">
                {`
                  function googleTranslateElementInit() {
                    new google.translate.TranslateElement({pageLanguage: 'ro', layout: google.translate.TranslateElement}, 'google_translate_element');
                  }
                  `}
              </Script>

              <Script
                id="googleTranslateScript2"
                type="text/javascript"
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
              ></Script>
            </div>
          </div>
        </Wrapper>
      </Section>
    </>
  );
}

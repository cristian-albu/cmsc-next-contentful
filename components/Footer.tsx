import React from "react";
import Section from "./layout/Section";
import Wrapper from "./layout/Wrapper";
import Link from "next/link";
import Script from "next/script";

export default function Footer({ setShowPrivacy }: any) {
  return (
    <>
      <Section bg="color" wave="bottomDark">
        <Wrapper>
          <div className="w-full flex flex-wrap items-center">
            <div className="w-full  flex flex-col items-start justify-start mb-[3rem]">
              <h2 className="text-xl md:text-4xl mb-2 md:max-w-[80%]">
                Redirecționează 3.5% din impozitul pe profit pentru a continua
                proiectele pe combaterea violenței împotriva femeilor!
              </h2>
              <a
                href="https://redirectioneaza.ro/cmsc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fff] text-darkPurple rounded-full px-3 py-2 flex justify-center items-center mt-2 transition hover:scale-[1.03]"
              >
                Redirecţionează
              </a>
            </div>
            <div className="w-full flex justify-between flex-wrap">
              <p className="w-full md:w-[48%]">
                Fundația Centrul de Mediere și Securitate Comunitară (CMSC) -
                singurul ONG din Iași licențiat în servicii pentru victime ale
                violenței domestice – asistă anual aproximativ 150 persoane
                adulte și copii ce se confruntă cu situații abuzive. Acestea
                beneficiază de consiliere juridică și reprezentare în instanță,
                de programe de terapie individuală/de grup pentru a depăși
                traumele generate de violență, programe educaționale pentru
                copiii martori/victime ai/ale violenței domestice, asistență și
                suport material în situații de criză, precum și decontarea unor
                costuri cum ar fi cele necesare pentru eliberarea certificatelor
                medico-legale.
              </p>
              <p className="w-full md:w-[48%]">
                Cazurile ajung în atenția fundației prin: adresarea directă a
                persoanei care are nevoie de sprijin, semnalarea de către
                colaboratorii cu care s-au dezvoltat parteneriate (Direcția de
                Asistență Socială, Direcția Generală de Asistență Socială și
                Protecția Copilului, alte ONG-uri, autorități locale, secții de
                poliție, unități de învățământ etc.) sau prin intermediul
                Serviciului Helpline înființat de către CMSC, telefon verde
                gratuit 0800.070.017 dedicat victimelor violenței domestice.
                Aceste servicii sunt oferite în mod gratuit fiind finanțate,
                pentru o perioadă determinată, din fonduri norvegiene. Pentru a
                asigura o continuitate în furnizarea acestor programe, avem
                nevoie de contribuția dumneavoastră.
              </p>
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section bg="dark">
        <Wrapper>
          <p className="text-5xl">Informaţii utile</p>
          <div className="py-[3rem] flex justify-between flex-wrap">
            <div className="flex flex-col items-start justify-start w-full lg:w-[48%] gap-3">
              <p className="text-xl ">Date contact</p>
              <a
                href="https://www.facebook.com/centruldemedieresisecuritatecomunitara"
                target="_blank"
                rel="noreferrer"
              >
                Pagina Facebook
              </a>
              <p>Email: lalbu@cmsc.ro</p>
              <p>Telefon verde: 0800.070.017</p>
              <p>Telefon urgență: +40787.878.806</p>
              <a
                href="https://goo.gl/maps/dN65DYnXFbjzioZh9"
                target="_blank"
                rel="noreferrer"
              >
                Constantin Langa Street no. 103X, Miroslava village, Miroslava
                commune, Iasi county, Romania, 707305
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
              <div
                className="cursor-pointer"
                onClick={() => setShowPrivacy(true)}
              >
                Politica de confidenţialitate
              </div>
            </div>
          </div>
          <p>
            Dacă dumneavoastră, sau unei persoane cunoscute, vă este teamă de o
            persoană apropiată, dacă vă simțiți în nesiguranță sau amenințată: *
            ne puteți suna gratuit la Tel. Verde: 0800.070.017 (accesibil doar
            în România); * puteți apela la Telefonul de urgență: +40787.878.806,
            tarif normal pe telefon (apel vocal) și gratuit online pentru mesaje
            scrise sau vocale pe Telegram, WhatsApp și pentru mesaje scrise de
            tip SMS. * puteți trimite un mesaj scris pe platforma
            www.helenahelpline.com Helena Helpline este accesibila NON STOP in
            limba română, rusă, ucraineană și engleză.
          </p>

          <a
            href="https://www.koddezign.com"
            className="mx-auto gap-3 my-10 flex justify-center items-center"
          >
            <div className="w-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 331.71 245"
                fill="#FFFFFF"
              >
                <defs>
                  <style></style>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="title">
                    <path
                      className="cls-1"
                      d="M313.51,190.49a98.34,98.34,0,0,1-138.92,0L105.12,121l95.3-95.29h29V0H150.57V25.74H164L68.73,121l87.66,87.66a124,124,0,0,0,175.32,0Z"
                    />
                    <polygon
                      className="cls-1"
                      points="52.29 25.74 78.85 25.74 78.85 0 0 0 0 25.74 26.55 25.74 26.55 213.87 0 213.87 0 239.6 78.85 239.6 78.85 213.87 52.29 213.87 52.29 25.74"
                    />
                    <path
                      className="cls-1"
                      d="M186.36,121a57.69,57.69,0,1,0,57.69-57.69A57.76,57.76,0,0,0,186.36,121Zm57.69-31.95a32,32,0,1,1-32,32A32,32,0,0,1,244.05,89.08Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            Creat de Koddezign
          </a>

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

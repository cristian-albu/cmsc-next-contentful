import React, { useEffect, useState } from "react";
import HorizontalLine from "./layout/HorizontalLine";
import { setCookie, getCookie, hasCookie } from "cookies-next";
import Button from "./Button";
import {
  AiOutlineCheckCircle,
  AiOutlineSave,
  AiOutlineSetting,
} from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

const styles = {
  container: `fixed bottom-0 right-0  flex flex-col justify-center items-center `,
  containerOpened: `w-[100vw] h-[100vh] p-[2rem] md:p-[4rem] 2xl:p-[5rem]`,
  prefButton: `absolute bottom-[1.5rem] right-[7rem] text-2xl bg-[#fff] p-1 drop-shadow-xl rounded-full cursor-pointer flex items-end`,
  bannerContainer: `absolute left-[10vw] bottom-0 bg-dark text-[#fff] p-10 rounded-tl-[3rem]  rounded-tr-[3rem] drop-shadow-xl w-[80vw] flex flex-col drop-shadow-2xl`,
  prefsContainer: `bg-[#fff] p-8 rounded-md drop-shadow-xl w-[100%] flex flex-col overflow-auto max-h-[80vh] items-start max-w-[1200px]`,
  close: `absolute w-[100%] h-[100%] transition bg-[#00000021] backdrop-blur-sm flex justify-end items-start pt-[5rem] pr-[3rem] cursor-pointer`,
  secondaryButton: `cursor-pointer transition-colors text-darkPurple hover:text-pink`,
  buttonContainer: `flex flex-wrap justify-between items-center w-full`,
  buttonContainer2: `flex flex-wrap justify-start gap-5 items-center`,
  label: `flex gap-1 cursor-pointer mb-3`,
};

const staticData = {
  banner: {
    title: `Folosim cookie-uri`,
    desc: `Folosim cookie-uri pentru a vă îmbunătăți experiența de navigare și pentru a personaliza conținutul pe care îl prezentăm. Meniul de preferinţe vă permite să controlați tipurile de cookie-uri pe care le acceptați.`,
    btnPrivacy: `Politica de confidenţialitate`,
    btnPrefs: `Preferinţe`,
    btnRefuse: `Refuz toate`,
    btnAccetp: `Accept toate`,
  },
  preferences: {
    title: `Preferinţe`,
    seeMore: `Vezi mai multe pe`,
    desc: `Folosim cookie-uri pentru a vă îmbunătăți experiența de navigare și pentru a personaliza conținutul pe care îl prezentăm. Meniul de preferinţe vă permite să controlați tipurile de cookie-uri pe care le acceptați.`,
    essentialTitle: `Esenţiale`,
    essentialDesc: `Pentru funcţionarea site-ului. Ne trebuie măcar 1 cookie pentru a stoca alegerea dvs. (numele acestuia este "consentChoiceCMSC")`,
    prefsTitle: `Preferinţă`,
    prefDesc: `Pentru a putea vizualiza anumite tipuri de conţinut (exemplu: postări de pe Facebook sau video-uri de pe YouTube ce utilizează cookie-uri)`,
    analyticsTitle: `Analitice`,
    analyticsDesc: `Pentru a măsura traficul şi performanţa website-ului`,
    adsTitle: `Publicitate`,
    adsDesc: `Pentru a putea personaliza anunţurile publicitare. (În acest moment nu folosim anunţuri)`,
    save: "Salvează",
  },
  privacy: {
    body: [
      `1. Introducere`,
      `
    Vă respectăm confidențialitatea și ne angajăm să vă protejăm datele personale. Această politică de confidențialitate explică modul în care colectăm, utilizăm și vă protejăm datele personale, inclusiv utilizarea cookie-urilor.`,
      `2. Controler`,
      `
    Operatorul responsabil cu colectarea, utilizarea și protejarea datelor dumneavoastră cu caracter personal este CMSC (Centrul de Mediere și Securitate Comunitară).`,
      `3. Scopul colectării datelor`,
      `
    Colectăm datele dumneavoastră personale în scopul de a putea trimite e-mailuri sau de a contacta persoanele care și-au arătat interesul. Colectăm doar date personale care sunt necesare în acest scop.`,
      `4. Temeiul legal pentru prelucrare`,
      `
    Temeiul legal pentru prelucrarea datelor dumneavoastră cu caracter personal este consimțământul dvs.`,
      `5. Păstrarea datelor`,
      `
      Datele dumneavoastră personale vor fi păstrate pe o perioadă de până la 2 ani.`,
      `6. Securitatea datelor`,
      `
    Doar membrii organizației și procesatorii oficiali de date au acces la datele dumneavoastră personale. Am implementat măsuri adecvate pentru a vă proteja datele personale împotriva accesului, utilizării sau dezvăluirii neautorizate.`,
      `7. Partajarea datelor`,
      `
    Este posibil să împărtășim datele dumneavoastră cu caracter personal cu terțe părți în scopul analizei, cum ar fi Google, Facebook și Vercel (furnizorul nostru de găzduire) pentru rapoarte de performanță.`,
      `8. Cookie-uri`,
      `
    Folosim cookie-uri pentru a vă îmbunătăți experiența de navigare și pentru a personaliza conținutul și reclamele pe care vi le arătăm. Avem pe site-ul nostru un banner pentru cookie-uri care vă permite să controlați tipurile de cookie-uri pe care le acceptați. Puteți alege să acceptați cookie-uri esențiale, cookie-uri de preferințe, cookie-uri de analiză și cookie-uri publicitare. Dacă alegeți să nu acceptați niciun cookie, este posibil ca unele caracteristici ale site-ului nostru web să nu funcționeze corect.`,
      `9. Responsabil cu protecția datelor`,
      `Dacă aveți întrebări sau nelămuriri cu privire la această politică de confidențialitate sau la practicile noastre de protecție a datelor, vă rugăm să ne contactați la contact@koddezign.com`,
      `10. Explicaţie simplă`,
      `Acest site foloseşte găzduire de la Vercel. Aceştia au access la câteva date despre traficul şi performanţa acestuia. De asemenea, folosim sau vom folosi Google Analytics şi posibil Facebook Pixel pentru a monitoriza câţi oameni intră pe site. Nu avem access la date personale decât sub formă agregată şi anonimizată. Este posibil să stocăm datele de contact trimise printr-un formular doar dacă persoana ce le trimite bifează că este de accord. `,
    ],
  },
};

export default function Gdpr({ showPrivacy, setShowPrivacy }: any) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [cookiePref, setCookiePref] = useState(false);
  const [cookieAnalytics, setCookieAnalytics] = useState(false);
  const [cookieAds, setCookieAds] = useState(false);

  function handleClose() {
    setShowBanner(false);
    setShowPreferences(false);
    setShowPrivacy(false);
  }

  function openPrefs() {
    setShowBanner(false);
    setShowPreferences(true);
    setShowPrivacy(false);
  }

  function openPrivacy() {
    setShowBanner(false);
    setShowPreferences(false);
    setShowPrivacy(true);
  }

  function handleAcceptAll() {
    setCookiePref(true);
    setCookieAnalytics(true);
    setCookieAds(true);
    setCookie("consentChoiceCMSC", "acceptAll", { maxAge: 120960000 });
    handleClose();
  }

  function handleRefuseAll() {
    document.cookie.split(";").forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    setCookiePref(false);
    setCookieAnalytics(false);
    setCookieAds(false);
    setCookie("consentChoiceCMSC", "essential", { maxAge: 120960000 });
    handleClose();
  }

  function handleSave() {
    let val: Array<string> = [];

    if (cookiePref) val.push("pref");
    if (cookieAnalytics) val.push("analytics");
    if (cookieAds) val.push("ads");
    const data = val.length
      ? val.length > 2
        ? "acceptAll"
        : val.join(".")
      : "essential";

    setCookie("consentChoiceCMSC", data, { maxAge: 120960000 });

    handleClose();
  }

  useEffect(() => {
    if (hasCookie("consentChoiceCMSC")) {
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    let val = [""];
    const cookieData = getCookie("consentChoiceCMSC");

    if (typeof cookieData == "string") val = cookieData.split(".");

    if (val.includes("pref")) setCookiePref(true);
    if (val.includes("analytics")) setCookieAnalytics(true);
    if (val.includes("ads")) setCookieAds(true);
    if (val.includes("acceptAll")) {
      setCookiePref(true);
      setCookieAnalytics(true);
      setCookieAds(true);
    }
  }, []);

  return (
    <div
      className={
        showPreferences || showPrivacy
          ? `${styles.container} ${styles.containerOpened}`
          : styles.container
      }
      style={{ zIndex: "98" }}
    >
      <div
        className={styles.prefButton}
        aria-describedby={"Preferinţe şi politica de confidenţialitate"}
        onClick={() => openPrefs()}
        id="prefsHover"
      >
        🍪
        <div
          className={`absolute bg-[#fff] text-dark rounded-md drop-shadow-xl p-3 bottom-[2rem] right-[20%]  text-lg`}
        >
          {staticData.banner.btnPrefs}
        </div>
      </div>
      {showPreferences || showPrivacy ? (
        <div className={styles.close} onClick={() => handleClose()} />
      ) : (
        <></>
      )}
      {showBanner ? (
        <div className={styles.bannerContainer}>
          <p className="text-2xl">🍪{staticData.banner.title}</p>
          <p>{staticData.banner.desc}</p>
          <div className="mb-5 flex flex-col">
            <span>
              {staticData.preferences.seeMore}{" "}
              <div
                className="cursor-pointer hover:text-pink transition-colors"
                onClick={() => openPrivacy()}
              >
                {staticData.banner.btnPrivacy}
              </div>
            </span>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              text={staticData.banner.btnPrefs}
              type="dark"
              icon={<AiOutlineSetting />}
              onClick={() => openPrefs()}
            />
            <div className={styles.buttonContainer2}>
              <Button
                text={staticData.banner.btnRefuse}
                type="dark"
                icon={<RxCrossCircled />}
                onClick={() => handleRefuseAll()}
              />
              <Button
                text={staticData.banner.btnAccetp}
                type="color"
                icon={<AiOutlineCheckCircle />}
                onClick={() => handleAcceptAll()}
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {showPreferences ? (
        <div className={styles.prefsContainer}>
          <p className="text-2xl lg:text-4xl">{staticData.preferences.title}</p>
          <p>{staticData.preferences.desc}</p>

          <div className="mb-5 flex flex-col">
            <span>
              {staticData.preferences.seeMore}{" "}
              <div
                className={styles.secondaryButton}
                onClick={() => openPrivacy()}
              >
                {staticData.banner.btnPrivacy}
              </div>
            </span>
          </div>
          <HorizontalLine />

          <div className="checkboxes" id="cookieCheckboxContainer">
            <label>
              <input type="checkbox" checked={true} disabled={true} />
              <p>{staticData.preferences.essentialTitle}</p>
            </label>
            <p>{staticData.preferences.essentialDesc}</p>
            <label>
              <input
                type="checkbox"
                checked={cookiePref}
                onChange={() => setCookiePref(!cookiePref)}
              />
              <p>{staticData.preferences.prefsTitle}</p>
            </label>
            <p>{staticData.preferences.prefDesc}</p>
            <label>
              <input
                type="checkbox"
                checked={cookieAnalytics}
                onChange={() => setCookieAnalytics(!cookieAnalytics)}
              />
              <p>{staticData.preferences.analyticsTitle}</p>
            </label>
            <p>{staticData.preferences.analyticsDesc}</p>
            <label>
              <input
                type="checkbox"
                checked={cookieAds}
                onChange={() => setCookieAds(!cookieAds)}
              />
              <p>{staticData.preferences.adsTitle}</p>
            </label>
            <p>{staticData.preferences.adsDesc}</p>
          </div>
          <HorizontalLine />
          <div className={styles.buttonContainer}>
            <div className={styles.buttonContainer2}>
              <Button
                text={staticData.banner.btnRefuse}
                icon={<RxCrossCircled />}
                onClick={() => handleRefuseAll()}
              />
              <Button
                text={staticData.banner.btnAccetp}
                type="dark"
                icon={<AiOutlineCheckCircle />}
                onClick={() => handleAcceptAll()}
              />
            </div>
            <Button
              text={staticData.preferences.save}
              type="color"
              icon={<AiOutlineSave />}
              onClick={() => handleSave()}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      {showPrivacy ? (
        <div className={styles.prefsContainer}>
          <p className="text-2xl ">{staticData.banner.btnPrivacy}</p>
          <HorizontalLine />
          <div className="mb-3">
            <div className={styles.secondaryButton} onClick={() => openPrefs()}>
              {staticData.banner.btnPrefs}
            </div>
          </div>

          <ul>
            {staticData.privacy.body.map((e: string, i: number) => (
              <li className={/\d/.test(e[0]) ? "text-xl mb-1" : "mb-5"} key={i}>
                {e}
              </li>
            ))}
          </ul>
          <Button
            text={staticData.banner.btnPrefs}
            type="color"
            onClick={() => openPrefs()}
          />
        </div>
      ) : (
        <></>
      )}

      <style jsx>{`
        #prefsHover > div {
          transition: transform 0.2s;
          transform-origin: bottom right;
          transform: scale(0);
        }

        #prefsHover:hover > div {
          transform: scale(1);
        }
        #cookieCheckboxContainer {
          padding-bottom: 1rem;
          margin-top: -1rem;
        }
        #cookieCheckboxContainer > label {
          display: flex;
          gap: 0.25rem;
          cursor: pointer;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}

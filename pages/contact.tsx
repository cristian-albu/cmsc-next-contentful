import LinkButton from "@/components/LinkButton";
import Section from "@/components/layout/Section";
import Wrapper from "@/components/layout/Wrapper";
import { sendContactForm } from "@/lib/sendContactForm";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const styles = {
  form: `bg-[#fff] p-5 rounded-md drop-shadow-xl w-full lg:w-[48%] flex flex-col justify-start items-start text-dark`,
  label: `w-full mb-5`,
  labelText: `mb-2`,
  textInput: `border-dark border-2 p-2 w-full hover:border-pink active:border-pink focus:border-pink outline-none transition-all rounded-md`,
  textArea: `max-w-full min-w-full min-h-[5rem] max-h-[10rem] scroll-auto`,
};

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const [inputClick, setInputClick] = useState("");

  const [formData, setFormData] = useState({
    name: "empty",
    email: "empty",
    message: `empty`,
  });

  const formErrorsText = {
    generalErr: `Vă rugăm verificaţi datele completate şi încercaţi din nou. Toate câmpurile notate cu simbolul * trebuie completate.`,
    nameFieldErr: "Câmpul trebuie să aibă minim 3 caractere şi maxim 50",
    messageFieldErr: "Câmpul trebuie să aibă minim 3 caractere şi maxim 500",
    emailFieldErr: "Adresa trebuie să fie în formatul potrivit",
    checkboxFieldErr: "Trebuie să bifaţi faptul că aţi citit şi sunteţi de acord cu politica de confidenţialitate",
  };

  const [formErrors, setFormErrors] = useState({
    nameErrorState: false,
    messageErrorState: false,
    emailErrorState: false,
    checkboxState: false,
    generalErr: false,
    firstTimeNameErr: true,
    firstTimeEmailErr: true,
    firstTimeMsgErr: true,
    firstTimeCheckErr: true,
  });

  function handleCheckbox() {
    setFormErrors({
      ...formErrors,
      firstTimeCheckErr: false,
      checkboxState: !formErrors.checkboxState,
    });
  }

  useEffect(() => {
    function handleName() {
      if (formData.name.length < 3 || formData.name.length > 50) {
        setFormErrors({
          ...formErrors,
          nameErrorState: true,
          firstTimeNameErr: false,
        });
      } else {
        setFormErrors({
          ...formErrors,
          nameErrorState: false,
        });
      }
    }
    handleName();
    return handleName();
  }, [formData.name, formErrors]);

  useEffect(() => {
    function handleEmail() {
      !formData.email.match(
        /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/
      )
        ? setFormErrors({
            ...formErrors,
            emailErrorState: true,
            firstTimeEmailErr: false,
          })
        : setFormErrors({
            ...formErrors,
            emailErrorState: false,
          });
    }
    handleEmail();
    return handleEmail();
  }, [formData.email, formErrors]);

  useEffect(() => {
    function handleMessage() {
      formData.message.length < 3 || formData.message.length > 500
        ? setFormErrors({
            ...formErrors,
            messageErrorState: true,
            firstTimeMsgErr: false,
          })
        : setFormErrors({
            ...formErrors,
            messageErrorState: false,
          });
    }
    handleMessage();
    return handleMessage();
  }, [formData.message, formErrors]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!formErrors.nameErrorState && !formErrors.messageErrorState && !formErrors.emailErrorState && formErrors.checkboxState) {
      sendContactForm(formData);
      setSuccess(true);
    } else {
      setFormErrors({
        ...formErrors,
        generalErr: true,
      });

      toast.error(`${formErrorsText.generalErr}`, {
        toastId: "generalErr",
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <Section wave="bottom" bg="color">
        <Wrapper>
          <div className="flex justify-between mt-[4rem]" onSubmit={(e) => handleSubmit(e)}>
            {!success && (
              <form method="post" className={styles.form}>
                <h2 className="text-2xl mb-5">Trimite un mesaj</h2>
                <label className={styles.label}>
                  <p className={styles.labelText}>Nume *</p>
                  <input
                    type="text"
                    name="name"
                    className={styles.textInput}
                    onClick={() => setInputClick("name")}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />
                </label>

                {formErrors.nameErrorState && inputClick == "name" && <p className="mb-5 text-[#d04a4a]">{formErrorsText.nameFieldErr}</p>}

                <label className={styles.label}>
                  <p className={styles.labelText}>E-mail *</p>
                  <input
                    type="email"
                    name="email"
                    className={styles.textInput}
                    onClick={() => setInputClick("email")}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />
                </label>

                {formErrors.emailErrorState && inputClick == "email" && <p className="mb-5 text-[#d04a4a]">{formErrorsText.emailFieldErr}</p>}

                <label className={styles.label}>
                  <p className={styles.labelText}>Mesaj *</p>
                  <textarea
                    name="mesaj"
                    className={`${styles.textInput} ${styles.textArea}`}
                    onClick={() => setInputClick("message")}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                  />
                </label>

                {formErrors.messageErrorState && inputClick == "message" && <p className="mb-5 text-[#d04a4a]">{formErrorsText.messageFieldErr}</p>}

                <label className="flex gap-2 cursor-pointer mb-3">
                  <input type="checkbox" checked={formErrors.checkboxState} onChange={() => handleCheckbox()} />
                  <p className="mt-0 p-0">Am citit şi sunt de acord cu politica de confidenţialitate *</p>
                </label>

                {!formErrors.checkboxState && !formErrors.firstTimeCheckErr && <p className="mb-5 text-[#d04a4a]">{formErrorsText.checkboxFieldErr}</p>}

                <label>
                  <input
                    type="submit"
                    name="submit"
                    className="bg-darkPurple px-3 py-2 text-[#fff] rounded-full cursor-pointer hover:bg-pink  transition-all"
                    value="Trimite"
                  />
                </label>
              </form>
            )}
            {success && (
              <div className="w-[50%] flex flex-col gap-5 justify-center items-center py-[10rem]">
                <p className="text-xl">Mesajul tău a fost trimis cu succes!</p>
                <p>Îţi vom răspunde cât de repede putem</p>
                <LinkButton text="Mergi pe pagina de acasă" link="/" />
              </div>
            )}
            <div className="w-[50%] flex flex-col justify-center gap-5 p-10">
              <div className=" mb-[1rem]">
                <span className="flex gap-3 text-4xl items-center">
                  <FaRegEnvelope />
                  <h1 className="">Contact</h1>
                </span>
              </div>
              <span className="flex flex-col gap-2">
                <p className="font-bold">Telefon mobil:</p>
                <p>+40 722 500 372</p>
              </span>

              <span className="flex flex-col gap-2">
                <p className="font-bold">Telefon mobil:</p>
                <p>+40 332 231 249</p>
              </span>

              <span className="flex flex-col gap-2">
                <p className="font-bold">Adresă:</p>
                <a
                  href="https://www.google.com/maps/place/Strada+Constantin+Langa+103,+Miroslava+707305/@47.1414928,27.5001655,15z/data=!4m6!3m5!1s0x40cafb1aaf20670b:0x41444cef81ee82e!8m2!3d47.1425788!4d27.5156102!15sCmRDb25zdGFudGluIExhbmdhIFN0cmVldCBuby4gMTAzWCwgTWlyb3NsYXZhIHZpbGxhZ2UsIE1pcm9zbGF2YSBjb21tdW5lLCBJYXNpIGNvdW50eSwgUm9tYW5pYSwgNzA3MzA1kgEQZ2VvY29kZWRfYWRkcmVzcw?shorturl=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Constantin Langa Street no. 103X, Miroslava village, Miroslava commune, Iasi county, Romania, 707305
                </a>
              </span>
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section bg="light"></Section>
    </>
  );
}

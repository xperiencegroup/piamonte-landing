import { useState } from "react";
import { useSearchParams } from "react-router";
import InstagramIcon from "@/assets/icons/contact/InstagramIcon";
import SendIcon from "@/assets/icons/contact/SendIcon";
import PaperBackground from "@/assets/images/Contacto/paperBackground.svg";
import XperienceLogo from "../assets/icons/xperienceGroup/logo.svg";
import toast from "react-hot-toast";

export default function Contacto() {
  const [searchParams] = useSearchParams();
  const loteId = searchParams.get("lote");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://piamonte-backend.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Correo enviado");
        e.target.reset();
      } else {
        toast.error("Error al enviar, intenta de nuevo");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al enviar, intenta de nuevo");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative w-full h-dvh flex justify-center items-center">
      {/* Overlay gradiente */}
      <div className="gradient-inicio" />

      <div className="flex flex-col w-full max-w-[1280px] h-full max-h-[776px] justify-center items-center px-[clamp(13px,2.34375vw,30px)] lg:gap-[clamp(7px,1.25vw,16px)] portrait:gap-[1vh]">
        <div className="flex w-full portrait:flex-col-reverse portrait:items-center portrait:gap-[2vh]">
          {/* CONTENT */}
          <div className="flex-1 flex items-center text-cafe dark:text-nude text-center portrait:w-full portrait:justify-center">
            <div className="relative portrait:w-full portrait:max-w-[248px] portrait:py-8 w-[95%] h-[90%] lg:h-full lg:max-h-[430px] flex flex-col justify-center items-center gap-1 pb-2 lg:gap-[clamp(10.88px,1.875vw,24px)]">
              {/* Image */}
              <img
                src={PaperBackground}
                alt="Imagen de fondo papel"
                className="absolute -z-10 inset-0 w-full h-full object-fill overflow-visible transition-opacity delay-50 dark:opacity-0"
              />

              {/* Dirección */}
              <div className="flex flex-col justify-center gap-0">
                <h3 className="text-contact-title font-baskerville">
                  Dirección
                </h3>
                <p className="text-paragraph leading-[130%]">
                  86J3+P86,
                  <br />
                  Pinares de Rancho Viejo, Arteaga,
                  <br />
                  Coahuila, México
                </p>
              </div>

              {/* Horario */}
              <div className="flex flex-col justify-center">
                <h3 className="text-contact-title font-baskerville">
                  Correo Electrónico
                </h3>
                <p className="text-paragraph leading-[130%]">
                  admin@piamonte.mx
                  <br />
                  ventas@piamonte.mx
                </p>
              </div>

              {/* Redes sociales */}
              <div className="flex flex-col justify-center">
                <h3 className="text-contact-title font-baskerville">
                  Redes Sociales
                </h3>

                <a
                  href={"https://www.instagram.com/piamonteresidencial"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2"
                >
                  <span className="size-[clamp(12px,2.03125vw,26px)]">
                    <InstagramIcon className="w-full h-full text-verde dark:text-amarillo" />
                  </span>
                  <span className="text-paragraph leading-[130%]">
                    @piamonteresidencial
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="flex-1 flex h-full justify-end">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col w-[clamp(213px,37.578125vw,481px)] text-center gap-1 lg:gap-[clamp(7px,1vh,10px)]"
            >
              {/* Nombre */}
              <div className="flex flex-col lg:gap-[clamp(4px,1vh,8px)] portrait:gap-1">
                <p className="text-contact-title font-baskerville text-cafe dark:text-nude">
                  Nombre completo
                </p>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+"
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(
                      /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,
                      "",
                    );
                  }}
                  className="w-full p-[clamp(7px,1.25vw,16px)] bg-gris placeholder:text-nude placeholder:text-caption text-caption text-nude"
                />
              </div>

              {/* Correo Electrónico */}
              <div className="flex flex-col lg:gap-[clamp(4px,1vh,8px)] portrait:gap-1">
                <p className="text-contact-title font-baskerville text-cafe dark:text-nude">
                  Correo electrónico
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-[clamp(7px,1.25vw,16px)] bg-gris placeholder:text-nude placeholder:text-caption text-caption text-nude"
                />
              </div>

              {/* Número de teléfono */}
              <div className="flex flex-col lg:gap-[clamp(4px,1vh,8px)] portrait:gap-1">
                <p className="text-contact-title font-baskerville text-cafe dark:text-nude">
                  Número de teléfono
                </p>
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Número"
                  pattern="[0-9]+"
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                  className="w-full p-[clamp(7px,1.25vw,16px)] bg-gris placeholder:text-nude placeholder:text-caption text-caption text-nude"
                />
              </div>

              {/* Lote de interés */}
              {loteId && (
                <>
                  <div className="flex flex-col lg:gap-[clamp(4px,1vh,8px)] portrait:gap-1">
                    <p className="text-contact-title font-baskerville text-cafe dark:text-nude">
                      Lote de Interés
                    </p>
                    <input
                      readOnly
                      type="number"
                      name="lote"
                      id="lote"
                      value={loteId}
                      inputMode="numeric"
                      className="w-full p-[clamp(7px,1.25vw,16px)] bg-gris placeholder:text-nude placeholder:text-caption text-center text-amarillo text-caption"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="flex self-end justify-center items-center gap-[clamp(4px,0.78125vw,10px)] lg:p-[clamp(7px,1.25vw,16px)] cursor-pointer disabled:opacity-40 disabled:cursor-progress transition-opacity duration-300"
              >
                <span className="flex justify-center items-center size-[clamp(11px,1.875vw,24px)]">
                  <SendIcon className="w-[clamp(8px,1.464844vw,18.75px)] h-[clamp(9px,1.640625vw,21px)] text-gris" />
                </span>
                <span className="text-boton-normal text-gris uppercase">
                  {isSending ? "Enviando..." : "Enviar"}
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Caption and social links */}
        <div className="w-full h-fit flex max-lg:flex-col max-lg:gap-2">
          <div className="flex-1 self-center flex flex-col justify-center items-center gap-1 lg:gap-[clamp(7.25px,1.25vw,16px)]">
            <p className="text-caption text-gris dark:text-amarillo">
              © Piamonte residencial. All rights reserved
            </p>

            <div className="flex gap-[clamp(10.88px,1.875vw,21px)]">
              <p className="text-body-md text-center text-gris dark:text-amarillo">
                Desarrollo web por:
              </p>
              <img
                src={XperienceLogo}
                alt="Logo Xperience Group Creative Company"
                className="w-[clamp(57.52px,9.921875vw,127px)] h-[clamp(14.95px,2.578125vw,33px)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

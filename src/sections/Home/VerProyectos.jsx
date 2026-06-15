import { Link } from "react-router";
import ClickIcon from "@/assets/icons/home/clickIcon";
import { useContext } from "react";
import { VideoPlayerContext } from "@/Video/context/VideoPlayerContext";
import { MODE } from "@/Video/const/Videos";
import LogoPiamonte from "@/assets/logos/main/LogoPiamonte";
import WhatsappIcon from "@/assets/icons/shared/whatsappIcon";

export default function VerProyectos() {
  const { mode } = useContext(VideoPlayerContext);

  return (
    <div className="flex flex-col justify-center items-center w-full h-dvh gap-[15vh]">
      {/* Banner */}
      <div className="flex w-[clamp(540.63px,67.578125vw,865px)] min-h-fit bg-verde-claro">
        <div className="flex flex-col justify-center items-center gap-1.5 lg:gap-[clamp(9.38px,1.171875vw,15px)] px-[clamp(18.75px,2.34375vw,30px)] py-2 lg:py-[clamp(30.63px,3.828125vw,49px)] bg-gris">
          <LogoPiamonte className="max-lg:w-35 text-white" />
          <p className="font-baskerville text-activity-category text-center leading-none text-amarillo">
            <span className="text-hero-xl leading-[110%]">77</span>
            <br />
            Lotes
          </p>
        </div>

        <div className="flex flex-1 h-full flex-col justify-between items-center px-[clamp(18.75px,2.34375vw,30px)] py-[clamp(9.38px,1.171875vw,15px)] gap-2 lg:gap-[clamp(9.38px,1.171875vw,15px)] leading-none">
          <p className="text-contact-title text-center font-baskerville text-amarillo">
            Tu lote, tu naturaleza.
          </p>
          <p className="text-heading-xl text-center font-baskerville text-nude">
            Desde $850,00
          </p>
          <p className="text-boton text-center font-baskerville text-amarillo">
            MXN · Financiamiento disponible
          </p>

          {/*Tipos de Lotes */}
          <div className="flex w-full justify-between">
            {/* TIPO A */}
            <div className="flex flex-col px-[clamp(18px,2.34375vw,24px)] py-2 lg:py-[clamp(11.25px,1.464844vw,15px)] gap-[clamp(6px,0.78125vw,8px)] text-center border-2 border-verde bg-nude">
              <p className="text-boton-grande tracking-wider font-baskerville uppercase text-gris">
                Tipo A
              </p>
              <p className="text-body-lg tracking-wider font-baskerville font-semibold text-gris">
                300 m<sup>2</sup>
              </p>
            </div>

            {/* TIPO B */}
            <div className="flex flex-col px-[clamp(18px,2.34375vw,24px)] py-2 lg:py-[clamp(11.25px,1.464844vw,15px)] gap-[clamp(6px,0.78125vw,8px)] text-center border-2 border-verde bg-azul">
              <p className="text-boton-grande tracking-wider font-baskerville uppercase text-gris">
                Tipo B
              </p>
              <p className="text-body-lg tracking-wider font-baskerville font-semibold text-gris">
                450 m<sup>2</sup>
              </p>
            </div>

            {/* TIPO C */}
            <div className="flex flex-col px-[clamp(18px,2.34375vw,24px)] py-2 lg:py-[clamp(11.25px,1.464844vw,15px)] gap-[clamp(6px,0.78125vw,8px)] text-center border-2 border-verde bg-amarillo">
              <p className="text-boton-grande tracking-wider font-baskerville uppercase text-gris">
                Tipo C
              </p>
              <p className="text-body-lg tracking-wider font-baskerville font-semibold text-gris">
                600 m<sup>2</sup>
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/528145933236"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 justify-center items-center w-full h-[30px] lg:h-[53px] lg:max-h-[53px] gap-[clamp(6.25px,0.78125vw,10px)] bg-verde"
          >
            <span className="w-[clamp(15.63px,1.953125vw,25px)]">
              <WhatsappIcon className="text-whatsapp" />
            </span>
            <p className="text-[11px] lg:text-[15px] uppercase text-nude font-dmsans">
              Contáctanos para más info
            </p>
          </a>
        </div>
      </div>

      <Link
        to="masterplan"
        aria-disabled={mode === MODE.TRANSITIONING}
        tabIndex={mode === MODE.TRANSITIONING ? -1 : 0}
        className={`flex justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] bg-verde ${mode === MODE.TRANSITIONING ? "pointer-events-none" : ""}`}
      >
        <ClickIcon className="w-[clamp(7px,1.25vw,16px)] h-[clamp(9px,1.640625vw,21px)] text-nude" />
        <span className="text-boton-grande text-nude uppercase">
          Ver Proyecto
        </span>
      </Link>
    </div>
  );
}

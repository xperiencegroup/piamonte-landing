import Cerro from "@/assets/icons/main/Cerro";
import Isotipo from "@/assets/icons/main/Isotipo";
import InstagramIcon from "@/assets/icons/shared/instagramIcon";
import PhoneIcon from "@/assets/icons/shared/phoneIcon";
import WhatsappIcon from "@/assets/icons/shared/whatsappIcon";
import LogoPiamonte from "@/assets/logos/main/LogoPiamonte";

export default function Footer() {
  return (
    <footer className="relative z-15 w-full h-auto">
      <Cerro className="w-full text-nude dark:text-gris max-[722px]:h-[160px]" />

      <div className="absolute inset-0 left-1/2 -translate-x-1/2 flex flex-col gap-[clamp(8.16px,1.40625vw,18px)] justify-end w-full max-w-7xl h-full pb-[clamp(5.89px,1.015625vw,13px)]">
        <div className="self-center flex justify-between items-center w-full max-w-[1212px] h-fit">
          <div className="flex justify-center w-[clamp(113.28px,19.53125vw,250px)]">
            <Isotipo className="w-auto h-[clamp(19.03px,3.28125vw,42px)]" />
          </div>

          <LogoPiamonte className="text-gris dark:text-nude h-[clamp(19.03px,3.28125vw,42px)" />

          <div className="flex justify-center items-center w-[clamp(113.28px,19.53125vw,250px)] h-[clamp(19.03px,3.28125vw,42px)]">
            <PhoneIcon className="text-verde dark:text-nude w-auto h-[clamp(14.95px,2.578125vw,33px)]" />
          </div>
        </div>

        <div className="flex flex-col h-fit">
          {/* Datos */}
          <div className="self-center flex justify-between items-start w-full max-w-[1212px] h-fit text-gris dark:text-nude">
            {/* Dirección */}
            <p className="w-[clamp(113.28px,19.53125vw,250px)] text-center text-paper font-bold">
              86J3+P86,
              <br />
              Pinares de Rancho Viejo,
              <br />
              Arteaga, Coahuila, México
            </p>

            {/* Coordernadas */}
            <p className="w-[clamp(113.28px,19.53125vw,250px)] text-center text-paper font-bold">
              25°19'54.5"N 100°47'48.3"W
            </p>

            {/* Número */}
            <p className="w-[clamp(113.28px,19.53125vw,250px)] text-center text-paper font-bold">
              +52 81 45 93 3236
            </p>
          </div>

          {/* Caption y redes */}
          <div className="self-center flex justify-between items-center w-full max-w-[1212px] h-fit">
            <p className="text-footer-caption text-gris dark:text-nude">
              © Piamonte residencial. All rights reserved
            </p>

            <div className="flex gap-[clamp(8.16px,1.40625vw,18px)]">
              <div className="size-[clamp(24.47px,4.21875vw,54px)] flex justify-center items-center">
                <WhatsappIcon className="size-[clamp(12.02px,2.0703125vw,26.5px)] text-whatsapp" />
              </div>
              <div className="size-[clamp(24.47px,4.21875vw,54px)] flex justify-center items-center">
                <InstagramIcon className="size-[clamp(12.02px,2.0703125vw,26.5px)] text-gris dark:text-nude" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

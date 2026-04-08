import { useParams } from "react-router";
import loteBackground from "@/assets/images/Masterplan/Lotes/loteInfoBackgound.jpg";
import loteMainImage from "@/assets/images/Masterplan/Lotes/loteInfoMain.jpg";
import { LOTES } from "@/data/lotes";

export default function LoteInformacion() {
  const { id } = useParams();

  const lote = LOTES.find((lote) => lote.id === Number(id));

  return (
    <>
      <>
        {/* Background */}
        <div className="absolute -z-10 inset-0 w-full h-dvh">
          {/* Image */}
          <img
            src={loteBackground}
            alt="Imagen de fondo"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-[#E9E6D7] via-nude/95 via-65% to-nude/85 to-86% dark:from-[#2D2B28] dark:via-gris/95 dark:to-gris/85" />
        </div>

        <div className="relative z-0 w-full h-full">
          <div className="flex relative w-full h-full justify-center max-lg:landscape:items-end portrait:items-center lg:items-end 2xl:items-center">
            <div className="flex lg:flex-col lg:flex-wrap justify-between items-center w-[clamp(140px,72.65vw,558px)] lg:w-[clamp(456px,87.3125vw,1028px)] lg:h-[clamp(450px,74.82vh,636px)] p-[clamp(7px,1.25vw,16px)] gap-[clamp(7px,1.25vw,16px)] bg-nude dark:bg-verde overflow-hidden">
              <img
                src={loteMainImage}
                alt="Imagen del lote"
                className="w-[clamp(300px,51.30dvw,394px)] lg:w-full aspect-995/534"
              />

              <div className="flex max-lg:flex-col max-lg:gap-0.5 lg:shrink-0 w-full justify-between lg:items-center py-[clamp(7px,1.25vw,16px)]">
                <p className="max-lg:pb-1 text-cafe dark:text-nude text-paper uppercase leading-[100%]">
                  <span className="font-bold">#Id de lote:</span>{" "}
                  <span>{lote.id}</span>
                </p>
                <p className="text-cafe dark:text-nude text-paper uppercase leading-[100%]">
                  <span className="font-bold">M2 del lote:</span>{" "}
                  <span>{lote.metros} M2</span>
                </p>
                <p className="text-cafe dark:text-nude text-paper uppercase leading-[100%]">
                  <span className="font-bold">Precio: $:</span>{" "}
                  <span>{lote.precio}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

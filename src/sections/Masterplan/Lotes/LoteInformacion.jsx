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
          <div className="flex relative w-full h-full justify-center items-end">
            <div className="flex flex-col justify-between items-center w-[clamp(456px,80.3125vw,1028px)] h-[clamp(282px,49.6875vw,636px)] p-[clamp(7px,1.25vw,16px)] gap-[clamp(7px,1.25vw,16px)] bg-nude dark:bg-verde">
              <img
                src={loteMainImage}
                alt="Imagen del lote"
                className="w-[clamp(442px,77.734375vw,995px)] h-[clamp(237px,41.71875vw,534px)"
              />

              <div className="flex shrink-0 w-full justify-between items-center py-[clamp(7px,1.25vw,16px)]">
                <p className="text-cafe dark:text-nude text-paper uppercase leading-[100%]">
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

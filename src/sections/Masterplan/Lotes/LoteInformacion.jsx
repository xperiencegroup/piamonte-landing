import { useParams } from "react-router";
import loteBackground from "@/assets/images/Masterplan/Lotes/loteInfoBackgound.jpg";
import "@/assets/images/Masterplan/Lotes/lotes_vista_cenital/LOTE-01.jpg";
import { LOTES } from "@/data/lotes";

export default function LoteInformacion() {
  const { id } = useParams();
  const lote = LOTES.find((lote) => lote.id === Number(id));

  return (
    <>
      <>
        {/* Background */}
        <div className="absolute -z-10 inset-0 w-full h-full">
          {/* Image */}
          <img
            src={loteBackground}
            alt="Imagen de fondo"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-[#E9E6D7] via-nude/95 via-65% to-nude/85 to-86% dark:from-[#2D2B28] dark:via-gris/95 dark:to-gris/85" />
        </div>

        <div className="relative z-0 w-full h-full flex justify-center items-center">
          <div className="bg-nude dark:bg-verde relative z-0 flex justify-center items-center [@media(min-height:755px)]:flex-col w-fit h-full max-h-[600px] p-[clamp(7px,1.25vw,16px)] gap-4">
            <div className="relative w-[clamp(140px,52.65vw,558px)] lg:w-[clamp(465px,90.48vw,1050px)] h-full max-h-[534px]">
              <img
                src={lote.imageSrc}
                draggable={false}
                alt="Imagen informativa"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex shrink-0 w-fit justify-between items-center [@media(min-height:755px)]:w-full [@media(min-height:755px)]:h-[54px] [@media(max-height:755px)]:flex-col [@media(max-height:755px)]:justify-center [@media(max-height:755px)]:items-start h-full max-h-[534px] gap-1">
              {/* ID de lote */}
              <p className="max-lg:pb-1 text-cafe dark:text-nude text-paper uppercase leading-[100%]">
                <span className="font-bold">#Id de lote:</span>{" "}
                <span>{lote.id}</span>
              </p>

              {/* Metros cuadrados del lote */}
              <p className="text-cafe dark:text-nude text-paper uppercase leading-[100%]">
                <span className="font-bold">M2 del lote:</span>{" "}
                <span>{lote.metros} M2</span>
              </p>

              {/* Dimensiones */}
              <p className="text-cafe dark:text-nude text-paper uppercase leading-[100%]">
                <span className="font-bold">Dimensiones:</span>{" "}
                <span>{lote.dimensiones}</span>
              </p>

              {/* Precio por m2 */}
              <p className="text-cafe dark:text-nude text-paper uppercase leading-[100%]">
                <span className="font-bold">$ Por m2:</span>{" "}
                <span>{lote.preciom2}</span>
              </p>

              {/* Precio total */}
              <p className="text-cafe dark:text-nude text-paper uppercase leading-[100%]">
                <span className="font-bold">Precio total: $:</span>{" "}
                <span>{lote.precio}</span>
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

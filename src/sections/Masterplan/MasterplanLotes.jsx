import { Link, useNavigate } from "react-router";
import CapaLotesMapped from "@/assets/images/Masterplan/Lotes/CapaLotesMapped";
import ReturnIcon from "@/assets/icons/shared/returnIcon";
import ClickIcon from "@/assets/icons/home/clickIcon";

export default function MasterplanLotes() {
  const navigate = useNavigate();
  const handleSelectLote = (id) => {
    navigate(`/masterplan/lotes/${id}/informacion`);
  };

  return (
    <div className="relative z-0 w-full h-full">
      {/* Background and button */}
      <div className="absolute inset-0 w-full h-dvh pointer-events-none">
        <div className="absolute flex flex-col items-center justify-end z-10 bottom-0 left-1/2 -translate-x-1/2 pb-[clamp(31px,5.46875vw,70px)] gap-1.5 lg:gap-[clamp(7.09px,1.25vw,24px)]">
          <div className="pointer-events-none">
            <ClickIcon className="self-center w-[clamp(12.23px,2.109375vw,27px)] h-fit text-verde dark:text-nude" />
          </div>

          {/* A B C */}
          <div className="flex gap-[clamp(16.54px,2.916667vw,56px)]">
            <div className="flex justify-center items-center w-[clamp(25.01px,2.291667vw,44px)] aspect-square border lg:border-2 border-verde bg-nude">
              <p className="text-boton-grande font-bold text-verde">A</p>
            </div>

            <div className="flex justify-center items-center w-[clamp(25.01px,2.291667vw,44px)] aspect-square border lg:border-2 border-verde bg-azul/85">
              <p className="text-boton-grande font-bold text-verde">B</p>
            </div>

            <div className="flex justify-center items-center w-[clamp(25.01px,2.291667vw,44px)] aspect-square border lg:border-2 border-verde bg-amarillo/85">
              <p className="text-boton-grande font-bold text-verde">C</p>
            </div>
          </div>

          {/* Botón regresar */}
          <div className="relative z-10 pointer-events-auto">
            <Link
              to={"/masterplan"}
              className="flex justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-1 lg:p-[clamp(7px,1.25vw,16px)] hover:cursor-pointer"
            >
              <ReturnIcon className="w-[clamp(9px,1.523438vw,19.5px)] h-[clamp(7px,1.289063vw,16.5px)] text-gris dark:text-nude" />

              <span className="text-boton-normal font-semibold uppercase text-gris dark:text-nude">
                Regresar
              </span>
            </Link>
          </div>
        </div>

        {/* Overlay */}
        <div className="linear-gradient-shadow pointer-events-none" />
      </div>

      <div className="fixed inset-0">
        <CapaLotesMapped
          className="w-full h-full pointer-events-auto"
          handleSelectLote={handleSelectLote}
        />
      </div>
    </div>
  );
}

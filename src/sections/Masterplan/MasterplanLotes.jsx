import { Link, useNavigate } from "react-router";
import CapaLotesMapped from "@/assets/images/Masterplan/Lotes/CapaLotesMapped";
import ReturnIcon from "@/assets/icons/shared/returnIcon";
import ClickIcon from "@/assets/icons/home/clickIcon";

export default function MasterplanLotes() {
  const navigate = useNavigate();
  const handleSelectLote = (id) => {
    navigate(`/masterplan/lotes/${id}/vista-360`);
  };

  return (
    <div className="relative z-0 w-full h-full">
      {/* Background and button */}
      <div className="absolute inset-0 w-full h-dvh pointer-events-none">
        {/* Click Icon */}
        <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 pb-3 lg:pb-[clamp(77.03px,11.28125vw,170px)] pointer-events-auto">
          <ClickIcon className="w-[clamp(12.23px,2.109375vw,27px)] h-fit text-verde dark:text-nude" />
        </div>

        {/* Return button */}
        <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 pb-[clamp(31px,5.46875vw,70px)] pointer-events-auto">
          <Link
            to={"/masterplan"}
            className="flex justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] hover:cursor-pointer"
          >
            <ReturnIcon className="w-[clamp(9px,1.523438vw,19.5px)] h-[clamp(7px,1.289063vw,16.5px)] text-gris dark:text-nude" />

            <span className="text-boton-normal font-semibold uppercase text-gris dark:text-nude">
              Regresar
            </span>
          </Link>
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

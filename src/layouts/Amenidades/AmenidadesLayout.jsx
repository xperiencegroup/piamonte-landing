import { Outlet } from "react-router";
import { Link } from "react-router";
import ReturnIcon from "@/assets/icons/shared/returnIcon";

export default function AmenidadesLayout() {
  return (
    <div className="h-dvh w-full">
      <Outlet />

      {/* Amenidades Navigation */}
      <div className="fixed bottom-[clamp(31px,5.46875vw,70px)] w-full">
        <div className="flex justify-around items-end w-full">
          <Link
            to="/masterplan"
            className="flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)]"
          >
            <ReturnIcon className="w-[clamp(9px,1.523438vw,19.5px)] h-[clamp(7px,1.289063vw,16.5px)] text-gris dark:text-nude" />
            <span className="text-boton-normal text-gris dark:text-nude uppercase">
              Regresar
            </span>
          </Link>

          <Link
            to="#"
            className="flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)]"
          >
            <span className="text-boton-normal text-gris dark:text-nude uppercase">
              Información
            </span>
          </Link>

          <Link
            to="#"
            className="flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)]"
          >
            <span className="text-boton-normal text-gris dark:text-nude uppercase">
              Video Tour
            </span>
          </Link>

          <Link
            to="#"
            className="flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)]"
          >
            <span className="text-boton-normal text-gris dark:text-nude uppercase">
              Foto Renders
            </span>
          </Link>

          <Link
            to="#"
            className="flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)]"
          >
            <span className="text-boton-normal text-gris dark:text-nude uppercase">
              Recorridos virtuales 360°
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

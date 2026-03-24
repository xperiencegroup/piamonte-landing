import { Link } from "react-router";
import amenidadesBackground from "../../assets/images/Masterplan/amenidadesBackground.png";
import ReturnIcon from "@/assets/icons/shared/returnIcon";

export default function MasterplanAmenidades() {
  return (
    <div className="relative z-0 w-full">
      {/* Background */}
      <div className="absolute inset-0 w-full h-dvh">
        <img
          src={amenidadesBackground}
          alt="Fondo principal"
          className="absolute inset-0 -z-10 object-cover"
        />
        {/* Overlay */}
        <div className="linear-gradient-shadow" />
      </div>

      <div className="relative w-full h-dvh flex justify-center items-center">
        <div className="flex justify-around items-end w-full h-[clamp(308px,54.140625vw,693px)]">
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

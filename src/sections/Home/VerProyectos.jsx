import { Link } from "react-router";
import ClickIcon from "@/assets/icons/home/clickIcon";

export default function VerProyectos() {
  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <Link
        to="masterplan"
        className="flex justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] border-b border-gris dark:border-nude"
      >
        <ClickIcon className="w-[clamp(7px,1.25vw,16px)] h-[clamp(9px,1.640625vw,21px)] text-gris dark:text-nude" />
        <span className="text-boton-grande text-gris dark:text-nude uppercase">
          Ver Proyecto
        </span>
      </Link>
    </div>
  );
}

import { Link } from "react-router";
import mainBackground from "@/assets/images/Masterplan/mainBackground.png";

export default function MasterplanInicio() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 w-full h-dvh">
        <img
          src={mainBackground}
          alt="Fondo principal"
          className="absolute inset-0 h-full w-dvw -z-10 object-cover"
        />
        {/* Overlay */}
        <div className="linear-gradient-shadow" />
      </div>

      <div className="fixed bottom-[clamp(50px,8vw,102px)] flex w-full">
        <div className="flex justify-center items-end w-full gap-[clamp(11px,1.875vw,24px)]">
          <Link
            to="/masterplan/amenidades"
            className="flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] border-b-[0.5px] md:border-b border-gris dark:border-nude"
          >
            <span className="text-boton-grande text-gris dark:text-nude uppercase">
              Amenidades
            </span>
          </Link>

          <Link
            to="/masterplan/lotes"
            className="flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] border-b-[0.5px] md:border-b border-gris dark:border-nude"
          >
            <span className="text-boton-grande text-gris dark:text-nude uppercase">
              Lotes
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router";
import LogoPiamonte from "@/assets/logos/main/LogoPiamonte";

export default function Navbar() {
  return (
    <nav className="flex self-center justify-between items-center w-[clamp(300px,95vw,1216px)] h-[clamp(48px,5.234vw,67px)] px-[clamp(14px,1.5625vw,20px)] py-[clamp(5px,0.546875vw,7px)] bg-white dark:bg-black">
      <Link
        to={"/"}
        className="w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] flex justify-center items-center text-boton text-center font-dmsans uppercase text-gris dark:text-nude"
      >
        Piamonte Xperience
      </Link>
      <Link
        to={"/ubicacion"}
        className="w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] flex justify-center items-center text-boton text-center font-dmsans uppercase text-gris dark:text-nude"
      >
        Ubicación
      </Link>

      {/* Logo */}
      <Link className="justify-center">
        <LogoPiamonte className="w-[clamp(140px,15.3125vw,196px)] h-[clamp(26px,2.8125vw,36px)] text-gris dark:text-nude" />
      </Link>

      <Link
        to={"/nosotros"}
        className="w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] flex justify-center items-center text-boton text-center font-dmsans uppercase text-gris dark:text-nude"
      >
        Nosotros
      </Link>
      <Link
        to={"/contacto"}
        className="w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] flex justify-center items-center text-boton text-center font-dmsans uppercase text-gris dark:text-nude"
      >
        Contacto
      </Link>
    </nav>
  );
}

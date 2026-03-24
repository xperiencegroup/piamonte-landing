import { Link } from "react-router";
import LogoPiamonte from "@/assets/logos/main/LogoPiamonte";
import { useLocation } from "react-router";
import CerroSilla from "@/assets/icons/shared/cerroSilla";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed z-10 flex self-center justify-between items-center w-[clamp(300px,95vw,1216px)] h-[clamp(48px,5.234vw,67px)] px-[clamp(14px,1.5625vw,20px)] py-[clamp(5px,0.546875vw,7px)">
      <Link
        to={"/masterplan"}
        className={`relative flex flex-col w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] justify-center items-center text-boton text-center font-dmsans uppercase text-gris dark:text-nude ${isActive("/masterplan") ? "text-cafe" : ""}`}
      >
        Piamonte Xperience
        <CerroSilla
          className={`absolute bottom-0 translate-y-[50%] transition-opacity ease ${isActive("/masterplan") ? " text-cafe" : "opacity-0"}`}
        />
      </Link>
      <Link
        to={"/ubicacion"}
        className="w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] flex justify-center items-center text-boton text-center font-dmsans uppercase text-gris dark:text-nude"
      >
        Ubicación
      </Link>

      {/* Logo */}
      <Link to={"/"} className="justify-center">
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

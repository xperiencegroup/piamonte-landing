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
      {/* Piamonte Xperience */}
      <Link
        to={"/masterplan"}
        className={`relative flex flex-col w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] justify-center items-center text-boton text-center font-dmsans uppercase text-gris dark:text-nude ${isActive("/masterplan") ? "text-cafe" : ""}`}
      >
        Piamonte Xperience
        <CerroSilla
          className={`absolute bottom-0 w-[clamp(74px,12.96875vw,166px)] h-[clamp(9px,1.532813vw,19.62px)] translate-y-1/4 transition-opacity ease ${isActive("/masterplan") ? " text-cafe" : "opacity-0"}`}
        />
      </Link>

      {/* Ubicación */}
      <Link
        to={"/ubicacion"}
        className="relative w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] flex justify-center items-center text-boton text-center font-dmsans uppercase text-gris dark:text-nude"
      >
        Ubicación
        <CerroSilla
          className={`absolute top-10 w-[clamp(38px,6.640625vw,85px)] h-[clamp(4px,0.78125vw,10px)] transition-opacity ease ${isActive("/ubicacion") ? " text-cafe" : "opacity-0"}`}
        />
      </Link>

      {/* Logo */}
      <Link to={"/"} className="justify-center">
        <LogoPiamonte className="w-[clamp(140px,15.3125vw,196px)] h-[clamp(26px,2.8125vw,36px)] text-gris dark:text-nude" />
      </Link>

      {/* Nosotros */}
      <Link
        to={"/nosotros"}
        className="relative w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] flex justify-center items-center text-boton text-center font-dmsans uppercase text-gris dark:text-nude"
      >
        Nosotros
        <CerroSilla
          className={`absolute top-10 w-[clamp(38px,6.640625vw,85px)] h-[clamp(4px,0.78125vw,10px)] transition-opacity ease ${isActive("/nosotros") ? " text-cafe" : "opacity-0"}`}
        />
      </Link>

      {/* Contacto */}
      <Link
        to={"/contacto"}
        className="relative w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] flex justify-center items-center text-boton text-center font-dmsans uppercase text-gris dark:text-nude"
      >
        Contacto
        <CerroSilla
          className={`absolute top-10 w-[clamp(38px,6.640625vw,85px)] h-[clamp(4px,0.78125vw,10px)] transition-opacity ease ${isActive("/contacto") ? " text-cafe" : "opacity-0"}`}
        />
      </Link>
    </nav>
  );
}

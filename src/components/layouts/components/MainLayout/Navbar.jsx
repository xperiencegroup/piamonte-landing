import { Link } from "react-router";
import LogoPiamonte from "@/assets/logos/main/LogoPiamonte";
import { useLocation } from "react-router";
import CerroSilla from "@/assets/icons/shared/cerroSilla";

const MENU = [
  {
    to: "/masterplan",
    label: "Piamonte Xperience",
  },
  {
    to: "/ubicacion?filter=como-llegar",
    label: "Ubicación",
  },
  {
    to: "/nosotros",
    label: "Nosotros",
  },
  {
    to: "/contacto",
    label: "Contacto",
  },
];
const LEFT_MENU = MENU.slice(0, 2);
const RIGHT_MENU = MENU.slice(2);

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    const cleanPath = path.split("?")[0];
    return location.pathname.startsWith(cleanPath);
  };

  return (
    <nav className="fixed z-10 flex self-center justify-between items-center w-[clamp(300px,95vw,1216px)] h-[clamp(38px,5.234vw,67px)] px-[clamp(14px,1.5625vw,20px)] py-[clamp(5px,0.546875vw,7px)] max-md:py-0">
      {LEFT_MENU.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.to}
            className={`relative flex flex-col w-[clamp(99px,17.5vw,224px)] h-[clamp(24px,4.140625vw,53px)] justify-center items-center text-boton text-center font-dmsans uppercase ${isActive(item.to) ? "text-cafe dark:text-amarillo" : "text-gris dark:text-nude"}`}
          >
            <span className="relative">
              {item.label}{" "}
              <CerroSilla
                className={`absolute translate-y-1/8 w-full h-fit transition-opacity ease ${isActive(item.to) ? " text-cafe dark:text-amarillo" : "opacity-0"}`}
              />
            </span>
          </Link>
        );
      })}

      {/* Logo */}
      <Link to={"/"} className="justify-center">
        <LogoPiamonte className="w-[clamp(87px,15.3125vw,196px)] h-[clamp(16px,2.8125vw,36px)] text-gris dark:text-nude" />
      </Link>

      {RIGHT_MENU.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.to}
            className={`relative flex flex-col w-[clamp(99px,17.5vw,224px)] h-[clamp(24px,4.140625vw,53px)] justify-center items-center text-boton text-center font-dmsans uppercase ${isActive(item.to) ? "text-cafe dark:text-amarillo" : "text-gris dark:text-nude"}`}
          >
            <span className="relative">
              {item.label}{" "}
              <CerroSilla
                className={`absolute translate-y-1/8 w-full h-fit transition-opacity ease ${isActive(item.to) ? " text-cafe dark:text-amarillo" : "opacity-0"}`}
              />
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

import { Link, useLocation } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import LogoPiamonte from "@/assets/logos/main/LogoPiamonte";
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

export default function Navbar({ navRef }) {
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  const isActive = (path) => {
    const cleanPath = path.split("?")[0];
    return location.pathname.startsWith(cleanPath);
  };

  const isHome = location.pathname === "/";

  // Navbar Animation when is home => "/"
  const navbarLogoOpacity = useTransform(
    scrollYProgress,
    [0.327, 0.328],
    isHome ? [0, 1] : [1, 1],
    { clamp: false },
  );
  const navbarPointer = useTransform(
    scrollYProgress,
    [0.327, 0.328],
    isHome ? ["none", "auto"] : ["auto", "auto"],
  );

  return (
    <nav
      ref={navRef}
      className="fixed z-10 flex self-center justify-between items-center w-[clamp(300px,95vw,1216px)] h-[clamp(38px,5.234vw,67px)] px-[clamp(14px,1.5625vw,20px)] py-[clamp(5px,0.546875vw,7px)] max-md:py-0"
    >
      {LEFT_MENU.map((item, index) => {
        return (
          <motion.div key={index} style={{ pointerEvents: navbarPointer }}>
            <Link
              to={item.to}
              className={`relative flex flex-col w-[clamp(99px,17.5vw,224px)] h-[clamp(24px,4.140625vw,53px)] justify-center items-center text-boton text-center font-dmsans uppercase hover:font-semibold transition-all ${isActive(item.to) ? "text-cafe dark:text-amarillo font-semibold" : "text-gris dark:text-nude"}`}
            >
              <span className="relative">
                {item.label}
                <CerroSilla
                  className={`absolute translate-y-1/8 w-full h-fit transition-opacity ease ${isActive(item.to) ? " text-cafe dark:text-amarillo" : "opacity-0"}`}
                />
              </span>
            </Link>
          </motion.div>
        );
      })}

      {/* Logo */}
      <motion.div
        style={{ opacity: navbarLogoOpacity, pointerEvents: navbarPointer }}
      >
        <Link to={"/"} className="justify-center">
          <LogoPiamonte className="w-[clamp(87px,15.3125vw,196px)] h-[clamp(16px,2.8125vw,36px)] text-gris dark:text-nude" />
        </Link>
      </motion.div>

      {RIGHT_MENU.map((item, index) => {
        return (
          <motion.div key={index} style={{ pointerEvents: navbarPointer }}>
            <Link
              key={index}
              to={item.to}
              className={`relative flex flex-col w-[clamp(99px,17.5vw,224px)] h-[clamp(24px,4.140625vw,53px)] justify-center items-center text-boton text-center font-dmsans uppercase hover:font-semibold transition-all ${isActive(item.to) ? "text-cafe dark:text-amarillo font-semibold" : "text-gris dark:text-nude"}`}
            >
              <span className="relative">
                {item.label}
                <CerroSilla
                  className={`absolute translate-y-1/8 w-full h-fit transition-opacity ease ${isActive(item.to) ? " text-cafe dark:text-amarillo" : "opacity-0"}`}
                />
              </span>
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}

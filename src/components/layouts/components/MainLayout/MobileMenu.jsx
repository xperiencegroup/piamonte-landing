import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import LogoPiamonte from "@/assets/logos/main/LogoPiamonte";
import CloseIcon from "@/assets/icons/shared/closeIcon";
import MenuIcon from "@/assets/icons/shared/menuIcon";
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 z-10 flex self-center justify-between items-center w-dvw h-fit bg-verde dark:bg-nude`}
    >
      <div className="flex flex-col w-full">
        <div className="relative z-10 flex justify-between items-center w-full p-[clamp(20px,5.333vw,30px)]">
          {/* Logo */}
          <Link to={"/"} className="justify-center">
            <LogoPiamonte className="w-[clamp(111px,29.6vw,168px)] h-[clamp(20px,5.333vw,30px)] text-nude dark:text-gris" />
          </Link>

          <motion.button
            onClick={toggleMenu}
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 0.9 : 1 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center items-center size-[clamp(32px,8.533vw,49px)] hover:cursor-pointer"
          >
            {isOpen ? (
              <>
                <CloseIcon className="text-nude dark:text-gris size-[clamp(18.67px,4.979vw,28px)]" />
              </>
            ) : (
              <>
                <MenuIcon className="text-nude dark:text-gris size-[clamp(18.67px,4.979vw,28px)]" />
              </>
            )}
          </motion.button>
        </div>

        {/* MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
              className={`absolute top-0 left-0 flex flex-col p-[clamp(20px,5.333vw,30px)] pt-[clamp(72px,19.2vw,109px)] w-dvw bg-verde dark:bg-nude overflow-hidden shadow-md`}
            >
              <Link
                to="/nosotros"
                onClick={toggleMenu}
                className="flex shrink-0 items-center h-[clamp(86px,22.933vw,130px)] uppercase text-nude dark:text-gris"
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                onClick={toggleMenu}
                className="flex shrink-0 items-center h-[clamp(86px,22.933vw,130px)] uppercase text-nude dark:text-gris"
              >
                Contacto
              </Link>
              <Link
                to="/contacto"
                onClick={toggleMenu}
                className="flex shrink-0 items-center h-[clamp(86px,22.933vw,130px)] uppercase text-nude dark:text-gris"
              >
                Escríbenos
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

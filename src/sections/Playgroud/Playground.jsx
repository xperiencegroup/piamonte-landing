import { Link, useLocation } from "react-router";
import { motion, useScroll, useTransform, cubicBezier } from "motion/react";
import LogoPiamonte from "@/assets/logos/main/LogoPiamonte";
import CerroSilla from "@/assets/icons/shared/cerroSilla";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

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

export default function Playground() {
  const navRef = useRef(null);
  const [centerY, setCenterY] = useState(0);

  const location = useLocation();
  const { scrollYProgress } = useScroll();

  const isActive = (path) => {
    const cleanPath = path.split("?")[0];
    return location.pathname.startsWith(cleanPath);
  };

  //
  const ease = cubicBezier(0.22, 0.3, 0.36, 1);

  // Floating logo
  const scale = useTransform(scrollYProgress, [0.03, 0.327], [1, 0.32], {
    ease,
  });

  useEffect(() => {
    const update = () => {
      if (!navRef.current) return;

      const rect = navRef.current.getBoundingClientRect();
      setCenterY(((rect.top + rect.height / 2) / window.innerHeight) * 100);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const top = useTransform(
    scrollYProgress,
    [0.03, 0.327],
    ["50%", `${centerY}%`],
    {
      ease,
    },
  );
  const floatingOpacity = useTransform(
    scrollYProgress,
    [0.327, 0.328],
    [1, 0],
    { clamp: false },
  );

  // Navbar
  const navbarLogoOpacity = useTransform(
    scrollYProgress,
    [0.327, 0.328],
    [0, 1],
    { clamp: false },
  );
  const navbarPointer = useTransform(
    scrollYProgress,
    [0.327, 0.328],
    ["none", "auto"],
  );

  // SplashScreen
  const splashOpacity = useTransform(scrollYProgress, [0, 0.33], [1, 0], {
    clamp: false,
    ease,
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 0.33], [1, 0.1]);

  return (
    <>
      {/* Navbar */}
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
                to={item.to}
                className={`relative flex flex-col w-[clamp(99px,17.5vw,224px)] h-[clamp(24px,4.140625vw,53px)] justify-center items-center text-boton text-center font-dmsans uppercase hover:font-semibold transition-all ${isActive(item.to) ? "text-cafe dark:text-amarillo font-semibold" : "text-gris dark:text-nude"}`}
              >
                <span className="relative">
                  {item.label}{" "}
                  <CerroSilla
                    className={`absolute translate-y-1/8 w-full h-fit transition-opacity ease ${isActive(item.to) ? " text-cafe dark:text-amarillo" : "opacity-0"}`}
                  />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Main */}
      <main className="bg-blue-500">
        {/* SplashScreen */}
        <div className="w-full h-dvh">
          <motion.div
            className="relative z-50 w-full h-dvh bg-verde pointer-events-none"
            style={{
              opacity: splashOpacity,
            }}
          >
            {/* Linea decortativa */}
            <motion.div
              className="w-[clamp(1px,0.15625vw,2px)] h-[clamp(107px,18.75vw,240px)] bg-nude"
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                originY: 1,
                scaleY: lineScaleY,
              }}
            />
          </motion.div>
        </div>
        <div className="w-full h-dvh border"></div>
        <div className="w-full h-dvh border"></div>
        <div className="w-full h-dvh border"></div>
      </main>

      {/* Logo */}
      <motion.div
        className="w-[clamp(271px,47.734375vw,611px)] h-[clamp(55px,9.609375vw,123px)] pointer-events-none"
        style={{
          position: "fixed",
          top,
          left: "50%",
          x: "-50%",
          y: "-50%",
          scale,
          opacity: floatingOpacity,
          zIndex: 50,
        }}
      >
        <LogoPiamonte className="w-full h-full text-gris dark:text-nude" />
      </motion.div>

      {/* Debugging */}
      <motion.div className="fixed bottom-0 z-50 w-full h-5">
        <motion.div
          className="bg-amber-500 flex justify-center h-full"
          style={{ scaleX: scrollYProgress, originX: 0 }}
        >
          {scrollYProgress}
        </motion.div>
      </motion.div>
    </>
  );
}

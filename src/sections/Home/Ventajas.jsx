import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ubicacionImage from "@/assets/images/Nosotros/ventajas/ubicacion.jpg";
import seguridadImage from "@/assets/images/Nosotros/ventajas/seguridad.jpg";
import tiemposImage from "@/assets/images/Nosotros/ventajas/tiempos.jpg";
import conceptoImage from "@/assets/images/Nosotros/ventajas/concepto.jpg";
import vialidadesImage from "@/assets/images/Nosotros/ventajas/vialidades.jpg";
import PaperTear from "../../assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTear.png";
import ClickIcon from "@/assets/icons/home/clickIcon";
import { useEffect } from "react";

const VENTAJAS = [
  {
    label: "Residencial campestre a pie de carretera.",
    title: "Ubicación",
    image: ubicacionImage,
  },
  {
    label: "Régimen de propiedad en condominio.",
    title: "Seguridad",
    image: seguridadImage,
  },
  {
    label: "80 minutos de Monterrey y 30 de Saltillo.",
    title: "Tiempos",
    image: tiemposImage,
  },
  {
    label: "Concepto 100% Slow life/Wellness..",
    title: "Concepto",
    image: conceptoImage,
  },
  {
    label: "Carretera interserrana lista 2027.",
    title: "Vialidades",
    image: vialidadesImage,
  },
];

const ROTATIONS = [10, -5, 2, 14, -16];

function useResponsiveScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;

      if (width >= 1280) setScale(1);
      else if (width >= 1024) setScale(0.75);
      else if (width >= 800) setScale(0.6);
      else if (width >= 568) setScale(0.45);
      else setScale(0.4);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return scale;
}

export default function Ventajas() {
  const [isOpen, setIsOpen] = useState(false);
  const scale = useResponsiveScale();

  return (
    <div className="relative flex w-full h-dvh justify-center items-center">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full justify-center items-center px-[clamp(13px,2.34375vw,30px)] ${isOpen ? "lg:max-w-[1280px] lg:h-[389px]" : "h-fit"} hover:cursor-pointer`}
        style={{
          height: isOpen ? 389 * scale : "auto",
        }}
      >
        <div
          className={`${isOpen ? "flex w-full h-full justify-between" : "flex relative w-[clamp(327px,57.578125vw,737px)] h-[clamp(257px,45.15625vw,578px)] justify-center items-center"}`}
        >
          {VENTAJAS.map((item, index) => {
            return (
              <motion.div
                key={item.label}
                layout
                initial={false}
                animate={{
                  width: (isOpen ? 229 : 532) * scale,
                  height: (isOpen ? 389 : 373) * scale,
                  rotate: isOpen ? 0 : ROTATIONS[index],
                }}
                transition={{
                  layout: { type: "spring", stiffness: 200, damping: 25 },
                  width: { type: "spring", stiffness: 200, damping: 25 },
                  height: { type: "spring", stiffness: 200, damping: 25 },
                  rotate: { duration: 0.5 },
                }}
                className={`flex flex-col p-[clamp(7px,1.25vw,16px)] gap-[clamp(7px,1.25vw,16px)] bg-nude dark:bg-verde ${
                  isOpen
                    ? "relative pb-[clamp(26px,4.53125vw,58px)]"
                    : "absolute top-1/2 -translate-y-1/2"
                }`}
                style={{ zIndex: VENTAJAS.length - index }}
              >
                {/* Content */}
                <motion.div
                  layout
                  initial={false}
                  animate={{
                    height: (isOpen ? 299 : 341) * scale,
                  }}
                  transition={{
                    layout: { type: "spring", stiffness: 200, damping: 25 },
                    width: { type: "spring", stiffness: 200, damping: 25 },
                    height: { type: "spring", stiffness: 200, damping: 25 },
                  }}
                  className="shrink-0 relative w-full overflow-hidden"
                >
                  <motion.img
                    src={item.image}
                    alt={item.label}
                    layout
                    draggable={false}
                    className="w-full h-full object-cover object-bottom select-none pointer-events-none"
                  />
                </motion.div>

                {/* Label */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6, transition: { duration: 0 } }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15,
                      }}
                      className="grow flex justify-center items-center text-card text-center font-regular text-gris dark:text-nude leading-[130%]"
                    >
                      {item.label}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Title */}
                <AnimatePresence>
                  {isOpen && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-5/8 w-[clamp(72px,12.65625vw,162px)] h-[clamp(28px,4.84375vw,62px)]">
                      <div className="absolute w-full h-full flex justify-center items-center">
                        <img
                          src={PaperTear}
                          alt="Imagen de fondo de textura de papel"
                          className="absolute inset-0 w-full h-full"
                        />
                        <p className="relative z-10 text-frase font-selinea text-cafe dark:text-verde-claro">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Texto Ubicación */}
        <AnimatePresence mode="popLayout">
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: 10,
                scale: 0.95,
                transition: { duration: 0.2 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.32, 0, 0.67, 0],
              }}
              className="w-[clamp(85px,16vw,200px)] h-full text-center"
            >
              <h3 className="text-frase text-cafe dark:text-verde-claro font-selinea">
                Ubicación
              </h3>
              <p className="text-paragraph text-gris dark:text-nude">
                Residencial campestre a pie de carretera.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* click icon */}
        <AnimatePresence mode="wait">
          {!isOpen && (
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: 2,
                scale: 0.95,
                transition: { duration: 0.2 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.32, 0, 0.67, 0],
              }}
              className="absolute bottom-[clamp(54.59px,9.4117647vh,80px)] left-1/2 -translate-x-1/2 flex justify-center items-center size-[clamp(30px,3.28125vw,42px)]"
            >
              <ClickIcon className="w-[clamp(12px,2.138281vw,27.37px)] h-[clamp(16px,2.871094vw,36.75px)] text-verde dark:text-nude" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

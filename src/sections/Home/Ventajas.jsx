import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import useResponsiveScale from "@/hooks/useResponsiveScale";

import ubicacionImage from "@/assets/images/Nosotros/ventajas/ubicacion.png";
import conectividadImage from "@/assets/images/Nosotros/ventajas/conectividad.png";
import proyectoImage from "@/assets/images/Nosotros/ventajas/proyecto.png";
import legalImage from "@/assets/images/Nosotros/ventajas/estructura-legal.png";

// Recursos extras
import PaperTear from "../../assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTear.png";
import ClickIcon from "@/assets/icons/home/clickIcon";

// Titulos
import Ubicacion from "@/assets/texts/home/Ubicacion.jsx";
import Conectividad from "@/assets/texts/home/Conectividad.jsx";
import Proyecto from "@/assets/texts/home/Proyecto.jsx";
import Legal from "@/assets/texts/home/Legal.jsx";

const VENTAJAS = [
  {
    id: 1,
    specialLabel: (
      <span>
        Pinares de Rancho Viejo, <strong>Arteaga, Coahuila, MX</strong>
      </span>
    ),
    label: "Pinares de Rancho Viejo, Arteaga, Coahuila, México",
    title: "Ubicación",
    titleImage: Ubicacion,
    image: ubicacionImage,
  },
  {
    id: 2,
    label: "A 80 minutos de Monterrey y a 30 minutos de Saltillo",
    title: "Conectividad",
    titleImage: Conectividad,
    titleWidth: "lg",
    image: conectividadImage,
  },
  {
    id: 3,
    label: "77 lotes campestres y más de 8 amenidades",
    title: "Proyecto",
    titleImage: Proyecto,
    titleWidth: "lg",
    image: proyectoImage,
  },
  {
    id: 4,
    label: "Régimen de Propiedad en Condominio.",
    title: "Estrcutura Legal",
    titleImage: Legal,
    titleWidth: "lg",
    image: legalImage,
  },
];

const ROTATIONS = [10, -5, 2, 14, -16];

export default function Ventajas() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(1);
  const [selectedCard, setSelectedCard] = useState(VENTAJAS[0]);
  const scale = useResponsiveScale();

  const SelectedTitleImage = selectedCard.titleImage;
  return (
    <div className="relative flex w-full h-dvh justify-center items-center">
      <div
        onClick={() => {
          if (!isOpen) setIsOpen(true);
        }}
        className={`flex w-full justify-center items-center px-[clamp(13px,2.34375vw,30px)] ${isOpen ? "lg:max-w-[1280px] lg:h-[389px]" : "h-fit hover:cursor-pointer"}`}
        style={{
          height: isOpen ? 389 * scale : "auto",
        }}
      >
        <div
          className={`${isOpen ? "flex w-full h-full justify-center gap-[clamp(8.61px,1.484375vw,19px)]" : "flex relative w-[clamp(327px,57.578125vw,737px)] h-[clamp(257px,45.15625vw,578px)] justify-center items-center"}`}
        >
          {VENTAJAS.map((item, index) => {
            const TitleImage = item.titleImage;
            return (
              <motion.div
                key={item.label}
                layout
                initial={false}
                animate={{
                  width: (isOpen ? 260 : 532) * scale,
                  height: (isOpen ? 389 : 373) * scale,
                  rotate: isOpen ? 0 : ROTATIONS[index],
                }}
                transition={{
                  layout: { type: "spring", stiffness: 200, damping: 25 },
                  width: { type: "spring", stiffness: 200, damping: 25 },
                  height: { type: "spring", stiffness: 200, damping: 25 },
                  rotate: { duration: 0.5 },
                }}
                onClick={() => {
                  if (isOpen) {
                    setSelectedCardId(item.id);
                    setSelectedCard(item);
                    setIsOpen(false);
                  }
                }}
                className={`flex flex-col p-[clamp(7px,1.25vw,16px)] gap-[clamp(7px,1.25vw,16px)] bg-nude dark:bg-verde ${
                  isOpen
                    ? "relative pb-[clamp(26px,4.53125vw,58px)] hover:cursor-pointer"
                    : "absolute top-1/2 -translate-y-1/2"
                }`}
                style={{
                  zIndex:
                    selectedCardId === item.id
                      ? VENTAJAS.length + 1
                      : VENTAJAS.length - index,
                }}
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
                    className="w-full h-full object-cover object-bottom select-none pointer-events-none translate-0.5"
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
                      className="grow flex justify-center items-center text-[7px] md:text-card text-center font-regular text-gris dark:text-nude leading-[130%]"
                    >
                      {item.label}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Title */}
                <AnimatePresence>
                  {isOpen && (
                    <div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-5/8 h-[clamp(28px,4.84375vw,62px)] ${item.titleWidth === "lg" ? "w-full" : "w-[clamp(72px,12.65625vw,162px)]"}`}
                    >
                      <div className="absolute w-full h-full flex justify-center items-center">
                        <img
                          src={PaperTear}
                          alt="Imagen de fondo de textura de papel"
                          className="absolute inset-0 w-full h-full"
                        />

                        <TitleImage
                          className={`relative z-0 w-full px-[clamp(7.25px,1.25vw,16px)] text-cafe ${item.id === 1 ? "h-[clamp(12.23px,2.109375vw,27px)]" : "h-[clamp(7.7px,1.328125vw,17px)]"}`}
                        />
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Texto descriptivo */}
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
              className="flex flex-col w-[clamp(122.77px,21.171875vw,271px)] h-full text-center gap-[clamp(9.06px,1.5625vw,20px)]"
            >
              <SelectedTitleImage
                className={`text-gris dark:text-nude ${selectedCard.id === 1 ? "h-[clamp(12.23px,2.109375vw,27px)]" : "h-[clamp(7.7px,1.328125vw,17px)]"}`}
              />

              <p className="text-body-md font-medium leading-[120%] tracking-wide text-gris dark:text-nude">
                {selectedCard.specialLabel ?? selectedCard.label}
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

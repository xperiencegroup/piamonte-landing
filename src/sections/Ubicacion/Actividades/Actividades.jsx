import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import useIsShortHeight from "@/hooks/useIsShortHeight";
import useResponsiveScale from "@/hooks/useResponsiveScale";
import PaperTear from "@/assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTear.png";
import seria_cedros from "@/assets/images/Ubicación/actividades/seria_cedros.jpg";
import monterreal from "@/assets/images/Ubicación/actividades/monterreal.jpg";
import areteaga from "@/assets/images/Ubicación/actividades/arteaga.jpg";
import bodega_vientos from "@/assets/images/Ubicación/actividades/bodega_vientos.jpg";
import huachichil from "@/assets/images/Ubicación/actividades/huachichil.jpg";
import monterrey from "@/assets/images/Ubicación/actividades/monterrey.jpeg";
import saltillo from "@/assets/images/Ubicación/actividades/saltillo.jpg";
import san_antonio from "@/assets/images/Ubicación/actividades/san-antonio.jpeg";
import sierra_marta from "@/assets/images/Ubicación/actividades/sierra_marta.webp";
import ClickIcon from "@/assets/icons/home/clickIcon";

const ACTIVITIES = [
  {
    id: 1,
    label: "Seria los cedros",
    tiempo: "42",
    distancia: "43.3",
    image: seria_cedros,
    description:
      "La residencia destaca por su diseño de estilo hacienda contemporánea, que combina elementos coloniales con acabados modernos. El residencial ofrece áreas verdes, una casa club con salón de eventos, gimnasio y bar, además de seguridad privada y acceso controlado.",
  },
  {
    id: 2,
    label: "Monterreal",
    tiempo: "42",
    distancia: "43.3",
    image: monterreal,
    description:
      "Un exclusivo desarrollo turístico y centro de esquí en la Sierra de Arteaga, Coahuila, famoso por ser el único lugar en México con pistas de esquí y snowboard funcionales los 365 días del año El complejo es un destino popular todo el año, ideal para familias y amantes de la naturaleza, siendo un punto clave para el turismo en la región.",
  },
  {
    id: 3,
    label: "Bodega de los vientos",
    tiempo: "16",
    distancia: "14.1",
    image: bodega_vientos,
    description:
      "Un viñedo boutique ubicado en la Sierra de Arteaga, Coahuila, a más de 2,100 metros de altura, lo que le permite producir vinos de clima frío poco comunes en México, con uva propia y una producción limitada, ofreciendo recorridos, degustaciones y una experiencia tranquila rodeada de paisaje montañoso.",
  },
  {
    id: 4,
    label: "Arteaga",
    tiempo: "25",
    distancia: "26",
    image: areteaga,
    description:
      "Un pueblo de montaña ubicado a unos 20-30 minutos de Saltillo, conocido como la “Suiza de México” por su clima fresco, paisajes boscosos y cercanía con la Sierra Madre Oriental; es un destino popular para escapadas de fin de semana, con cabañas, actividades al aire libre, vinos de altura y lugares como Bosques de Monterreal para disfrutar nieve artificial, senderismo y naturaleza.",
  },
  {
    id: 5,
    label: "Sierra de la Marta",
    tiempo: "1 hr 18",
    distancia: "55.9",
    image: sierra_marta,
    description:
      "Zona montañosa dentro de la Sierra Madre Oriental. Conocida por su biodiversidad, bosques de pino y encino, y por ser hábitat de especies como el oso negro y el puma. Además, forma parte de un área natural protegida, lo que la convierte en un lugar ideal para actividades como senderismo, observación de fauna y exploración en contacto con la naturaleza.",
  },
  {
    id: 6,
    label: "Huachichil",
    tiempo: "14",
    distancia: "15.3",
    image: huachichil,
    description:
      "Una pequeña comunidad ubicada en la Sierra de Arteaga, conocida por su entorno natural de bosque y clima fresco. Es un punto clave dentro de la ruta de viñedos de la región, ya que ahí se encuentran proyectos como Bodegas del Viento, además de cabañas, ranchos y espacios para ecoturismo; es ideal para escapadas tranquilas, contacto con la naturaleza y experiencias como degustaciones de vino y senderismo.",
  },
  {
    id: 7,
    label: "San Antonio de las alazanas",
    tiempo: "26",
    distancia: "30.9",
    image: san_antonio,
    description:
      "Un exclusivo desarrollo turístico y centro de esquí en la Sierra de Arteaga, Coahuila, famoso por ser el único lugar en México con pistas de esquí y snowboard funcionales los 365 días del año. El complejo es un destino popular todo el año, ideal para familias y amantes de la naturaleza, siendo un punto clave para el turismo en la región.",
  },
  {
    id: 8,
    label: "Saltillo",
    tiempo: "36",
    distancia: "38.9",
    image: saltillo,
    description:
      "Es la capital del estado y una de las ciudades más antiguas del norte de México, conocida por su industria, su clima más fresco que el promedio de la región y su cercanía con la Sierra de Arteaga. Tiene una mezcla interesante entre tradición y modernidad, con atractivos como el centro histórico, museos como el del Desierto y el de las Aves, además de ser un punto clave para turismo de naturaleza, vino y escapadas de montaña.",
  },
  {
    id: 9,
    label: "Monterrey",
    tiempo: "1 hr 40",
    distancia: "105",
    image: monterrey,
    description:
      "La principal ciudad del norte de México y un importante centro industrial y financiero, conocida por su desarrollo moderno y su entorno natural rodeado de montañas como el Cerro de la Silla. Combina vida urbana activa con atractivos como el Parque Fundidora, el Paseo Santa Lucía y una fuerte oferta gastronómica, cultural y de entretenimiento, además de ser punto de partida para explorar la Sierra Madre y destinos cercanos como Arteaga.",
  },
];

const ROTATIONS = [10, -5, 2, 14, -16, -18, 20];

export default function Actividades() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(1);
  const [selectedCard, setSelectedCard] = useState(ACTIVITIES[0]);

  const handleSelectCard = (id) => {
    const selected = ACTIVITIES.find((activitie) => activitie.id === id);
    setSelectedCard(selected);
  };

  const isShort = useIsShortHeight();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    isOpen ? { loop: true, dragFree: true, startIndex: 2 } : undefined,
    isOpen
      ? [
          AutoScroll({
            speed: 0.8,
            stopOnInteraction: true,
          }),
        ]
      : [],
  );

  useEffect(() => {
    if (isOpen && emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(2); // centra visualmente
    }
  }, [isOpen, emblaApi]);

  const scale = useResponsiveScale();

  // Medidas
  const ClosedCardWidth = isShort ? 300 : 500;
  const OpenedCardWidth = isShort ? 180 : 229;
  const CARD = {
    open: {
      width: OpenedCardWidth,
      height: OpenedCardWidth * 1.7,
    },
    closed: {
      width: ClosedCardWidth,
      height: ClosedCardWidth * 0.7,
    },
  };
  const IMAGE_RATIO = isOpen ? (isShort ? 0.7 : 0.77) : isShort ? 0.85 : 0.91;
  const cardHeight = (isOpen ? CARD.open.height : CARD.closed.height) * scale;
  const imageHeight = cardHeight * IMAGE_RATIO;

  return (
    <div className="absolute top-0 left-0 z-5 w-full h-full flex justify-center items-center pb-[clamp(36.25px,6.25vw,80px)] overflow-hidden">
      {/* Overlay */}
      <div className="absolute w-full h-full gradient-inicio" />

      <div
        onClick={() => {
          if (!isOpen) setIsOpen(true);
        }}
        className={`flex w-full justify-center items-center ${isOpen ? "lg:max-w-[1280px] lg:h-[470px] m-auto" : "h-fit hover:cursor-pointer"}`}
        style={{
          height: isOpen ? 470 * scale : "auto",
        }}
      >
        <div
          ref={isOpen ? emblaRef : null}
          className={
            isOpen
              ? "w-full h-full overflow-hidden"
              : "flex relative w-[clamp(327px,57.578125vw,737px)] h-[clamp(257px,45.15625vw,578px)] justify-center items-center"
          }
        >
          <div
            className={
              isOpen
                ? "flex gap-[clamp(8.61px,1.484375vw,19px)] h-full items-center px-[clamp(8.61px,1.484375vw,19px)]"
                : "flex relative justify-center items-center"
            }
          >
            {ACTIVITIES.map((item, index) => {
              return (
                <motion.div
                  key={item.label}
                  layout
                  initial={false}
                  animate={{
                    width:
                      (isOpen ? CARD.open.width : CARD.closed.width) * scale,
                    height:
                      (isOpen ? CARD.open.height : CARD.closed.height) * scale,
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
                      handleSelectCard(item.id);
                      setIsOpen(false);
                    }
                  }}
                  className={`flex shrink-0 flex-col p-[clamp(7px,1.25vw,16px)] gap-[clamp(7px,1.25vw,16px)] bg-nude dark:bg-verde ${
                    isOpen
                      ? "relative gallery_slide select-none hover:cursor-pointer"
                      : "absolute top-1/2 -translate-y-1/2"
                  }`}
                  style={{
                    zIndex:
                      selectedCardId === item.id
                        ? ACTIVITIES.length + 1
                        : ACTIVITIES.length - index,
                  }}
                >
                  {/* Content */}
                  <motion.div
                    layout
                    initial={false}
                    animate={{
                      height: imageHeight,
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
                      <div className="flex justify-center items-center gap-[clamp(7px,1.25vw,16px)]">
                        <motion.div className="flex flex-col gap-[clamp(1.81px,0.3125vw,4px)]">
                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: 6,
                              transition: { duration: 0 },
                            }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2,
                            }}
                            className="grow flex justify-center items-center text-card-subtitle text-center font-regular text-cafe-claro dark:text-nude leading-[130%] uppercase"
                          >
                            Tiempo
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: 6,
                              transition: { duration: 0 },
                            }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2,
                            }}
                            className="grow flex justify-center items-center text-caption text-center font-regular text-gris dark:text-nude leading-[130%]"
                          >
                            {item.tiempo} min
                          </motion.p>
                        </motion.div>

                        <div className="h-[clamp(19.03px,3.28125vw,42px)] border border-cafe-claro dark:border-nude" />

                        <motion.div className="flex flex-col gap-[clamp(1.81px,0.3125vw,4px)]">
                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: 6,
                              transition: { duration: 0 },
                            }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2,
                            }}
                            className="grow flex justify-center items-center text-card-subtitle text-center font-regular text-cafe-claro dark:text-nude leading-[130%] uppercase"
                          >
                            Distancia
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: 6,
                              transition: { duration: 0 },
                            }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2,
                            }}
                            className="grow flex justify-center items-center text-caption text-center font-regular text-gris dark:text-nude leading-[130%] uppercase"
                          >
                            {item.distancia} KM
                          </motion.p>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>

                  {/* Title */}
                  <AnimatePresence>
                    {isOpen && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4/8 w-[clamp(105.57px,18.203125vw,228px)] h-[clamp(32.63px,5.625vw,72px)]">
                        <div className="absolute w-full h-full flex justify-center items-center">
                          <img
                            src={PaperTear}
                            alt="Imagen de fondo de textura de papel"
                            className="absolute inset-0 w-full h-full"
                          />
                          <p className="relative z-10 text-frase text-center font-selinea text-cafe dark:text-verde-claro leading-[45%] tracking-tight">
                            {item.label}
                          </p>
                        </div>
                      </div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
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
              className="w-[clamp(158.03px,27.265625vw,349px)] h-full text-center"
            >
              <h3 className="text-frase text-cafe dark:text-verde-claro font-selinea">
                {selectedCard.label}
              </h3>
              <p className="text-paragraph text-gris dark:text-nude leading-[125%]">
                {selectedCard.description}
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
              className="absolute bottom-[clamp(80.59px,16.4117647vh,150px)] left-1/2 -translate-x-1/2 flex justify-center items-center size-[clamp(30px,3.28125vw,42px)]"
            >
              <ClickIcon className="w-[clamp(12px,2.138281vw,27.37px)] h-[clamp(16px,2.871094vw,36.75px)] text-verde dark:text-nude" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

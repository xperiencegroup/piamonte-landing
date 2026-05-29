import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
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
import terra_serena from "@/assets/images/Ubicación/actividades/terra_serena.jpg";
import RowIcon from "@/assets/icons/shared/rowIcon";
import { Carousel } from "@/components/ui/shared/carousel/Carousel";
import chunkArray from "@/utils/chunkArray";

// Papers
import PaperTearTop from "@/assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTearTop.png";

const ACTIVITIES = [
  {
    id: 1,
    label: "Los cedros",
    titleSVG: "",
    tiempo: "25",
    distancia: "43.3",
    image: seria_cedros,
    description:
      "La residencia destaca por su diseño de estilo hacienda contemporánea, que combina elementos coloniales con acabados modernos.\n\nEl residencial ofrece áreas verdes, una casa club con salón de eventos, gimnasio y bar, además de seguridad privada y acceso controlado.",
  },
  {
    id: 2,
    label: "Bodega del viento",
    tiempo: "16",
    distancia: "14.1",
    image: bodega_vientos,
    description:
      "Un viñedo boutique ubicado en la Sierra de Arteaga, Coahuila, a más de 2,100 metros de altura, lo que le permite producir vinos de clima frío poco comunes en México, con uva propia y una producción limitada, ofreciendo recorridos, degustaciones y una experiencia tranquila rodeada de paisaje montañoso.",
  },
  {
    id: 3,
    label: "San Antonio de las alazanas",
    tiempo: "20",
    distancia: "30.9",
    image: san_antonio,
    description:
      "Un exclusivo desarrollo turístico y centro de esquí en la Sierra de Arteaga, Coahuila, famoso por ser el único lugar en México con pistas de esquí y snowboard funcionales los 365 días del año.\n\nEl complejo es un destino popular todo el año, ideal para familias y amantes de la naturaleza, siendo un punto clave para el turismo en la región.",
  },
  {
    id: 4,
    label: "Huachichil",
    tiempo: "14",
    distancia: "15.3",
    image: huachichil,
    description:
      "Una pequeña comunidad ubicada en la Sierra de Arteaga, conocida por su entorno natural de bosque y clima fresco. Es un punto clave dentro de la ruta de viñedos de la región, ya que ahí se encuentran proyectos como Bodegas del Viento, además de cabañas, ranchos y espacios para ecoturismo; es ideal para escapadas tranquilas, contacto con la naturaleza y experiencias como degustaciones de vino y senderismo.",
  },

  {
    id: 5,
    label: "Monterreal",
    tiempo: "42",
    distancia: "43.3",
    image: monterreal,
    description:
      "Un exclusivo desarrollo turístico y centro de esquí en la Sierra de Arteaga, Coahuila, famoso por ser el único lugar en México con pistas de esquí y snowboard funcionales los 365 días del año.\n\nEl complejo es un destino popular todo el año, ideal para familias y amantes de la naturaleza, siendo un punto clave para el turismo en la región.",
  },
  {
    id: 6,
    label: "Terra Serena",
    tiempo: "40",
    distancia: "31.7",
    image: terra_serena,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, soluta. Facilis nostrum iusto eum, natus fugit ipsam reprehenderit quam consequuntur ullam iure dicta doloremque debitis, est, voluptate distinctio provident quod! \n\n Voluptatem deleniti optio sapiente debitis illo cupiditate molestias minima in.",
  },
  {
    id: 7,
    label: "Sierra de la Marta",
    tiempo: "1 hr 18",
    distancia: "55.9",
    image: sierra_marta,
    description:
      "Zona montañosa dentro de la Sierra Madre Oriental. Conocida por su biodiversidad, bosques de pino y encino, y por ser hábitat de especies como el oso negro y el puma.\n\nAdemás, forma parte de un área natural protegida, lo que la convierte en un lugar ideal para actividades como senderismo, observación de fauna y exploración en contacto con la naturaleza.",
  },
  {
    id: 8,
    label: "Arteaga",
    tiempo: "15",
    distancia: "19.8",
    image: areteaga,
    description:
      "Un pueblo de montaña ubicado a unos 20-30 minutos de Saltillo, conocido como la “Suiza de México” por su clima fresco, paisajes boscosos y cercanía con la Sierra Madre Oriental; es un destino popular para escapadas de fin de semana, con cabañas, actividades al aire libre, vinos de altura y lugares como Bosques de Monterreal para disfrutar nieve artificial, senderismo y naturaleza.",
  },
  {
    id: 9,
    label: "Saltillo",
    tiempo: "36",
    distancia: "38.9",
    image: saltillo,
    description:
      "Es la capital del estado y una de las ciudades más antiguas del norte de México, conocida por su industria, su clima más fresco que el promedio de la región y su cercanía con la Sierra de Arteaga.\n\nTiene una mezcla interesante entre tradición y modernidad, con atractivos como el centro histórico, museos como el del Desierto y el de las Aves, además de ser un punto clave para turismo de naturaleza, vino y escapadas de montaña.",
  },
  {
    id: 10,
    label: "Monterrey",
    tiempo: "1 hr 40",
    distancia: "105",
    image: monterrey,
    description:
      "La principal ciudad del norte de México y un importante centro industrial y financiero, conocida por su desarrollo moderno y su entorno natural rodeado de montañas como el Cerro de la Silla.\n\nCombina vida urbana activa con atractivos como el Parque Fundidora, el Paseo Santa Lucía y una fuerte oferta gastronómica, cultural y de entretenimiento, además de ser punto de partida para explorar la Sierra Madre y destinos cercanos como Arteaga.",
  },
];

const GROUPS = [
  { label: "Viñedos", activities: ACTIVITIES.slice(0, 2) },
  { label: "Para Conocer", activities: ACTIVITIES.slice(2, 7) },
  { label: "Ciudades Cerca", activities: ACTIVITIES.slice(7, 10) },
];

const ROTATIONS = [10, -5, 12];
const TRANSLATIONS = [-0, -10, -25];

export default function Actividades() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCardId, setSelectedCardId] = useState(1);
  const [selectedCard, setSelectedCard] = useState(ACTIVITIES[0]);

  const handleSelectCard = (id) => {
    const selected = ACTIVITIES.find((activitie) => activitie.id === id);
    setSelectedCard(selected);
  };

  const isShort = useIsShortHeight();

  // ----- Con animación (estable) pero sin loop infinito
  // const [emblaRef, emblaApi] = useEmblaCarousel(
  //   isOpen ? { loop: true, startIndex: activeSlide } : undefined,
  // );

  // ----- Con animación (brusca) y loop infinito
  const [emblaRef, emblaApi] = useEmblaCarousel(
    isOpen ? { loop: true } : undefined,
  );

  useEffect(() => {
    if (isOpen && emblaApi) {
      emblaApi.reInit();
    }
  }, [isOpen, emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveSlide(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  useEffect(() => {
    if (!isOpen || !emblaApi) return;

    requestAnimationFrame(() => {
      emblaApi.scrollTo(activeSlide, false);
    });
  }, [isOpen, emblaApi, activeSlide]);

  const scrollNext = () => emblaApi?.scrollNext();
  const scrollPrev = () => emblaApi?.scrollPrev();

  const scale = useResponsiveScale();

  // Medidas
  const ClosedCardWidth = isShort ? 320 : 500;
  const OpenedCardWidth = isShort ? 180 : 208;
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
  const IMAGE_RATIO = isOpen ? (isShort ? 0.68 : 0.77) : isShort ? 0.85 : 0.91;
  const cardHeight = (isOpen ? CARD.open.height : CARD.closed.height) * scale;
  const imageHeight = cardHeight * IMAGE_RATIO;

  // Segundo carrusel para el nav
  const [emblaNavRef, emblaNavApi] = useEmblaCarousel({
    loop: true,
    containScroll: false,
    watchDrag: false,
  });

  useEffect(() => {
    if (!emblaApi || !emblaNavApi) return;

    const onSelect = () => {
      const previous = emblaApi.previousScrollSnap();
      const current = emblaApi.selectedScrollSnap();

      setActiveSlide(current);

      const maxIndex = emblaApi.scrollSnapList().length - 1;

      let isNext = false;
      let isPrev = false;

      if (previous === maxIndex && current === 0) {
        isNext = true;
      } else if (previous === 0 && current === maxIndex) {
        isPrev = true;
      } else if (current > previous) {
        isNext = true;
      } else if (current < previous) {
        isPrev = true;
      }

      if (isNext) {
        emblaNavApi.scrollNext();
      }

      if (isPrev) {
        emblaNavApi.scrollPrev();
      }
    };

    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, emblaNavApi]);

  const NAV_GROUPS = [...GROUPS, ...GROUPS];

  // Slides para mobile
  const cardsPerSlide = isShort ? 2 : 4;
  const chunks = chunkArray(ACTIVITIES, cardsPerSlide);
  const slides = chunks.map((chunk, i) => {
    return (
      <div
        key={i}
        className={`flex flex-col w-full h-full ${isShort ? "justify-center" : ""}`}
      >
        <div className="grid grid-cols-2 gap-[clamp(9px,1.5625vw,20px)] w-full h-fit place-items-center">
          {chunk.map((item, index) => {
            return (
              <div
                key={index}
                className="relative w-[clamp(232px,40.820313vw,522.5px)] h-[clamp(100px,17.578125vw,225px)] bg-nude dark:bg-verde"
              >
                <img
                  src={item.image}
                  alt="Imagen de la amenidad"
                  className="absolute inset-0 w-full h-full object-cover p-[clamp(7px,1.25vw,16px)]"
                />

                <div
                  className={`flex absolute bottom-0 z-10 w-[clamp(102px,17.96875vw,230px)] h-[clamp(23px,4.0625vw,52px)] justify-center items-center translate-y-[35%] left-0`}
                >
                  <img
                    src={PaperTear}
                    alt="Imagen de fondo textura papel"
                    className={`absolute w-full h-[clamp(23px,4.0625vw,54px)]`}
                  />

                  <div
                    className={`relative z-10 flex justify-center items-center gap-[clamp(4px,0.625vw,8px)]`}
                  >
                    <p className="text-paper text-center font-lavolta leading-[90%] text-cafe uppercase">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="absolute top-0 left-0 z-5 w-full h-full flex flex-col overflow-hidden">
      {/* Overlay */}
      <div className="absolute w-full h-full gradient-inicio" />

      {/* Fake navbar */}
      <div className="shrink-0 w-full h-[clamp(38px,5.234vw,67px)]" />

      {/* Carrousel Desktop Wrapper*/}
      <div className="[@media(max-height:640px)]:hidden w-full grow flex justify-center [@media(max-height:767px)]:items-end items-center pb-[3vh]">
        <motion.div
          onClick={() => {
            if (!isOpen) setIsOpen(true);
          }}
          className={`flex w-full justify-center items-center relative ${isOpen ? "flex-col lg:max-w-[1280px]" : "h-fit hover:cursor-pointer"}`}
          style={{
            height: isOpen ? (isShort ? 426 * scale : 480 * scale) : "auto",
          }}
        >
          {/* Nav categorías — sincronizado con activeSlide */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-fit"
              >
                <div ref={emblaNavRef} className="overflow-hidden w-full">
                  <div className="flex">
                    {NAV_GROUPS.map((group, index) => (
                      <button
                        key={`${group.label}-${index}`}
                        onClick={() => {
                          emblaApi?.scrollTo(index);
                          emblaNavApi?.scrollTo(index);
                        }}
                        className="relative flex-[0_0_33%] flex justify-center items-center"
                      >
                        <div
                          className="relative flex w-[clamp(105.57px,18.203125vw,233px)] h-[clamp(29.45px,5.078125vw,65px)] justify-center items-center hover:cursor-pointer"
                          style={{ scale: isShort ? 0.7 : 1 }}
                        >
                          <motion.p
                            transition={{ duration: 0.3 }}
                            className="relative z-10 text-center text-activity-category font-lavolta uppercase text-cafe drop-shadow-md"
                          >
                            {group.label}
                          </motion.p>

                          <img
                            src={PaperTear}
                            alt="Imagen de fondo de textura de papel"
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contenido */}
          <div
            ref={isOpen ? emblaRef : null}
            className={`${
              isOpen
                ? "flex flex-col justify-end w-full h-full overflow-hidden pb-4"
                : "flex relative max-lg:w-[clamp(220px,40vw,500px)] max-lg:h-[clamp(170px,32vh,400px)] w-[clamp(327px,57.578125vw,737px)] h-[clamp(257px,45.15625vw,578px)] justify-center items-center"
            }`}
          >
            <div
              className={
                isOpen
                  ? "flex gap-[clamp(8.61px,1.484375vw,19px)] h-fit items-center px-[clamp(8.61px,1.484375vw,19px)] max-lg:pt-8"
                  : "flex relative justify-center items-center"
              }
            >
              {GROUPS.map((group, groupIndex) => (
                <motion.div
                  key={groupIndex}
                  className={`${isOpen ? "flex gallery_slide_full w-full shrink-0 gap-10 px-10 justify-center items-center" : "flex justify-center items-center"}`}
                >
                  {group.activities.map((item, index) => (
                    <motion.div
                      key={item.label}
                      layout
                      initial={false}
                      animate={{
                        width:
                          (isOpen ? CARD.open.width : CARD.closed.width) *
                          scale,
                        height:
                          (isOpen ? CARD.open.height : CARD.closed.height) *
                          scale,
                        rotate: isOpen ? 0 : (ROTATIONS[index] ?? 10),
                        x: isOpen ? 0 : (TRANSLATIONS[index] ?? 0),
                        y: isOpen ? 0 : (TRANSLATIONS[index] ?? 0),
                      }}
                      transition={{
                        layout: {
                          type: "spring",
                          stiffness: 200,
                          damping: 25,
                        },
                        width: { type: "spring", stiffness: 200, damping: 25 },
                        height: { type: "spring", stiffness: 200, damping: 25 },
                        rotate: { duration: 0.5 },
                      }}
                      onClick={() => {
                        setSelectedCardId(item.id);
                        handleSelectCard(item.id);
                        setIsOpen(false);
                      }}
                      className={`p-[clamp(4px,1.25vw,12px)] gap-[clamp(7px,1.25vw,14px)] bg-nude dark:bg-verde ${isOpen ? "relative flex shrink-0 flex-col justify-between select-none hover:cursor-pointer" : "absolute top-1/2 -translate-y-1/2"}`}
                      style={{
                        zIndex:
                          selectedCardId === item.id
                            ? ACTIVITIES.length + 1
                            : ACTIVITIES.length - index,
                      }}
                    >
                      {/* Imagen */}
                      <motion.div
                        layout
                        initial={false}
                        animate={{ height: imageHeight }}
                        transition={{
                          layout: {
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                          },
                          height: {
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                          },
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

                      {/* Tiempo / Distancia */}
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
                                className="flex justify-center items-center text-card-subtitle text-center font-regular text-cafe-claro dark:text-nude leading-[130%] uppercase"
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
                                className="flex justify-center items-center text-activity-caption text-center font-regular text-gris dark:text-nude leading-[130%]"
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
                                className="flex justify-center items-center text-card-subtitle text-center font-regular text-cafe-claro dark:text-nude leading-[130%] uppercase"
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
                                className="flex justify-center items-center text-activity-caption text-center font-regular text-gris dark:text-nude leading-[130%] uppercase"
                              >
                                {item.distancia} KM
                              </motion.p>
                            </motion.div>
                          </div>
                        )}
                      </AnimatePresence>

                      {/* Paper tear title */}
                      <AnimatePresence>
                        {isOpen && (
                          <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4/8 w-[clamp(105.57px,18.203125vw,228px)] h-[clamp(32.63px,5.625vw,72px)]"
                            style={{ scale: isShort ? 0.8 : 1 }}
                          >
                            <div className="absolute w-full h-full flex justify-center items-center">
                              <img
                                src={PaperTear}
                                alt="Imagen de fondo de textura de papel"
                                className="absolute inset-0 w-full h-full"
                              />
                              <p className="relative z-10 text-activity-title text-center font-lavolta text-cafe dark:text-verde-claro leading-[100%] tracking-tight uppercase scale-85">
                                {item.label}
                              </p>
                            </div>
                          </div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Flechas */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Flecha izquierda */}
                <button
                  onClick={scrollPrev}
                  className="group absolute rotate-180 hover:cursor-pointer left-0"
                  style={{ transform: "translateX(130%)" }}
                >
                  <RowIcon className="size-[clamp(12px,2.158594vw,27.63px)] text-gris dark:text-nude group-hover:text-cafe-claro dark:group-hover:text-amarillo" />
                </button>

                {/* Flecha derecha */}
                <button
                  onClick={scrollNext}
                  className="group absolute right-0 hover:cursor-pointer"
                  style={{ transform: "translateX(130%)" }}
                >
                  <RowIcon className="size-[clamp(12px,2.158594vw,27.63px)] text-gris dark:text-nude group-hover:text-cafe-claro dark:group-hover:text-amarillo" />
                </button>
              </>
            )}
          </AnimatePresence>

          {/* Dots */}
          <AnimatePresence>
            {isOpen && (
              <div className="absolute bottom-0 translate-y-full">
                <div className="flex items-center gap-[clamp(6px,0.625vw,8px)]">
                  {GROUPS.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => emblaApi?.scrollTo(index)}
                      animate={{
                        width:
                          activeSlide === index
                            ? "clamp(27.19px,4.6875vw,60px)" // pill cuando activo
                            : "clamp(11.26px,1.94140625vw,24.85px)", // círculo cuando inactivo
                        backgroundColor:
                          activeSlide === index
                            ? "var(--color-verde-claro)"
                            : "var(--color-verde)",
                      }}
                      transition={{ duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
                      className="h-[clamp(14.05px,2.470588vh,21px)] rounded-full hover:cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            )}
          </AnimatePresence>

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
                className="flex flex-col w-[clamp(158.03px,30.265625vw,459px)] h-full text-center gap-[clamp(9.06px,1.5625vw,20px)]
"
              >
                <h3 className="text-activity-title text-cafe dark:text-amarillo font-lavolta leading-[120%] uppercase drop-shadow-md">
                  {selectedCard.label}
                </h3>
                <p className="text-[9px] font-medium md:text-body-md whitespace-pre-line text-gris dark:text-nude leading-[120%]">
                  {selectedCard.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Carrousel Mobile Wrapper*/}
      <div className="[@media(min-height:640px)]:hidden flex grow justify-center items-center">
        <div className="w-[clamp(490px,86.328125vw,1105px)] h-full">
          <Carousel slides={slides} variant="card" arrows="outside" />
        </div>
      </div>

      {/* Fake bottom navbar */}
      <div className={`shrink-0 w-full h-[clamp(63.44px,10.9375vw,126px)]`} />
    </div>
  );
}

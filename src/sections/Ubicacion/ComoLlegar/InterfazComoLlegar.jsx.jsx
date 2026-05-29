import IsotipoVerde from "@/assets/icons/main/isotipo.svg";
import paperSmall from "@/assets/images/Ubicación/comoLlegar/paperSmall.svg";
import paperLarge from "@/assets/images/Ubicación/comoLlegar/paperLarge.svg";
import { useRutasStore } from "@/store/useRutasUbicacionesStore";
import { useSearchParams } from "react-router";
import MapIcon from "@/assets/icons/ubicacion/MapIcon";
import CloseIcon from "@/assets/icons/shared/closeIcon";
import { useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { AnimatePresence } from "motion/react";

const DIRECCIONES_MONTERREY = [
  {
    id: "saltillo-monterrey",
    description:
      "Toma la autopista Monterrey-Saltillo (40D) y conduce aproximadamente 40 km en dirección a Saltillo.",
  },
  {
    id: "matehuala-monterrey",
    description:
      "Incorpórate a la carretera 57 rumbo a Matehuala y continúa cerca de 30 km hasta la zona de Arteaga / Los Chorros.",
  },
  {
    id: "salida_arteaga",
    description:
      "Toma la salida hacia Arteaga / Huachichil y sigue por la carretera libre y camino local durante 30–35 km hasta llegar a Pinares de Rancho Viejo.",
  },
];
const DIRECCIONES_SALTILLO = [
  {
    id: "saltillo-coahuila",
    description:
      "Toma el Bulevar Fundadores en dirección a Arteaga y conduce aproximadamente 10-12 km hasta salir de la zona urbana.",
  },
  {
    id: "fundadores",
    description:
      "Continúa por la carretera 57 rumbo a Arteaga / Matehuala, entrando a la sierra y recorriendo cerca de 10-12 km más.",
  },
  {
    id: "matehuala-monterrey-saltillo",
    description:
      "Toma el desvío hacia Huachichil / Pinares de Rancho Viejo y sigue por el camino local aproximadamente 8-10 km hasta llegar a tu destino.",
  },
];

export default function InterfazComoLlegar() {
  const showDirections = useRutasStore((state) => state.showDirections);
  const setShowDirections = useRutasStore((state) => state.setShowDirections);
  const isSmall = useMediaQuery("(max-width: 845px)");
  const [params, setSearchParams] = useSearchParams();
  const activeOrigen = params.get("origen");

  const rutaHovered = useRutasStore((state) => state.rutaHovered);
  const setRutaHovered = useRutasStore((state) => state.setRutaHovered);

  const DIRECCIONES =
    activeOrigen === "monterrey" ? DIRECCIONES_MONTERREY : DIRECCIONES_SALTILLO;

  const handleClickToShowRoute = () => {
    setShowDirections(!showDirections);
  };

  useEffect(() => {
    setShowDirections(false);
  }, []);

  const showNavigation = !showDirections || !isSmall;

  return (
    <div className="absolute inset-0 flex flex-col w-full h-full pointer-events-none">
      {/* Fake navbar */}
      <div className="shrink-0 h-[clamp(38px,5.234vw,67px)]" />

      {/* Botones */}
      <div
        className={`shrink-0 flex w-full h-[clamp(26.27px,4.53125vw,58px)] px-[clamp(13.59px,2.34375vw,30px)] justify-between ${!showNavigation && "hidden"}`}
      >
        <button
          onClick={() => {
            setSearchParams((prev) => {
              prev.set("origen", "monterrey");
              return prev;
            });
          }}
          className={`group relative flex justify-center items-center w-fit h-full gap-[2vw] px-[1vw] text-boton-grande text-cafe dark:text-nude uppercase after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-cafe dark:after:bg-amarillo hover:cursor-pointer ${activeOrigen === "monterrey" && "font-bold after:h-[2px]"} transition-all pointer-events-auto`}
        >
          <span className="shrink-0">Desde monterrey</span>

          <span
            className={`grid transition-[grid-template-columns,opacity] duration-300 ease-out
              ${
                activeOrigen === "monterrey"
                  ? "grid-cols-[1fr] opacity-100"
                  : "grid-cols-[0fr] opacity-0 group-hover:grid-cols-[1fr] group-hover:opacity-100"
              }`}
          >
            <span className="overflow-hidden text-[9px] lg:text-botton-ubicacion font-normal whitespace-nowrap">
              Tiempo
              <br />
              <span className="font-medium lowercase">1 hr 30 min</span>
            </span>
          </span>
        </button>

        <button
          onClick={() => {
            setSearchParams((prev) => {
              prev.set("origen", "saltillo");
              return prev;
            });
          }}
          className={`group relative flex justify-center items-center w-fit h-full gap-[2vw] px-[1vw] text-boton-grande text-cafe dark:text-nude uppercase after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-cafe dark:after:bg-amarillo hover:cursor-pointer ${activeOrigen === "saltillo" && "font-bold after:h-[2px]"} transition-all pointer-events-auto`}
        >
          <span className="shrink-0">Desde saltillo</span>

          <span
            className={`grid transition-[grid-template-columns,opacity] duration-300 ease-out
              ${
                activeOrigen === "saltillo"
                  ? "grid-cols-[1fr] opacity-100"
                  : "grid-cols-[0fr] opacity-0 group-hover:grid-cols-[1fr] group-hover:opacity-100"
              }
            `}
          >
            <span className="overflow-hidden text-[9px] lg:text-botton-ubicacion font-normal whitespace-nowrap">
              Tiempo
              <br />
              <span className="font-medium lowercase">30 min</span>
            </span>
          </span>
        </button>
      </div>

      {/* Dirección desktop */}
      <div
        className={`grow flex flex-col items-end justify-between pt-[clamp(6px,0.8vh,14px)] pr-[clamp(14.5px,2.5vw,32px)] ${!showNavigation && "hidden"}`}
      >
        {/* Principal */}
        <div className="flex relative w-[clamp(160.31px,27.734375vw,355px)] h-fit justify-center items-center px-[clamp(11.33px,1.953125vw,25px)] py-[clamp(10px,1.8vh,25px)] gap-[clamp(4px,0.8vh,10px)]">
          <img
            src={IsotipoVerde}
            alt="Isotipo piamonte"
            className="relative z-10 w-[clamp(10.88px,1.875vw,24px)] h-[clamp(14.04px,2.421875vw,31px)] shrink-0"
          />

          <p className="relative z-10 pointer-events-auto text-paper-height font-bold uppercase text-gris leading-[120%]">
            86J3+P86,
            <br />
            Pinares de Rancho Viejo, Arteaga, Coahuila, México
          </p>

          <img src={paperSmall} className="absolute inset-0 w-full h-full" />
        </div>

        {/* Indicaciones desktop */}
        <div className="max-[845px]:hidden relative pointer-events-auto flex flex-col justify-center items-center gap-[clamp(4.53px,0.78125vw,10px)] w-[clamp(160.31px,24.734375vw,355px)] lg:w-[clamp(160.31px,27.734375vw,355px)] h-fit lg:h-full lg:max-h-[clamp(148.56px,28.625vw,358px)] max-lg:py-4 px-4 lg:px-[3%]">
          <p className="relative z-10 text-center text-activity-title font-lavolta leading-[40%] uppercase">
            Direcciones
          </p>
          {DIRECCIONES.map((item) => {
            return (
              <p
                key={item.id}
                className={`relative z-10 text-[5px] lg:text-direcciones text-verde uppercase leading-[120%] lg:leading-[140%] transition-all hover:cursor-pointer ${item.id === rutaHovered && "font-bold italic text-gris"}`}
                onMouseEnter={() => setRutaHovered(item.id)}
                onMouseLeave={() => setRutaHovered(null)}
              >
                {item.description}
              </p>
            );
          })}

          <img
            src={paperLarge}
            draggable={false}
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          />
        </div>
      </div>

      {/* Indicaciones mobile */}
      <div
        className={`min-[845px]:hidden grow relative ${!showDirections && "hidden"} bg-nude/20 dark:bg-gris/20`}
      >
        {/* Content */}
        <div className="relative z-10 w-full h-full py-[2vh] px-[10vw]">
          <div className="relative w-full h-full">
            <div className="flex flex-col justify-center relative z-10 w-full h-full gap-[4vh]">
              <div className="flex flex-col px-[12vw] gap-[clamp(8.88px,1.5625vh,12px)]">
                <p className="text-lavolta-title font-lavolta uppercase text-center leading-[100%]">
                  Direcciones
                </p>

                {DIRECCIONES.map((item) => {
                  return (
                    <p className="text-direcciones-mobile font-dmsans text-verde uppercase">
                      {item.description}
                    </p>
                  );
                })}
              </div>

              <div className="flex self-center items-center px-[12vw] gap-[clamp(4px,0.8vh,10px)]">
                <img
                  src={IsotipoVerde}
                  alt="Isotipo piamonte"
                  className="relative z-10 w-[clamp(10.88px,1.875vw,24px)] h-[clamp(14.04px,2.421875vw,31px)] shrink-0"
                />

                <p className="relative z-10 pointer-events-auto text-direcciones-mobile font-bold uppercase text-gris leading-[120%]">
                  86J3+P86,
                  <br />
                  Pinares de Rancho Viejo, Arteaga, Coahuila, México
                </p>
              </div>
            </div>
            <img
              src={paperLarge}
              draggable={false}
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Botón direcciones Mobile */}
      <button
        onClick={handleClickToShowRoute}
        className="min-[845px]:hidden absolute z-20 top-1/2 right-0 w-[clamp(99.84px,17.578125vw,135px)] flex justify-center items-center p-[clamp(7.25px,1.25vw,16px)] gap-[clamp(5.92px,1.0416667vw,8px)] bg-verde dark:bg-nude hover:cursor-pointer pointer-events-auto"
      >
        {!showDirections ? (
          <MapIcon className="w-[clamp(12.29px,2.1640625vw,16.62px)] text-nude dark:text-gris" />
        ) : (
          <CloseIcon className="size-[clamp(7.39px,1.3020833vw,10px)] text-nude dark:text-gris" />
        )}

        <p className="text-botton-ubicacion uppercase text-nude dark:text-gris">
          {!showDirections ? "Direcciones" : "Cerrar"}
        </p>
      </button>

      {/* Fake navigation menu */}
      <div
        className={`shrink-0 lg:h-[clamp(63.44px,10.9375vw,140px)] ${isSmall ? "h-[clamp(31px,5.46875vw,70px)]" : "h-[clamp(60.13px,9.8125vw,80px)]"}`}
      />
    </div>
  );
}

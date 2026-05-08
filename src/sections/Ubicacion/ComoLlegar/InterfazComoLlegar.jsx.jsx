import IsotipoVerde from "@/assets/icons/main/isotipo.svg";
import paperSmall from "@/assets/images/Ubicación/comoLlegar/paperSmall.svg";
import paperLarge from "@/assets/images/Ubicación/comoLlegar/paperLarge.svg";
import { useRutasStore } from "@/store/useRutasUbicacionesStore";
import { useSearchParams } from "react-router";

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
  const [params, setSearchParams] = useSearchParams();
  const activeOrigen = params.get("origen");

  const rutaHovered = useRutasStore((state) => state.rutaHovered);
  const setRutaHovered = useRutasStore((state) => state.setRutaHovered);

  const DIRECCIONES =
    activeOrigen === "monterrey" ? DIRECCIONES_MONTERREY : DIRECCIONES_SALTILLO;
  return (
    <div className="absolute inset-0 flex flex-col w-full h-full pointer-events-none">
      {/* Fake navbar */}
      <div className="shrink-0 h-[clamp(38px,5.234vw,67px)]" />

      {/* Botones */}
      <div className="shrink-0 flex w-full h-[clamp(26.27px,4.53125vw,58px)] px-[clamp(13.59px,2.34375vw,30px)] justify-between">
        <button
          onClick={() => {
            setSearchParams((prev) => {
              prev.set("origen", "monterrey");
              return prev;
            });
          }}
          className={`relative w-[clamp(97.42px,16.796875vw,215px)] h-full text-boton-grande text-cafe dark:text-nude uppercase after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-cafe dark:after:bg-amarillo hover:cursor-pointer ${activeOrigen === "monterrey" && "font-bold after:h-[2px]"} transition-all pointer-events-auto`}
        >
          Desde monterrey
        </button>

        <button
          onClick={() => {
            setSearchParams((prev) => {
              prev.set("origen", "saltillo");
              return prev;
            });
          }}
          className={`relative w-[clamp(97.42px,16.796875vw,215px)] h-full text-boton-grande text-cafe dark:text-nude uppercase after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-cafe dark:after:bg-amarillo hover:cursor-pointer ${activeOrigen === "saltillo" && "font-bold after:h-[2px]"} transition-all pointer-events-auto`}
        >
          Desde saltillo
        </button>
      </div>

      {/* Dirección */}
      <div className="grow flex flex-col items-end justify-between pt-[clamp(6px,0.8vh,14px)] pr-[clamp(14.5px,2.5vw,32px)]">
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

        {/* Indicaciones */}
        <div className="relative pointer-events-auto flex flex-col justify-center items-center gap-[clamp(4.53px,0.78125vw,10px)] w-[clamp(160.31px,24.734375vw,355px)] lg:w-[clamp(160.31px,27.734375vw,355px)] h-fit lg:h-[clamp(148.56px,28.625vw,358px)] max-lg:py-4 px-4 lg:px-[3%]">
          <p className="relative z-10 text-center text-frase font-selinea leading-[40%]">
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

      {/* Fake navigation menu */}
      <div className="shrink-0 h-[clamp(60.13px,9.8125vw,80px)] lg:h-[clamp(63.44px,10.9375vw,140px)]" />
    </div>
  );
}

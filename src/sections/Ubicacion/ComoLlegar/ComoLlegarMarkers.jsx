import { useSearchParams } from "react-router";
import AdvanceMarker from "@/components/ui/shared/map/AdvanceMarker";
import PaperTitle from "@/assets/images/Nosotros/paperTitle.png";
import RutaMty from "@/assets/images/Ubicación/comoLlegar/RutaMty";
import ReactBoundsOverlay from "@/components/ui/google/ReactOverlay";
import Vialidades from "./Vialidades";
import RutaSaltillo from "@/assets/images/Ubicación/comoLlegar/RutaSaltillo";
import useIsShortHeight from "@/hooks/useIsShortHeight";

const VIALIDADES_MONTERREY = [
  {
    id: "saltillo-monterrey",
    label: "Autop. Saltillo Monterrey",
    coordinates: { lat: 25.726797410054708, lng: -100.64772907026243 },
  },
  {
    id: "matehuala-monterrey",
    label: "Matehuala-Monterrey",
    coordinates: { lat: 25.502822092729094, lng: -100.67509421534703 },
  },
  {
    id: "salida_arteaga",
    label: "Salida hacia arteaga",
    coordinates: { lat: 25.32744499567663, lng: -100.57644725440758 },
  },
];
const VIALIDADES_SALTILLO = [
  {
    id: "saltillo-coahuila",
    label: "Saltillo, Coahuila",
    coordinates: { lat: 25.439498102408873, lng: -101.00491181308345 },
  },
  {
    id: "fundadores",
    label: "Fundadores",
    coordinates: { lat: 25.449910283457744, lng: -100.86964020002796 },
  },
  {
    id: "matehuala-monterrey-saltillo",
    label: "Matehuala-Monterrey",
    coordinates: { lat: 25.37055301352131, lng: -100.87365051974568 },
  },
];

export default function ComoLlegarMarkers() {
  const isShort = useIsShortHeight();
  const [params] = useSearchParams();
  const activeOrigen = params.get("origen");

  const VIALIDADES =
    activeOrigen === "monterrey" ? VIALIDADES_MONTERREY : VIALIDADES_SALTILLO;
  const RUTA = activeOrigen === "monterrey" ? RutaMty : RutaSaltillo;

  const desdeMonterreyBounds = {
    north: 25.702,
    south: 25.325,
    east: -100.389,
    west: -100.89,
  };
  const desdeSaltilloBounds = {
    north: 25.485,
    south: 25.282,
    east: -100.681,
    west: -101.12,
  };

  const imageBounds =
    activeOrigen === "monterrey" ? desdeMonterreyBounds : desdeSaltilloBounds;
  return (
    <>
      {VIALIDADES.map((vialidad) => {
        return (
          <AdvanceMarker key={vialidad.id} position={vialidad.coordinates}>
            <div
              className={`relative z-10 flex w-fit h-[clamp(23px,4.0625vw,52px)] justify-center items-center ${isShort ? "scale-70" : ""}`}
            >
              <img
                src={PaperTitle}
                alt="Imagen de papel de fondo"
                className="absolute inset-0 w-full h-full"
              />
              <p className="relative z-10 text-[clamp(6px,1.015625vw,13px)] p-[clamp(5px,0.9375vw,12px)] font-dmsans font-bold uppercase">
                {vialidad.label}
              </p>
            </div>
          </AdvanceMarker>
        );
      })}

      <ReactBoundsOverlay bounds={imageBounds}>
        <div className="w-full h-full">{<RUTA />}</div>
      </ReactBoundsOverlay>
    </>
  );
}

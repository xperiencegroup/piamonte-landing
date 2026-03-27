import AdvanceMarker from "@/components/ui/shared/map/AdvanceMarker";
import PaperTitle from "@/assets/images/Nosotros/paperTitle.png";

const VIALIDADES_NAMES = [
  {
    id: "saltillo-monterrey",
    label: "Autop. Saltillo Monterrey",
    coordinates: { lat: 25.726797410054708, lng: -100.64772907026243 },
  },
  {
    id: "matehuala-monterrey",
    label: "Matehuala-Monterrey",
    coordinates: { lat: 25.531822092729094, lng: -100.86509421534703 },
  },
  {
    id: "fundadores",
    label: "Fundadores",
    coordinates: { lat: 25.44744499567663, lng: -100.98644725440758 },
  },
];

export default function ComoLlegarMarkers() {
  return (
    <>
      {VIALIDADES_NAMES.map((vialidad) => {
        return (
          <AdvanceMarker key={vialidad.id} position={vialidad.coordinates}>
            <div className="relative z-10 flex w-fit h-[clamp(23px,4.0625vw,52px)] justify-center items-center">
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
    </>
  );
}

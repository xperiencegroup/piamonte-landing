import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import primerAcceso from "@/assets/images/Ubicación/accesos/primer_acceso.svg";
import PaperTitle from "@/assets/images/Nosotros/paperTitle.png";
import AdvanceMarker from "@/components/ui/shared/map/AdvanceMarker";

export default function Accesos() {
  const map = useMap();

  const imageBounds = {
    north: 25.33993660202299,
    south: 25.33044721736302,
    east: -100.79045707899164,
    west: -100.80134051761064,
  };

  useEffect(() => {
    if (!map) return;

    const gmaps = window.google?.maps;
    if (!gmaps) return;

    const overlay = new gmaps.GroundOverlay(primerAcceso, imageBounds);
    overlay.setMap(map);

    return () => overlay.setMap(null);
  }, [map]);

  return (
    <AdvanceMarker
      position={{ lat: 25.334327566996134, lng: -100.79224426430268 }}
    >
      <div className="relative z-10 flex w-fit h-[clamp(23px,4.0625vw,52px)] justify-center items-center">
        <img
          src={PaperTitle}
          alt="Imagen de papel de fondo"
          className="absolute inset-0 w-full h-full"
        />
        <p className="relative z-10 text-[clamp(6px,1.015625vw,13px)] p-[clamp(5px,0.9375vw,12px)] font-dmsans font-bold uppercase">
          Matehuala - Monterrey
        </p>
      </div>
    </AdvanceMarker>
  );
}

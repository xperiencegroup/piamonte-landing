import { useEffect } from "react";
import { useMap } from "@vis.gl/react-google-maps";
import primerAcceso from "@/assets/images/Ubicación/accesos/primer_acceso.svg";

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
  return;
}

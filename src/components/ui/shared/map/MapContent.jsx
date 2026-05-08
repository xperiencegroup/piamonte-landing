import { IS_DEVELOPMENT } from "@/config";
import ComoLlegarMarkers from "@/sections/Ubicacion/ComoLlegar/ComoLlegarMarkers";
import PiamonteMarker from "@/sections/Ubicacion/PiamonteMarker";
import { useSearchParams } from "react-router";
import MapDebugger from "./MapDebugger";
import { useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";
import { MAP_CONFIG, PiamonteData } from "./mapConfig";
import useIsShortHeight from "@/hooks/useIsShortHeight";
import Accesos from "@/sections/Ubicacion/Accesos/Accesos";

const COMPONENTS_FROM_FILTER = {
  "como-llegar": ComoLlegarMarkers,
  accesos: Accesos,
};

export default function MapContent() {
  const [params] = useSearchParams();
  const map = useMap();
  const isShort = useIsShortHeight();

  const activeFilter = params.get("filter");
  const ComponentsToRender = COMPONENTS_FROM_FILTER[activeFilter];

  useEffect(() => {
    if (!map) return;

    if (activeFilter === "accesos") {
      map.moveCamera({
        center: {
          lat: PiamonteData.coordinates.lat + 0.0025,
          lng: PiamonteData.coordinates.lng,
        },
        // Zoom de 15 en mobile, 16 en laptops
        zoom: isShort ? 15 : 16,
      });
    } else {
      map.moveCamera({
        center: MAP_CONFIG.center,
        zoom: isShort ? 9 : MAP_CONFIG.zoom,
      });
    }
  }, [map, activeFilter, isShort]);

  return (
    <div>
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-dvh z-0 pointer-events-none [background:linear-gradient(to_bottom,oklch(from_#eeece0_l_c_h/.8)_20%,transparent_33%,transparent_69%,oklch(from_#E9E9E9_l_c_h/.85)_88%)] dark:[background:linear-gradient(to_bottom,oklch(from_#1a1a1a_l_c_h/.8)_20%,transparent_33%,transparent_69%,oklch(from_#111111_l_c_h/.85)_88%)]" />

      <PiamonteMarker />

      {ComponentsToRender && <ComponentsToRender />}
      {/* {IS_DEVELOPMENT && <MapDebugger />} */}
    </div>
  );
}

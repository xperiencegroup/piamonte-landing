import { APIProvider, Map } from "@vis.gl/react-google-maps";
import MapDebugger from "./MapDebugger";
import { MAP_CONFIG } from "./mapConfig";
import { IS_DEVELOPMENT } from "@/config";
import Vialidades from "@/sections/Ubicacion/Vialidades";
import ComoLlegarMarkers from "@/sections/Ubicacion/ComoLlegar/ComoLlegarMarkers";
import AdvanceMarker from "./AdvanceMarker";
import isotipo from "@/assets/icons/main/isotipo.svg";

const API_KEY = import.meta.env.VITE_GOOGLEMAPS_APIKEY;

function PiamonteMarker() {
  return (
    <AdvanceMarker
      position={{ lat: 25.32911642219783, lng: -100.79694688502843 }}
    >
      <div className="w-[clamp(18px,3.125vw,40px)] h-[clamp(23px,4.0625vw,52px)]">
        <img
          src={isotipo}
          alt="Isotipo de Piamonte"
          className="w-full h-full"
        />
      </div>
    </AdvanceMarker>
  );
}

export default function GoogleMap() {
  return (
    <div className="w-full h-dvh">
      <APIProvider apiKey={API_KEY}>
        <Map
          mapId={MAP_CONFIG.id}
          mapTypeId="satellite"
          gestureHandling="none"
          disableDefaultUI
          defaultZoom={MAP_CONFIG.zoom}
          defaultCenter={MAP_CONFIG.center}
          heading={MAP_CONFIG.heading}
          zoomControl={false}
          fullscreenControl={false}
          streetViewControl={false}
          mapTypeControl={false}
          className="size-full"
          styles={[
            {
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ]}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 w-full h-dvh z-0 pointer-events-none"
            style={{
              background: `linear-gradient(
                to bottom,
                oklch(from #eeece0 l c h / 0.8) 20%,
                transparent 33%,
                transparent 69%,
                oklch(from #E9E9E9 l c h / 0.85) 88%
                )`,
            }}
          />

          <PiamonteMarker />
          <Vialidades />
          <ComoLlegarMarkers />
          {IS_DEVELOPMENT && <MapDebugger />}
        </Map>
      </APIProvider>
    </div>
  );
}

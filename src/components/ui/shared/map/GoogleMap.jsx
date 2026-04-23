import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { MAP_CONFIG } from "./mapConfig";
import MapContent from "./MapContent";

const API_KEY = import.meta.env.VITE_GOOGLEMAPS_APIKEY;

export default function GoogleMap() {
  return (
    <div className="w-full h-dvh">
      <APIProvider apiKey={API_KEY}>
        <Map
          mapId={MAP_CONFIG.id}
          mapTypeId="satellite"
          gestureHandling="none"
          disableDefaultUI
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
          <MapContent />
        </Map>
      </APIProvider>
    </div>
  );
}

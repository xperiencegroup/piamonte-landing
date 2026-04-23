import { useEffect } from "react";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { geojsonToVialidad } from "@/utils/geojsonUtils";
import monterrey_to_piamonte from "@/data/mapa/vialidades/autopista_mty_saltillo.json";
import fundadores from "@/data/mapa/vialidades/fundadores.json";

const VIALIDADES = [fundadores, monterrey_to_piamonte];
const polylineData = VIALIDADES.flatMap(geojsonToVialidad);

export default function Vialidades() {
  const map = useMap();
  const mapsLib = useMapsLibrary("maps");

  useEffect(() => {
    if (!map || !mapsLib) return;

    const polylines = polylineData.map((vialidad) => {
      return new mapsLib.Polyline({
        path: vialidad.path,
        strokeWeight: vialidad.strokeWidth,
        strokeColor: "#374432",
        map,
        icons: [
          {
            icon: {
              path: "M 0,-1 0,1",
              strokeOpacity: 1,
              strokeColor: vialidad.strokeColor,
              scale: 1,
            },
            offset: "0",
            repeat: "4px",
          },
        ],
      });
    });

    return () => polylines.forEach((p) => p.setMap(null));
  }, [map, mapsLib]);

  return null;
}

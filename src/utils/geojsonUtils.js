/**
 * Convierte un GeoJSON (con extensión .json) al formato
 * requerido por Google Maps Polyline.
 *
 * @param {Object} geojson - GeoJSON de tipo Feature o FeatureCollection
 *
 * @returns {Array<{
 *   path: Array<{lat: number, lng: number}>,
 *   strokeColor: string,
 *   strokeWidth: number,
 * }>}
 *
 * @example
 * import colosio from "../data/vialidades/av_colosio.json";
 * const vialidades = geojsonToVialidad(colosio);
 * // [{ path: [{lat, lng}, ...], strokeColor: "#2d2273", ... }]
 */

export function geojsonToVialidad(geojson) {
  const { geometry } = geojson;

  const path = geometry.coordinates.map(([lng, lat]) => ({ lat, lng }));

  return [
    // Capa exterior (borde)
    {
      strokeColor: "#374432",
      strokeWidth: 12,
      path,
    },
    // Capa interior (color principal)
    {
      strokeColor: "#eeece0",
      strokeWidth: 3,
      path,
    },
  ];
}

import { useRutasStore } from "@/store/useRutasUbicacionesStore";

export default function RutaSaltillo() {
  const setRutaHovered = useRutasStore((state) => state.setRutaHovered);
  const rutaHovered = useRutasStore((state) => state.rutaHovered);

  return (
    <svg
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      className="w-full h-full overflow-visible"
    >
      {/* Exteriores */}
      <g>
        {/* Ruta 1 - Roja */}
        <g>
          {/* Hitbox invisible */}
          <polyline
            strokeMiterlimit={10}
            fill="none"
            stroke="transparent"
            strokeWidth="20"
            className="cursor-pointer"
            pointerEvents="stroke"
            points="610.68 312.45 594.01 258.89 580.37 260.41"
            onMouseEnter={() => setRutaHovered("saltillo-coahuila")}
            onMouseLeave={() => setRutaHovered(null)}
          />
          {/* Trazo Visual */}
          <polyline
            points="610.68 312.45 594.01 258.89 580.37 260.41"
            className={`fill-none stroke-[28px] transition-colors pointer-events-none stroke-amarillo`}
            strokeMiterlimit={10}
          />
        </g>

        {/* Ruta 2 - Azul */}
        <g>
          {/* Hitbox invisible */}
          <path
            strokeMiterlimit={10}
            fill="none"
            stroke="transparent"
            strokeWidth="20"
            className="cursor-pointer"
            pointerEvents="stroke"
            d="M1279.15,252.83l-49.01-29.05-13.64-5.31h-22.74l-40.42-3.03-299.12,59.12-243.54,37.89"
            onMouseEnter={() => setRutaHovered("fundadores")}
            onMouseLeave={() => setRutaHovered(null)}
          />
          {/* Trazo Visual */}
          <path
            d="M1279.15,252.83l-49.01-29.05-13.64-5.31h-22.74l-40.42-3.03-299.12,59.12-243.54,37.89"
            className={`fill-none stroke-[28px] transition-colors pointer-events-none stroke-amarillo`}
            strokeMiterlimit={10}
          />
        </g>

        {/* Ruta 3 - Amarilla (path + line) */}
        <g>
          {/* Hitbox invisible del Path */}
          <path
            strokeMiterlimit={10}
            fill="none"
            stroke="transparent"
            strokeWidth="20"
            className="cursor-pointer"
            pointerEvents="stroke"
            d="M1426.68,758.6s-1.52-64.17,0-71.75-16.17-31.83-18.19-45.47,2.11-50.53,9.14-65.68,28.25-27.94,27.74-35.69-8.08-15.84-8.08-15.84l-7.07-4.04s-15.16,14.65-15.16,5.56,2.02-16.67,2.02-16.67l-5.56-15.16,9.6-7.58-4.55-4.55h-5.05l-3.54-16.17-5.55-12.13,5.56-13.14-12.13-5.05v-16.17l-11.12-16.17h-6.06l4.55-17.18s-19.2-3.03-11.12-32.34,4.04-75.79,4.04-75.79l-61.64-27.79s-14.65,14.65-35.37,3.03"
            onMouseEnter={() => setRutaHovered("matehuala-monterrey-saltillo")}
            onMouseLeave={() => setRutaHovered(null)}
          />
          {/* Hitbox invisible de la Línea */}
          <line
            strokeMiterlimit={10}
            fill="none"
            stroke="transparent"
            strokeWidth="20"
            className="cursor-pointer"
            pointerEvents="stroke"
            x1="1413.04"
            y1="808.12"
            x2="1426.68"
            y2="758.6"
            onMouseEnter={() => setRutaHovered("matehuala-monterrey-saltillo")}
            onMouseLeave={() => setRutaHovered(null)}
          />

          {/* Trazo Visual del Path */}
          <path
            d="M1426.68,758.6s-1.52-64.17,0-71.75-16.17-31.83-18.19-45.47,2.11-50.53,9.14-65.68,28.25-27.94,27.74-35.69-8.08-15.84-8.08-15.84l-7.07-4.04s-15.16,14.65-15.16,5.56,2.02-16.67,2.02-16.67l-5.56-15.16,9.6-7.58-4.55-4.55h-5.05l-3.54-16.17-5.55-12.13,5.56-13.14-12.13-5.05v-16.17l-11.12-16.17h-6.06l4.55-17.18s-19.2-3.03-11.12-32.34,4.04-75.79,4.04-75.79l-61.64-27.79s-14.65,14.65-35.37,3.03"
            className={`fill-none stroke-[28px] transition-colors pointer-events-none stroke-amarillo`}
            strokeMiterlimit={10}
          />
          {/* Trazo Visual de la Línea */}
          <line
            x1="1413.04"
            y1="808.12"
            x2="1426.68"
            y2="758.6"
            className={`fill-none stroke-[17px] transition-colors pointer-events-none ${
              rutaHovered === "matehuala-monterrey-saltillo"
                ? "stroke-azul"
                : "stroke-verde"
            }`}
            strokeMiterlimit={10}
          />
        </g>
      </g>

      {/* Interiores */}
      <g>
        {/* Ruta 1 - Roja */}
        <g>
          {/* Trazo Visual */}
          <polyline
            points="610.68 312.45 594.01 258.89 580.37 260.41"
            className={`fill-none stroke-[17px] transition-colors pointer-events-none ${
              rutaHovered === "saltillo-coahuila"
                ? "stroke-azul"
                : "stroke-verde"
            }`}
            strokeMiterlimit={10}
          />
        </g>

        {/* Ruta 2 - Azul */}
        <g>
          {/* Trazo Visual */}
          <path
            d="M1279.15,252.83l-49.01-29.05-13.64-5.31h-22.74l-40.42-3.03-299.12,59.12-243.54,37.89"
            className={`fill-none stroke-[17px] transition-colors pointer-events-none ${
              rutaHovered === "fundadores" ? "stroke-azul" : "stroke-verde"
            }`}
            strokeMiterlimit={10}
          />
        </g>

        {/* Ruta 3 - Amarilla (path + line) */}
        <g>
          {/* Trazo Visual del Path */}
          <path
            d="M1426.68,758.6s-1.52-64.17,0-71.75-16.17-31.83-18.19-45.47,2.11-50.53,9.14-65.68,28.25-27.94,27.74-35.69-8.08-15.84-8.08-15.84l-7.07-4.04s-15.16,14.65-15.16,5.56,2.02-16.67,2.02-16.67l-5.56-15.16,9.6-7.58-4.55-4.55h-5.05l-3.54-16.17-5.55-12.13,5.56-13.14-12.13-5.05v-16.17l-11.12-16.17h-6.06l4.55-17.18s-19.2-3.03-11.12-32.34,4.04-75.79,4.04-75.79l-61.64-27.79s-14.65,14.65-35.37,3.03"
            className={`fill-none stroke-[17px] transition-colors pointer-events-none ${
              rutaHovered === "matehuala-monterrey-saltillo"
                ? "stroke-azul"
                : "stroke-verde"
            }`}
            strokeMiterlimit={10}
          />
          {/* Trazo Visual de la Línea */}
          <line
            x1="1413.04"
            y1="808.12"
            x2="1426.68"
            y2="758.6"
            className={`fill-none stroke-[17px] transition-colors pointer-events-none ${
              rutaHovered === "matehuala-monterrey-saltillo"
                ? "stroke-azul"
                : "stroke-verde"
            }`}
            strokeMiterlimit={10}
          />
        </g>
      </g>
    </svg>
  );
}

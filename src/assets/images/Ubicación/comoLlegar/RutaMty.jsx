import { useRutasStore } from "@/store/useRutasUbicacionesStore";

export default function RutaMty() {
  const setRutaHovered = useRutasStore((state) => state.setRutaHovered);
  const rutaHovered = useRutasStore((state) => state.rutaHovered);

  return (
    <svg
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 354 299"
      preserveAspectRatio="none"
      className="w-full h-full"
    >
      {/* Ruta 1 - st2 */}
      <g>
        <path
          strokeMiterlimit={10}
          fill="none"
          stroke="transparent"
          strokeWidth="20"
          strokeLinecap="round"
          className="cursor-pointer"
          pointerEvents="stroke"
          d="M66.9,282.22c.05.22.04.45-.03.67-.47,1.5-.95,3-1.42,4.5-.27.84-.82,1.99-1.41,3.82-.54,1.67-.86,3.07-1.05,3.99"
          onMouseEnter={() => setRutaHovered("salida_arteaga")}
          onMouseLeave={() => setRutaHovered(null)}
        />

        <path
          className={`fill-none stroke-[6px] transition-colors pointer-events-none ${
            rutaHovered === "salida_arteaga"
              ? "stroke-[#03619e]"
              : "stroke-amarillo"
          }`}
          strokeLinecap="round"
          d="M66.9,282.22c.05.22.04.45-.03.67-.47,1.5-.95,3-1.42,4.5-.27.84-.82,1.99-1.41,3.82-.54,1.67-.86,3.07-1.05,3.99"
        />
      </g>

      {/* Ruta 2 - st0 */}
      <g>
        <path
          strokeMiterlimit={10}
          fill="none"
          stroke="transparent"
          strokeWidth="20"
          strokeLinecap="round"
          className="cursor-pointer"
          pointerEvents="stroke"
          d="M19.88,73.69c-.23-.06-.43-.17-.51-.35-.2-.45-.14-1,.07-1.34.46-.77,1.7-1.06,2.31-.56.24.19.46.55.43.97-.07,1.03-1.67,1.55-3.9,2.67,0,0-.08-.09-3.83,2.23-2.82,1.75-5.56,3.75-7.74,6.27-1.56,1.81-2.8,3.92-3.35,6.27-.3,1.25-.34,2.31-.35,2.83l8.65,12.1c.2.28.33.6.37.94l4.58,32.66c0,.27-.03.52-.04.79l-6.33,26.26c-.18.75.06,1.53.62,2.05l44.23,40.65c.34.31.56.71.64,1.15l3.85,19.89c.05.15.1.31.15.45l3.73,8.38c.14.31.2.63.18.97-.16,3-.31,6.01-.46,9-.07,1.27,1.01,2.32,2.28,2.22l4.87-.39c.37-.06.83-.09.98.15.41.63-1.74,2.68-2.94,3.96-1.64,1.75-3.69,4.39-5.52,8.32-.12.26-.15.55-.09.84l4.15,19.16"
          onMouseEnter={() => setRutaHovered("matehuala-monterrey")}
          onMouseLeave={() => setRutaHovered(null)}
        />
        <path
          className={`fill-none stroke-[6px] transition-colors pointer-events-none ${
            rutaHovered === "matehuala-monterrey"
              ? "stroke-[#03619e]"
              : "stroke-amarillo"
          }`}
          strokeLinecap="round"
          strokeMiterlimit={10}
          d="M19.88,73.69c-.23-.06-.43-.17-.51-.35-.2-.45-.14-1,.07-1.34.46-.77,1.7-1.06,2.31-.56.24.19.46.55.43.97-.07,1.03-1.67,1.55-3.9,2.67,0,0-.08-.09-3.83,2.23-2.82,1.75-5.56,3.75-7.74,6.27-1.56,1.81-2.8,3.92-3.35,6.27-.3,1.25-.34,2.31-.35,2.83l8.65,12.1c.2.28.33.6.37.94l4.58,32.66c0,.27-.03.52-.04.79l-6.33,26.26c-.18.75.06,1.53.62,2.05l44.23,40.65c.34.31.56.71.64,1.15l3.85,19.89c.05.15.1.31.15.45l3.73,8.38c.14.31.2.63.18.97-.16,3-.31,6.01-.46,9-.07,1.27,1.01,2.32,2.28,2.22l4.87-.39c.37-.06.83-.09.98.15.41.63-1.74,2.68-2.94,3.96-1.64,1.75-3.69,4.39-5.52,8.32-.12.26-.15.55-.09.84l4.15,19.16"
        />
      </g>

      {/* Ruta 3 - st1 */}
      <g>
        <path
          strokeMiterlimit={10}
          fill="none"
          stroke="transparent"
          strokeWidth="20"
          strokeLinecap="round"
          className="cursor-pointer"
          pointerEvents="stroke"
          d="M351.01,22.97l-11.01,7.44c-.27.18-.57.3-.89.35l-13.81,1.92c-.1,0-.2,0-.3.02h-8.83c-.86,0-1.64.52-1.95,1.31l-2.32,5.69c-.45,1.12-1.76,1.63-2.86,1.11l-59.66-28.05c-.3-.07-.59-.14-.9-.2h-14.07c-.36,0-.73-.1-1.05-.29l-12.21-7.02c-.47-.27-1.03-.35-1.55-.22l-9.64,2.34c-.4.1-.82.08-1.21-.07l-11.66-4.19c-.53-.19-1.11-.16-1.62.08l-121.88,57.94c-.13.05-.26.09-.38.14l-31.3,7.99s-12.12,1.52-15.25,3.19c-.08.05-4.58,1.53-6.01,1.34-.16-.02-.48-.03-.77-.11"
          onMouseEnter={() => setRutaHovered("saltillo-monterrey")}
          onMouseLeave={() => setRutaHovered(null)}
        />
        <path
          className={`fill-none stroke-[6px] transition-colors pointer-events-none ${
            rutaHovered === "saltillo-monterrey"
              ? "stroke-[#03619e]"
              : "stroke-amarillo"
          }`}
          strokeLinecap="round"
          strokeMiterlimit={10}
          d="M351.01,22.97l-11.01,7.44c-.27.18-.57.3-.89.35l-13.81,1.92c-.1,0-.2,0-.3.02h-8.83c-.86,0-1.64.52-1.95,1.31l-2.32,5.69c-.45,1.12-1.76,1.63-2.86,1.11l-59.66-28.05c-.3-.07-.59-.14-.9-.2h-14.07c-.36,0-.73-.1-1.05-.29l-12.21-7.02c-.47-.27-1.03-.35-1.55-.22l-9.64,2.34c-.4.1-.82.08-1.21-.07l-11.66-4.19c-.53-.19-1.11-.16-1.62.08l-121.88,57.94c-.13.05-.26.09-.38.14l-31.3,7.99s-12.12,1.52-15.25,3.19c-.08.05-4.58,1.53-6.01,1.34-.16-.02-.48-.03-.77-.11"
        />
      </g>
    </svg>
  );
}

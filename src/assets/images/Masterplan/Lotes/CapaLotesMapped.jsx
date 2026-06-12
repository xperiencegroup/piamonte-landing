import { useState } from "react";
import { lotes } from "./lotes";

function clasificar(n) {
  if (n >= 1 && n <= 23) return "A";
  if (n >= 24 && n <= 50) return "B";
  if (n >= 51 && n <= 75) return "C";
  if (n >= 76 && n <= 78) return "B";
  return null;
}

export default function CapaLotesMapped({ className = "", handleSelectLote }) {
  const [hoveredId, setHoveredId] = useState(null);

  const datos = lotes.map((item) => ({
    ...item,
    clase: clasificar(item.id),
  }));

  const sortedLotes = datos.sort((a, b) => {
    if (a.id === hoveredId) return 1;
    if (b.id === hoveredId) return -1;
    return 0;
  });

  return (
    <svg
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="lotes">
        {sortedLotes.map((lote) => {
          return (
            <g
              key={lote.id}
              transform="translate(196,310) scale(1.258)"
              className="group hover:cursor-pointer"
              onClick={() => handleSelectLote(lote.id)}
              onMouseEnter={() => setHoveredId(lote.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {lote.paths.map((path, index) => {
                if (path.type === "shape") {
                  return (
                    <path
                      key={index}
                      id={index}
                      d={path.d}
                      strokeWidth="3"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      style={{ fillOpacity: 0.5 }}
                      className={`stroke-verde group-hover:stroke-cafe-claro active:fill-verde active:stroke-amarillo ${lote.clase === "A" && "fill-nude"} ${lote.clase === "B" && "fill-azul"} ${lote.clase === "C" && "fill-amarillo"}`}
                    />
                  );
                }

                if (path.type === "label") {
                  return (
                    <path
                      key={index}
                      id={index}
                      d={path.d}
                      className="fill-verde group-hover:fill-cafe-claro group-active:fill-amarillo pointer-events-none"
                    />
                  );
                }
              })}
            </g>
          );
        })}
      </g>

      {/* Cuadros con letras */}
      <g>
        <g id="clase-c" transform="translate(440,250) scale(1.258)">
          <rect
            strokeWidth="2"
            width="45"
            height="46"
            className="fill-amarillo stroke-verde"
          />
          <text
            x="22"
            y="25"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-[20px] font-bold fill-verde"
          >
            C
          </text>
        </g>

        <g id="clase-b" transform="translate(935,250) scale(1.258)">
          <rect
            strokeWidth="2"
            width="45"
            height="46"
            className="fill-azul stroke-verde"
          />
          <text
            x="22"
            y="25"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-[20px] font-bold fill-verde"
          >
            B
          </text>
        </g>

        <g id="clase-b" transform="translate(1285,250) scale(1.258)">
          <rect
            strokeWidth="2"
            width="45"
            height="46"
            className="fill-nude stroke-verde"
          />
          <text
            x="22"
            y="25"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-[20px] font-bold fill-verde"
          >
            A
          </text>
        </g>
      </g>
    </svg>
  );
}

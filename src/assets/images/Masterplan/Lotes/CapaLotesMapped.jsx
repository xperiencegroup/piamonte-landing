import { useState } from "react";
import { lotes } from "./lotes";

export default function CapaLotesMapped({ className = "", handleSelectLote }) {
  const [hoveredId, setHoveredId] = useState(null);

  const sortedLotes = [...lotes].sort((a, b) => {
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
                      id={index}
                      d={path.d}
                      strokeWidth="3"
                      strokeMiterlimit="10"
                      strokeLinejoin="round"
                      className="fill-nude stroke-verde group-hover:stroke-cafe-claro active:fill-verde active:stroke-amarillo"
                    />
                  );
                }

                if (path.type === "label") {
                  return (
                    <path
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
    </svg>
  );
}

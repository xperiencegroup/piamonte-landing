import { useContext } from "react";
import { useLocation, Link } from "react-router";
import { VideoPlayerContext } from "@/Video/context/VideoPlayerContext";
import { MODE } from "@/Video/const/Videos";
import ReturnIcon from "@/assets/icons/shared/returnIcon";

const AMENIDADES_MENU = [
  {
    to: "/masterplan",
    label: "Regresar",
    icon: "return",
  },
  {
    to: "/masterplan/amenidades/informacion",
    label: "Amenidades",
  },
  {
    to: "/masterplan/amenidades/video-tour?section=caseta",
    label: "Video Tour",
  },
  {
    to: "/masterplan/amenidades/foto-renders",
    label: "Foto Renders",
  },
  {
    to: "/masterplan/amenidades/recorridos-virtuales",
    label: "Recorridos virtuales 360°",
  },
];

const VIDEO_TOUR_MENU = [
  {
    to: "/masterplan/amenidades",
    label: "Regresar",
    icon: "return",
  },
  {
    to: "/masterplan/amenidades/video-tour",
    label: "Video Tour",
  },
];

export default function AmenidadesMenu() {
  const { mode } = useContext(VideoPlayerContext);
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path;

  const isVideoTourMenu = pathname.startsWith(
    "/masterplan/amenidades/video-tour",
  );
  return (
    <div className="shrink-0 flex flex-col w-full items-center pb-[clamp(31px,5.46875vw,70px)] px-[clamp(14px,2.5vw,32px)]">
      {isVideoTourMenu ? (
        <>
          {/* Video Tour */}
          <div className="flex justify-between items-end w-full max-w-[1216px]">
            {VIDEO_TOUR_MENU.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] ${
                  isActive(item.to)
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cafe dark:after:bg-amarillo pointer-events-none"
                    : ""
                }`}
              >
                {item.icon === "return" && (
                  <ReturnIcon className="w-[clamp(9px,1.523438vw,19.5px)] h-[clamp(7px,1.289063vw,16.5px)] text-gris dark:text-nude" />
                )}

                <span
                  className={`text-boton-normal uppercase ${isActive(item.to) ? "text-cafe dark:text-amarillo font-semibold" : "text-gris dark:text-nude"}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Amenidades */}
          <div className="flex justify-between items-end w-full max-w-[1216px]">
            {AMENIDADES_MENU.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] ${
                  isActive(item.to)
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cafe dark:after:bg-amarillo"
                    : ""
                }
                    ${mode === MODE.TRANSITIONING ? "pointer-events-none" : ""}
                    `}
              >
                {item.icon === "return" && (
                  <ReturnIcon className="w-[clamp(9px,1.523438vw,19.5px)] h-[clamp(7px,1.289063vw,16.5px)] text-gris dark:text-nude" />
                )}

                <span
                  className={`text-boton-normal uppercase ${isActive(item.to) ? "font-semibold text-cafe dark:text-amarillo" : "text-gris dark:text-nude"}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

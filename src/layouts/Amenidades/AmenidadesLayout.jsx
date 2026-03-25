import { Outlet } from "react-router";
import { Link } from "react-router";
import ReturnIcon from "@/assets/icons/shared/returnIcon";
import { useLocation } from "react-router";

const AMENIDADES_MENU = [
  {
    to: "/masterplan",
    label: "Regresar",
    icon: "return",
  },
  {
    to: "/masterplan/amenidades/informacion",
    label: "Información",
  },
  {
    to: "/masterplan/amenidades/video-tour",
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

export default function AmenidadesLayout() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="flex flex-col h-dvh w-full">
      <div className="flex flex-col grow">
        <Outlet />
      </div>

      {/* Amenidades Navigation */}
      <div className="shrink-0 pb-[clamp(31px,5.46875vw,70px)] w-full">
        <div className="flex justify-around items-end w-full">
          {AMENIDADES_MENU.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] ${
                isActive(item.to)
                  ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cafe dark:after:bg-amarillo"
                  : ""
              }`}
            >
              {item.icon === "return" && (
                <ReturnIcon className="w-[clamp(9px,1.523438vw,19.5px)] h-[clamp(7px,1.289063vw,16.5px)] text-gris dark:text-nude" />
              )}

              <span
                className={`text-boton-normal uppercase ${isActive(item.to) ? "text-cafe dark:text-amarillo" : "text-gris dark:text-nude"}`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

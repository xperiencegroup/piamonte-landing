import IsotipoUbicacion from "@/assets/icons/main/IsotipoUbicacion";
import { useSearchParams } from "react-router";

const SUBMENU_BUTTON = [
  {
    id: "como-llegar",
    label: "Como llegar",
  },
  {
    id: "accesos",
    label: "Accesos",
  },
  {
    id: "actividades",
    label: "Actividades",
  },
];

export default function NavigationBarUbicacion() {
  const [params, setSearchParams] = useSearchParams();

  const activeParam = params.get("filter");
  const isActive = (path) => activeParam === path;
  return (
    <div className="shrink-0 self-center fixed bottom-[clamp(31px,5.46875vw,70px)] z-10 flex w-full max-w-[1216px] h-fit justify-between items-center px-[clamp(14px,2.5vw,32px)]">
      {/* BOTÓN VER TU RUTA */}
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=25.329830034039414,-100.797046592947"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center w-[clamp(72.05px,12.421875vw,159px)] h-[clamp(24.02px,4.140625vw,53px)] gap-[clamp(4.53px,0.78125vw,10px)] bg-verde dark:bg-amarillo hover:cursor-pointer"
      >
        <IsotipoUbicacion className="w-[clamp(9.06px,1.5625vw,20px)] h-[clamp(12.23px,2.109375vw,27px)]" />
        <p className="text-boton-normal uppercase text-nude dark:text-gris">
          Ver tu ruta
        </p>
      </a>

      {SUBMENU_BUTTON.map((item) => {
        return (
          <button
            key={item.id}
            onClick={() => {
              if (item.id === "como-llegar") {
                setSearchParams({ filter: item.id, origen: "monterrey" });
                return;
              }

              setSearchParams({ filter: item.id });
            }}
            className={`relative flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] hover:cursor-pointer ${
              isActive(item.id)
                ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-px md:after:h-0.5 after:bg-cafe dark:after:bg-amarillo"
                : ""
            }`}
          >
            <span
              className={`text-boton-normal uppercase ${isActive(item.id) ? "text-cafe dark:text-amarillo font-semibold" : "text-gris dark:text-nude"}`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

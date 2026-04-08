import { useSearchParams } from "react-router";
import GoogleMap from "@/components/ui/shared/map/GoogleMap";

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

export default function Ubicacion() {
  const [params, setSearchParams] = useSearchParams();

  const isActive = (path) => params.get("filter") === path;
  return (
    <main className="flex flex-col w-full h-dvh">
      {/* MAP */}
      <div className="fixed z-0 w-full h-dvh">
        <GoogleMap />
      </div>

      <div className="shrink-0 self-center fixed bottom-[clamp(31px,5.46875vw,70px)] z-10 flex w-full max-w-[1216px] h-fit justify-between px-[clamp(14px,2.5vw,32px)]">
        {SUBMENU_BUTTON.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => setSearchParams({ filter: item.id })}
              className={`relative flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] hover:cursor-pointer ${
                isActive(item.id)
                  ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-px md:after:h-0.5 after:bg-cafe dark:after:bg-amarillo"
                  : ""
              }`}
            >
              {item.icon === "return" && (
                <ReturnIcon className="w-[clamp(9px,1.523438vw,19.5px)] h-[clamp(7px,1.289063vw,16.5px)] text-gris dark:text-nude" />
              )}

              <span
                className={`text-boton-normal uppercase ${isActive(item.id) ? "text-cafe dark:text-amarillo font-semibold" : "text-gris dark:text-nude"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </main>
  );
}

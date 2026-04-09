import { Link, useLocation } from "react-router";
import { Outlet } from "react-router";
import HandIcon from "@/assets/icons/home/lotes/handIcon";

const LOTE_MENU = [
  {
    to: "vista-360",
    label: "Vista 360°",
  },
  {
    to: "informacion",
    label: "Información",
  },
  {
    to: "/contacto",
    label: "Me interesa",
    icon: HandIcon,
  },
];

export default function LoteLayout() {
  const { pathname } = useLocation();

  const isActive = (slug) => pathname.includes(slug);

  return (
    <div className="flex flex-col h-dvh w-full">
      {/* Fake navbar */}
      <div className="bg-amarillo shrink-0 h-[clamp(38px,6vw,75px)]" />
      <div className="flex flex-col grow min-h-0 bg-cyan-500">
        <Outlet />
      </div>

      {/* Navigation */}
      <div className="shrink-0 flex flex-col w-full items-center pb-[clamp(31px,5.46875vw,70px)] px-[clamp(14px,2.5vw,32px)]">
        <>
          {/* Video Tour */}
          <div className="flex justify-between items-end w-full max-w-[clamp(140px,72.65vw,558px)] lg:max-w-[1216px]">
            {LOTE_MENU.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] ${
                    isActive(item.to)
                      ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cafe dark:after:bg-amarillo"
                      : ""
                  }`}
                >
                  {/* ICON */}
                  {Icon && (
                    <div className="flex justify-center items-center size-[clamp(11px,1.875vw,24px)]">
                      <Icon className="w-[clamp(8px,1.40625vw,18px)] h-[clamp(9px,1.640625vw,21px)] text-gris dark:text-nude" />
                    </div>
                  )}

                  {/* TEXT */}
                  <span
                    className={`text-boton-normal uppercase whitespace-nowrap ${isActive(item.to) ? "text-cafe dark:text-amarillo font-semibold" : "text-gris dark:text-nude"}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </>
      </div>
    </div>
  );
}

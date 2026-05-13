import { useRutasStore } from "@/store/useRutasUbicacionesStore";
import { useSearchParams } from "react-router";
import useMediaQuery from "@/hooks/useMediaQuery";
import GoogleMap from "@/components/ui/shared/map/GoogleMap";
import Actividades from "@/sections/Ubicacion/Actividades/Actividades";
import InterfazComoLlegar from "@/sections/Ubicacion/ComoLlegar/InterfazComoLlegar.jsx";
import NavigationBarUbicacion from "@/sections/Ubicacion/NavigationBarUbicacion";

export default function Ubicacion() {
  const [params] = useSearchParams();
  const showDirections = useRutasStore((state) => state.showDirections);
  const isSmall = useMediaQuery("(max-width: 844px)");

  const showNavigation = !showDirections || !isSmall;

  const activeParam = params.get("filter");

  return (
    <main className="flex flex-col w-full h-dvh">
      {/* MAP */}
      <div className="fixed z-0 w-full h-dvh">
        <GoogleMap />
      </div>

      {/* Botones "VER TU RUTA", "COMO LLEGAR", "ACCESOS", "ACTIVIDADES" */}
      {showNavigation && <NavigationBarUbicacion />}

      {/* BOTÓN "DESDE MONTERREY" Y "DESDE SALTILLO"  */}
      {activeParam === "como-llegar" && <InterfazComoLlegar />}
      {activeParam === "actividades" && <Actividades />}
    </main>
  );
}

import { useEffect } from "react";
import { useOutletContext } from "react-router";
import KuulaComponent from "@/components/ui/shared/kuula/KuulaComponent";
import AmenidadesPins from "@/layouts/Amenidades/AmenidadesPins";
import useDarkMode from "@/hooks/useDarkMode";
import { useAmenidadesStore } from "@/store/useAmenidadesStore";

const KUULA_NIGHT_ID = "7Mwbm";
const KUULA_DAY_ID = "7M6Wh";

export default function AmenidadesRecorridos() {
  const { setForceHideNavbar } = useOutletContext();

  const selectedScene = useAmenidadesStore((state) => state.selectedScene);
  const isDark = useDarkMode();

  const collectionId = isDark ? KUULA_NIGHT_ID : KUULA_DAY_ID;

  const src = selectedScene
    ? `https://kuula.co/share/${selectedScene}/collection/${collectionId}?logo=-1&info=0&fs=0&vr=0&zoom=1&initload=1&thumbs=-1&margin=30&alpha=0.81&inst=0&keys=0`
    : null;

  useEffect(() => {
    setForceHideNavbar(!!selectedScene);

    return () => setForceHideNavbar(false);
  }, [selectedScene]);

  return (
    <>
      {/* Background */}
      <div className="absolute -z-10 inset-0 w-full h-full">
        {/* Overlay */}
        <div className="linear-gradient-shadow" />
      </div>

      {selectedScene ? (
        <>
          <div className="absolute inset-0 z-0 w-full h-full">
            <div className="flex relative w-full h-full">
              <div className="relative w-full h-full">
                {/* Overlay */}
                <div className="absolute inset-0 z-10 w-full h-full linear-gradient-normal pointer-events-none opacity-80" />

                <KuulaComponent src={src} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Pines */}
          <AmenidadesPins />
        </>
      )}
    </>
  );
}

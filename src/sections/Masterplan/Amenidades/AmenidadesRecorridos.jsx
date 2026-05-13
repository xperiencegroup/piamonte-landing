import { useEffect } from "react";
import { useLocation, useOutletContext } from "react-router";
import KuulaComponent from "@/components/ui/shared/kuula/KuulaComponent";
import AmenidadesPins from "@/layouts/Amenidades/AmenidadesPins";
import useDarkMode from "@/hooks/useDarkMode";
import { useAmenidadesStore } from "@/store/useAmenidadesStore";
import X from "@/assets/icons/shared/X";

const KUULA_NIGHT_ID = "7Mwbm";
const KUULA_DAY_ID = "7M6Wh";

export default function AmenidadesRecorridos() {
  const { setForceHideNavbar } = useOutletContext();

  const selectedScene = useAmenidadesStore((state) => state.selectedScene);
  const clearSelectedScene = useAmenidadesStore(
    (state) => state.clearSelectedScene,
  );
  const isDark = useDarkMode();

  const collectionId = isDark ? KUULA_NIGHT_ID : KUULA_DAY_ID;

  const src = selectedScene
    ? `https://kuula.co/share/${selectedScene}/collection/${collectionId}?logo=-1&info=0&fs=0&vr=0&zoom=1&initload=1&thumbs=-1&margin=30&alpha=0.81&inst=0&keys=0`
    : null;

  useEffect(() => {
    setForceHideNavbar(!!selectedScene);

    return () => setForceHideNavbar(false);
  }, [selectedScene]);

  useEffect(() => {
    return () => {
      clearSelectedScene();
    };
  }, []);

  return (
    <>
      {/* Background */}
      <div className="absolute -z-10 inset-0 w-full h-full">
        {/* Overlay */}
        <div className="linear-gradient-bottom-amenidades inset-0" />
      </div>

      {selectedScene ? (
        <>
          <div className="absolute inset-0 z-0 w-full h-full">
            <div className="flex relative w-full h-full">
              <div className="relative w-full h-full">
                {/* Overlay */}
                <div className="absolute inset-0 z-10 w-full h-full linear-gradient-bottom-amenidades pointer-events-none opacity-80" />

                <button
                  onClick={clearSelectedScene}
                  className="absolute top-0 right-0 z-30 flex justify-center items-center size-[clamp(23.56px,4.0625vw,52px)] bg-verde dark:bg-nude pointer-events-auto hover:cursor-pointer"
                >
                  <X className="size-[clamp(14.73px,2.5390625vw,32.5px)] text-white dark:text-verde" />
                </button>

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

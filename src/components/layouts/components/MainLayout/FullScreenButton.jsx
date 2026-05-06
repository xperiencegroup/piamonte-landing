import { useState, useEffect } from "react";
import OpenFullScreen from "@/assets/icons/fullscreen/OpenFullScreen";
import CloseFullScreen from "@/assets/icons/fullscreen/CloseFullScreen";

export default function FullScreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
    };
  }, []);

  return (
    <div className="fixed bottom-0 z-10 flex self-start w-fit h-[clamp(31px,5.46875vw,70px)] justify-center items-center landscape:pl-[clamp(13px,2.34375vw,30px)]">
      <button
        onClick={handleFullscreen}
        className="flex size-[clamp(19px,3.28125vw,42px)] justify-center items-center bg-cafe dark:bg-nude rounded-full hover:cursor-pointer"
      >
        {isFullscreen ? (
          <CloseFullScreen className="size-[clamp(8.02px,1.3828125vw,17.7px)] text-nude dark:text-gris" />
        ) : (
          <OpenFullScreen className="size-[clamp(8.02px,1.3828125vw,17.7px)] text-nude dark:text-gris" />
        )}
      </button>
    </div>
  );
}

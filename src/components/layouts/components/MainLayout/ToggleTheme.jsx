import { useTheme } from "@/hooks/useTheme";
import sunIcon from "@/assets/icons/theme/sunIcon.svg";
import moonIcon from "@/assets/icons/theme/moonIcon.svg";
import PlayButton from "@/assets/icons/video/PlayButton";
import { MODE } from "@/Video/const/Videos";
import { useContext } from "react";
import { VideoPlayerContext } from "@/Video/context/VideoPlayerContext";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  const { mode } = useContext(VideoPlayerContext);

  return (
    <div className="fixed bottom-0 z-10 flex self-center w-fit h-[clamp(31px,5.46875vw,70px)] justify-center items-center">
      <div className="w-[clamp(40px,7.109375vw,91px)] h-fit flex justify-center gap-[clamp(3px,0.546875vw,7px)] bg-cafe dark:bg-nude rounded-full">
        <div className="size-[clamp(19px,3.28125vw,42px)] flex justify-center items-center">
          <button
            onClick={toggleTheme}
            disabled={mode === MODE.TRANSITIONING}
            className={`size-[clamp(11px,2.007813vw,25.7px)] flex justify-center items-center ${mode === MODE.TRANSITIONING ? "" : "hover:cursor-pointer"}`}
          >
            <img
              src={theme === "light" ? sunIcon : moonIcon}
              alt={theme === "light" ? "Sun Icon" : "Moon Icon"}
              className="size-[clamp(9px,1.630469vw,20.87px)]"
            />
          </button>
        </div>
        <div className="size-[clamp(19px,3.28125vw,42px)] flex justify-center items-center">
          <button className="size-[clamp(11px,2.007813vw,25.7px)] flex justify-center items-center hover:cursor-pointer">
            <PlayButton className="size-[clamp(9px,1.630469vw,20.87px)] text-nude dark:text-gris" />
          </button>
        </div>
      </div>
    </div>
  );
}

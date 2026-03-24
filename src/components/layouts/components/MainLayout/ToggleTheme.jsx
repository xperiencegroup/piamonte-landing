import { useTheme } from "@/hooks/useTheme";
import sunIcon from "@/assets/icons/theme/SunIcon.svg";
import moonIcon from "@/assets/icons/theme/MoonIcon.svg";
import PlayButton from "@/assets/icons/video/playButton";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="fixed z-10 w-[clamp(65px,7.109375vw,91px)] flex bottom-10 self-center justify-center gap-[clamp(5px,0.546875vw,7px)] bg-cafe dark:bg-nude rounded-full">
      <div className="size-[clamp(30px,3.28125vw,42px)] flex justify-center items-center">
        <button
          onClick={toggleTheme}
          className="size-[clamp(18px,2.007813vw,25.7px)] flex justify-center items-center hover:cursor-pointer"
        >
          <img
            src={theme === "light" ? sunIcon : moonIcon}
            alt={theme === "light" ? "Sun Icon" : "Moon Icon"}
            className="size-[clamp(15px,1.630469vw,20.87px)]"
          />
        </button>
      </div>
      <div className="size-[clamp(30px,3.28125vw,42px)] flex justify-center items-center">
        <button className="size-[clamp(18px,2.007813vw,25.7px)] flex justify-center items-center hover:cursor-pointer">
          <PlayButton className="size-[clamp(15px,1.630469vw,20.87px)] text-nude dark:text-gris" />
        </button>
      </div>
    </div>
  );
}

import { Link } from "react-router";
import ClickIcon from "@/assets/icons/home/clickIcon";
import { useContext } from "react";
import { VideoPlayerContext } from "@/Video/context/VideoPlayerContext";
import { MODE } from "@/Video/const/Videos";

export default function VerProyectos() {
  const { mode } = useContext(VideoPlayerContext);

  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <Link
        to="masterplan"
        aria-disabled={mode === MODE.TRANSITIONING}
        tabIndex={mode === MODE.TRANSITIONING ? -1 : 0}
        className={`flex justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] bg-verde ${mode === MODE.TRANSITIONING ? "pointer-events-none" : ""}`}
      >
        <ClickIcon className="w-[clamp(7px,1.25vw,16px)] h-[clamp(9px,1.640625vw,21px)] text-nude" />
        <span className="text-boton-grande text-nude uppercase">
          Ver Proyecto
        </span>
      </Link>
    </div>
  );
}

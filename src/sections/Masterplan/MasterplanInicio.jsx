import { VideoPlayerContext } from "@/Video/context/VideoPlayerContext";
import { useContext } from "react";
import { Link } from "react-router";
import { MODE } from "@/Video/const/Videos";

export default function MasterplanInicio() {
  const { mode } = useContext(VideoPlayerContext);

  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 w-full h-dvh">
        {/* Overlay */}
        <div className="linear-gradient-shadow" />
      </div>

      <div className="fixed bottom-[clamp(50px,8vw,102px)] flex w-full">
        <div className="flex justify-center items-end w-full gap-[clamp(11px,1.875vw,24px)]">
          <Link
            to="/masterplan/amenidades"
            aria-disabled={mode === MODE.TRANSITIONING}
            tabIndex={mode === MODE.TRANSITIONING ? -1 : 0}
            className={`flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] border-b-[0.5px] md:border-b-2 border-gris dark:border-nude ${mode === MODE.TRANSITIONING ? "pointer-events-none" : ""}`}
          >
            <span className="text-boton-grande text-gris dark:text-nude font-bold uppercase">
              Amenidades
            </span>
          </Link>

          <Link
            to="/masterplan/lotes"
            aria-disabled={mode === MODE.TRANSITIONING}
            tabIndex={mode === MODE.TRANSITIONING ? -1 : 0}
            className={`flex w-fit justify-center items-center gap-[clamp(4px,0.78125vw,10px)] p-[clamp(7px,1.25vw,16px)] border-b-[0.5px] md:border-b-2 border-gris dark:border-nude ${mode === MODE.TRANSITIONING ? "pointer-events-none" : ""}`}
          >
            <span className="text-boton-grande text-gris dark:text-nude font-bold uppercase">
              Lotes
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

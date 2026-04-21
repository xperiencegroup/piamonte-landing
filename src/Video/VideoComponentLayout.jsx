import { useEffect } from "react";
import { useContext } from "react";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import { useVideoPlayer } from "./hooks/useVideoPlayer";
import portadas from "./data/portadas.json";
import { PLAYER, MODE } from "./const/Videos";
import { VideoPlayerContext } from "./context/VideoPlayerContext";
import piamonteXperienceVideos from "@/data/videos/piamonte_xperience.json";

const VIDEOS_MAP = {
  // PORTADAS
  "/masterplan/amenidades/video-tour": portadas.home,
  "/nosotros": portadas.home,
  "/contacto": portadas.home,

  // SECUENCIA DE / <-> /masterplan <-> /amenidades
  "/": piamonteXperienceVideos,
  "/masterplan": piamonteXperienceVideos,
  "/masterplan/amenidades": piamonteXperienceVideos,
  "/masterplan/lotes": piamonteXperienceVideos,
};
const EMPTY_JSON = {
  videos: [{ type: "idle", position: 1, src: "" }],
  navigation: "unidirectional",
  loop: false,
};

export default function VideoComponentLayout() {
  const { setIdle, setTransitioning } = useContext(VideoPlayerContext);
  const { pathname } = useLocation();

  const videosRunning = VIDEOS_MAP[pathname];
  const hasVideo = videosRunning ? true : false;

  const { videoRefA, videoRefB, loadPortada, goTo, activePlayer, modeState } =
    useVideoPlayer({
      json: videosRunning ?? EMPTY_JSON,
    });

  // Portada: Manejo de portadas o limpiar componentes al cambiar de ruta sin video
  useEffect(() => {
    const cleanVideo = (video) => {
      if (!video) return;
      video.pause();
      video.removeAttribute("src");
      video.load();
    };

    if (!hasVideo) {
      cleanVideo(videoRefA.current);
      cleanVideo(videoRefB.current);

      setIdle();
      return;
    }

    if (videosRunning.type === "portada") {
      loadPortada(videosRunning);
      return;
    }
  }, [videosRunning]);

  // Manejar video de amenidades y lotes con variable global
  useEffect(() => {
    if (pathname === "/") {
      goTo(1);
    } else if (pathname === "/masterplan") {
      goTo(2);
    } else if (pathname === "/masterplan/amenidades") {
      goTo(3);
    } else if (pathname === "/masterplan/lotes") {
      goTo(2);
    }
  }, [pathname]);

  useEffect(() => {
    if (modeState === MODE.IDLE) return setIdle();
    if (modeState === MODE.TRANSITIONING) return setTransitioning();
  }, [modeState]);

  return (
    <>
      <video
        ref={videoRefA}
        muted
        playsInline
        className={`fixed w-full max-w-full h-dvh object-cover top-0 left-0 ${
          activePlayer === PLAYER.A ? "z-10" : "z-0"
        }`}
      ></video>

      <video
        ref={videoRefB}
        muted
        playsInline
        className={`fixed w-full max-w-full h-dvh object-cover top-0 left-0 ${
          activePlayer === PLAYER.B ? "z-10" : "z-0"
        }`}
      ></video>

      <div className="relative z-20">
        <Outlet />
      </div>
    </>
  );
}

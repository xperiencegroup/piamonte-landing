import { useEffect } from "react";
import { useContext } from "react";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import { useVideoPlayer } from "./hooks/useVideoPlayer";
import portadas from "./data/portadas.json";
import { PLAYER, MODE } from "./const/Videos";
import { VideoPlayerContext } from "./context/VideoPlayerContext";
import piamonteXperienceVideosDia from "@/data/videos/piamonte_xperience_dia.json";
import piamonteXperienceVideosNoche from "@/data/videos/piamonte_xperience_noche.json";
import useDarkMode from "@/hooks/useDarkMode";

// PORTADAS
const VIDEOS_MAP = {
  "/masterplan/amenidades/video-tour": portadas.home,
  "/nosotros": portadas.home,
  "/contacto": portadas.home,
};
const EMPTY_JSON = {
  videos: [{ type: "idle", position: 1, src: "" }],
  navigation: "unidirectional",
  loop: false,
};

const VIDEO_THEMES = {
  light: piamonteXperienceVideosDia,
  dark: piamonteXperienceVideosNoche,
};
const ROUTES_WITH_SEQUENCE = [
  "/",
  "/masterplan",
  "/masterplan/amenidades",
  "/masterplan/lotes",
  "/masterplan/amenidades/foto-renders",
  "/masterplan/amenidades/recorridos-virtuales",
  "/masterplan/amenidades/informacion",
];

export default function VideoComponentLayout() {
  const { setIdle, setTransitioning } = useContext(VideoPlayerContext);
  const { pathname } = useLocation();
  const isDark = useDarkMode();

  const isSequenceRoute = ROUTES_WITH_SEQUENCE.includes(pathname);

  const videosRunning = isSequenceRoute
    ? VIDEO_THEMES[isDark ? "dark" : "light"]
    : VIDEOS_MAP[pathname];

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
    } else if (pathname.startsWith("/masterplan/amenidades")) {
      goTo(3);
    } else if (pathname === "/masterplan/lotes") {
      goTo(2);
    }
  }, [pathname, isDark]);

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

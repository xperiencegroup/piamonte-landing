import { useEffect, useContext } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router";
import { useVideoPlayer } from "./hooks/useVideoPlayer";
import useDarkMode from "@/hooks/useDarkMode";
import portadas from "./data/portadas.json";
import { PLAYER, MODE } from "./const/Videos";
import { VideoPlayerContext } from "./context/VideoPlayerContext";
import piamonteXperienceVideosDia from "@/data/videos/piamonte_xperience_dia.json";
import piamonteXperienceVideosNoche from "@/data/videos/piamonte_xperience_noche.json";
import vti_amenidades_dia from "@/data/videos/vti_amenidades/amenidades_dia.json";
import vti_amenidades_noche from "@/data/videos/vti_amenidades/amenidades_noche.json";

// PORTADAS
const VIDEOS_MAP = {
  "/nosotros": portadas.home,
  "/contacto": portadas.home,
};
const EMPTY_JSON = {
  videos: [{ type: "idle", position: 1, src: "" }],
  navigation: "unidirectional",
  loop: false,
};

// Videos en cambio de rutas ("/", "masterplan", "/lotes", "/masterplan/amenidades")
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

// VTI Amenidades
const VTI_THEMES = {
  light: vti_amenidades_dia,
  dark: vti_amenidades_noche,
};
const SECTION_TO_POSITION = {
  caseta: 1,
  "casa-club": 2,
  bar: 3,
  terraza: 4,
  "salon-social": 5,
  sala: 6,
  lago: 7,
  "zona-yoga": 8,
  alberca: 9,
  "juegos-infantiles": 10,
  "pet-park": 11,
  gimnasio: 12,
  padel: 13,
  basket: 14,
  fogateros: 15,
  huerto: 16,
};
const POSITION_TO_SECTION = Object.fromEntries(
  Object.entries(SECTION_TO_POSITION).map(([key, value]) => [value, key]),
);

export default function VideoComponentLayout() {
  const isDark = useDarkMode();
  const { setIdle, setTransitioning } = useContext(VideoPlayerContext);
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const section = searchParams.get("section");

  const isSequenceRoute = ROUTES_WITH_SEQUENCE.includes(pathname);
  const isAmenidadesVideoTour =
    pathname === "/masterplan/amenidades/video-tour";

  const videosRunning = isSequenceRoute
    ? VIDEO_THEMES[isDark ? "dark" : "light"]
    : isAmenidadesVideoTour
      ? VTI_THEMES[isDark ? "dark" : "light"]
      : VIDEOS_MAP[pathname];

  const hasVideo = videosRunning ? true : false;

  const { videoRefA, videoRefB, loadPortada, goTo, activePlayer, modeState } =
    useVideoPlayer({
      json: videosRunning ?? EMPTY_JSON,
      onPositionChange: (pos) => {
        if (pathname.includes("/masterplan/amenidades/video-tour")) {
          setSearchParams({ section: POSITION_TO_SECTION[pos] });
          return;
        }
      },
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

  // Manejar videos en cambio de rutas ("/", "masterplan", "/lotes", "/masterplan/amenidades")
  useEffect(() => {
    if (pathname === "/") {
      goTo(1);
    } else if (pathname === "/masterplan") {
      goTo(2);
    } else if (
      pathname.startsWith("/masterplan/amenidades") &&
      !pathname.includes("video-tour")
    ) {
      goTo(3);
    } else if (pathname === "/masterplan/lotes") {
      goTo(2);
    }
  }, [pathname, isDark]);

  // Video Tour de Amenidades en masterplan
  useEffect(() => {
    if (!section) return;
    const mappedPosition = SECTION_TO_POSITION[section];
    if (!mappedPosition) return;
    goTo(mappedPosition);
  }, [section, isDark]);

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
        className={`fixed w-full max-w-full h-full object-cover top-0 left-0 ${
          activePlayer === PLAYER.A ? "z-10" : "z-0"
        }`}
      ></video>

      <video
        ref={videoRefB}
        muted
        playsInline
        className={`fixed w-full max-w-full h-full object-cover top-0 left-0 ${
          activePlayer === PLAYER.B ? "z-10" : "z-0"
        }`}
      ></video>

      <div className="relative z-20">
        <Outlet />
      </div>
    </>
  );
}

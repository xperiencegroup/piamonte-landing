import { useRef, useState } from "react";
import { MODE, PLAYER } from "../const/Videos";

export const useVideoPlayer = ({ json, onPositionChange }) => {
  const { videos, navigation, loop } = json;
  const isPortada = json?.type === "portada";

  const videoRefA = useRef(null);
  const videoRefB = useRef(null);

  const currentPositionRef = useRef(null);
  const targetPositionRef = useRef(null);
  const mode = useRef(MODE.IDLE);

  // Para decidir cual componenete <video/> mostrar, con ref no se actualiza
  const [activePlayer, setActivePlayer] = useState(PLAYER.A);
  const toggleActivePlayer = () => {
    setActivePlayer((prev) => (prev === PLAYER.A ? PLAYER.B : PLAYER.A));
  };

  // Variables para renderizar en UI
  const [modeState, setModeState] = useState(MODE.IDLE);

  const activeRef = activePlayer === PLAYER.A ? videoRefA : videoRefB;
  const stagingRef = activePlayer === PLAYER.A ? videoRefB : videoRefA;

  // Para detectar cuando es el ultimo idle y hacer loop a posición 1
  const idleVideos = videos?.filter((v) => v.type === "idle") ?? [];
  const lastPosition = idleVideos[idleVideos.length - 1]?.position ?? null;

  const clearListeners = () => {
    videoRefA.current.onended = null;
    videoRefB.current.onended = null;
    videoRefA.current.oncanplay = null;
    videoRefB.current.oncanplay = null;
    videoRefA.current.loop = false;
    videoRefB.current.loop = false;
  };

  // Función que recibe posición actual y decirle la direción
  const transitionTo = ({ position, direction }) => {
    if (direction !== "next" && direction !== "back") {
      throw new Error("Invalid direction");
    }

    const targetVideo = videos.find((video) => video.position === position);
    const currentIndex = videos.findIndex(
      (video) => video.position === currentPositionRef.current,
    );

    // Obtener transición
    const transitionSource =
      direction === "next"
        ? videos[currentIndex + 1].next
        : videos[currentIndex - 1].back;

    // Se asigna transición al componente que no esté visible
    stagingRef.current.src = transitionSource;
    stagingRef.current.load();

    targetPositionRef.current = position;
    mode.current = MODE.TRANSITIONING;
    setModeState(MODE.TRANSITIONING);

    // Esperar a que sea reproducible
    stagingRef.current.oncanplay = () => {
      stagingRef.current.oncanplay = null; // limpiar listener

      stagingRef.current.play();

      // Esperar a que el PRIMER FRAME esté pintado antes de mostrar
      stagingRef.current.requestVideoFrameCallback(() => {
        // Primer frame listo? -> cambiar pantalla
        requestAnimationFrame(() => {
          toggleActivePlayer();
        });

        // Cargar el idle final al componente donde estaba el idle anterior
        activeRef.current.src = targetVideo.src;
        activeRef.current.load();

        // Cuando termine la transición sigue...
        stagingRef.current.onended = () => {
          stagingRef.current.onended = null; // limpiar listener
          targetPositionRef.current = null;
          currentPositionRef.current = position;
          mode.current = MODE.IDLE;
          setModeState(MODE.IDLE);

          if (activeRef.current.readyState >= 3) {
            activeRef.current.play();
            stagingRef.current.src = null; // limpar componente donde estaba la transición
            toggleActivePlayer();
          } else {
            activeRef.current.oncanplay = () => {
              activeRef.current.oncanplay = null;
              activeRef.current.play();
              stagingRef.current.src = null; // limpar componente donde estaba la transición
              toggleActivePlayer();
            };
          }
        };
      });
    };

    // Notificar posición actual
    onPositionChange?.(position);

    // Al terminar el idle, ir al siguiente automáticamente
    activeRef.current.onended = () => {
      activeRef.current.onended = null;
      if (json.autoplay) {
        const nextPosition =
          position === lastPosition ? idleVideos[0].position : position + 1;
        onPositionChange?.(nextPosition);
      }
    };
  };

  const loadDirect = (position) => {
    clearListeners();

    mode.current = MODE.IDLE;
    setModeState(MODE.IDLE);

    const targetVideo = videos.find((video) => video.position === position);

    stagingRef.current.src = targetVideo.src;
    stagingRef.current.load();

    stagingRef.current.oncanplay = () => {
      stagingRef.current.oncanplay = null;

      stagingRef.current.play();

      const showIdle = () => {
        toggleActivePlayer();
        currentPositionRef.current = position;
        targetPositionRef.current = null;
        activeRef.current.src = null;

        // Autoplay: al terminar el idle ir al siguiente
        stagingRef.current.onended = () => {
          stagingRef.current.onended = null;
          if (json.autoplay) {
            const nextPosition =
              position === lastPosition ? idleVideos[0].position : position + 1;
            onPositionChange?.(nextPosition);
          }
        };
      };

      if ("requestVideoFrameCallback" in stagingRef.current) {
        stagingRef.current.requestVideoFrameCallback(() => {
          requestAnimationFrame(showIdle);
        });
      } else {
        requestAnimationFrame(showIdle);
      }
    };
  };

  const goTo = (position) => {
    if (isPortada) return;
    // Al momento de transición, cargar de manera directa
    if (modeState === MODE.TRANSITIONING) {
      loadDirect(position);
      return;
    }

    const diff = position - currentPositionRef.current; // 1 next, -1 back
    const isLastPosition = currentPositionRef.current === lastPosition;
    const isLoopForward =
      loop && isLastPosition && position === idleVideos[0].position;

    // Cuando hay refresh o primera vez cargando
    if (
      !currentPositionRef.current ||
      currentPositionRef.current === position
    ) {
      return loadDirect(position);
    }

    // Transición a siguiente
    if (diff === 1 || isLoopForward) {
      transitionTo({ position, direction: "next" });
    }

    // Transición a anterior
    if (diff === -1) {
      if (navigation === "unidirectional") return loadDirect(position);
      transitionTo({ position, direction: "back" });
    }

    // Cuando las posiciones no son consecutivas
    if ((diff > 1 || diff < -1) && !isLoopForward) {
      return loadDirect(position);
    }
  };

  const loadPortada = (video) => {
    clearListeners();

    const targetVideoSrc = video.src;
    mode.current = MODE.IDLE;
    setModeState(MODE.IDLE);

    // Cargar video Portada a componente oculto
    stagingRef.current.src = targetVideoSrc;
    stagingRef.current.loop = video.loop;
    stagingRef.current.load();

    // Una vez cargado, hacer transición
    stagingRef.current.oncanplay = () => {
      stagingRef.current.oncanplay = null;
      stagingRef.current.play();

      stagingRef.current.requestVideoFrameCallback(() => {
        requestAnimationFrame(() => {
          toggleActivePlayer();
          activeRef.current.src = null;
          activeRef.current.loop = false;
        });
      });

      currentPositionRef.current = null;
      targetPositionRef.current = null;
    };
  };

  return {
    videoRefA,
    videoRefB,
    goTo,
    loadPortada,
    activePlayer,
    modeState,
  };
};

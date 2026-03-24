import { useState, useCallback } from "react";
import { VideoPlayerContext } from "./VideoPlayerContext";
import { MODE } from "../const/Videos";

export function VideoPlayerProvider({ children }) {
  const [mode, setMode] = useState(MODE.IDLE);

  const setTransitioning = useCallback(() => setMode(MODE.TRANSITIONING), []);
  const setIdle = useCallback(() => setMode(MODE.IDLE), []);

  return (
    <VideoPlayerContext.Provider value={{ mode, setIdle, setTransitioning }}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

import { useEffect } from "react";
import { useState } from "react";

export default function useResponsiveScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;

      if (width >= 1280) setScale(1);
      else if (width >= 1024) setScale(0.75);
      else if (width >= 800) setScale(0.6);
      else if (width >= 568) setScale(0.45);
      else setScale(0.4);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return scale;
}

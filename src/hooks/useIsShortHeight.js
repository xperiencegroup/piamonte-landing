import { useEffect, useState } from "react";

export default function useIsShortHeight() {
  const [isShort, setIsShort] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerHeight < 700;
  });

  useEffect(() => {
    const check = () => {
      setIsShort(window.innerHeight < 700);
    };

    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);

    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  return isShort;
}

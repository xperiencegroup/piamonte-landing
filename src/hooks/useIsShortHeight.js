import { useEffect } from "react";
import { useState } from "react";

export default function useIsShortHeight() {
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsShort(window.innerHeight < 700);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isShort;
}

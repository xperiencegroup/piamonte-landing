import { useEffect, useState } from "react";

export default function useIsPortrait() {
  const getIsPortrait = () => {
    if (typeof window === "undefined") return false;
    return window.innerHeight > window.innerWidth;
  };

  const [isPortrait, setIsPortrait] = useState(getIsPortrait);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(getIsPortrait());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isPortrait };
}

import { useState, useEffect } from "react";
import {
  motion,
  cubicBezier,
  useScroll,
  useTransform,
  // useMotionValueEvent,
} from "motion/react";
import LogoPiamonte from "@/assets/logos/main/LogoPiamonte";
import { useOutletContext } from "react-router";
import useDarkMode from "@/hooks/useDarkMode";

export default function SplashScreen() {
  const { navRef } = useOutletContext();
  const [centerY, setCenterY] = useState(0);
  const { scrollYProgress } = useScroll();
  const isDark = useDarkMode();
  const ease = cubicBezier(0.22, 0.3, 0.36, 1);

  // SplashScreen Animation
  const splashZIndex = useTransform(scrollYProgress, [0.1869, 0.187], [20, 0], {
    clamp: false,
    ease,
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 0.187], [1, 0]);

  // Floating logo scale
  const scale = useTransform(scrollYProgress, [0.02, 0.187], [1, 0.32], {
    ease,
  });

  useEffect(() => {
    const update = () => {
      if (!navRef.current) return;

      const rect = navRef.current.getBoundingClientRect();
      setCenterY(((rect.top + rect.height / 2) / window.innerHeight) * 100);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const top = useTransform(
    scrollYProgress,
    [0.02, 0.187],
    ["50%", `${centerY}%`],
    {
      ease,
    },
  );
  const floatingOpacity = useTransform(
    scrollYProgress,
    [0.1869, 0.187],
    [1, 0],
    { clamp: false },
  );

  // Animation when is light theme (nude to gris) (modified, there is no color transition)
  const logoColor = useTransform(
    scrollYProgress,
    [0.0, 0.2],
    !isDark ? ["#ffffff", "#ffffff"] : ["#33302b", "#33302b"],
    { clamp: false },
  );

  // useMotionValueEvent(scrollYProgress, "change", (value) => {
  //   console.log("scrollYProgress:", value);
  // });

  return (
    <>
      {/* Background */}
      <motion.div
        className="relative w-full h-lvh"
        style={{ zIndex: splashZIndex }}
      >
        <motion.div className="relative w-full h-lvh bg-verde dark:bg-nude pointer-events-none">
          {/* Linea decortativa */}
          <motion.div
            className="w-[clamp(1px,0.15625vw,2px)] h-[clamp(40px,11vw,200px)] lg:h-[clamp(107px,18.75vw,240px)] bg-nude dark:bg-verde"
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              originY: 1,
              scaleY: lineScaleY,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Logo */}
      <motion.div
        className="w-[clamp(271px,47.734375vw,611px)] h-[clamp(55px,9.609375vw,123px)] pointer-events-none"
        style={{
          position: "fixed",
          top,
          left: "50%",
          x: "-50%",
          y: "-50%",
          scale,
          opacity: floatingOpacity,
          color: logoColor,
          zIndex: 50,
        }}
      >
        <LogoPiamonte className="w-full h-full" />
      </motion.div>
    </>
  );
}

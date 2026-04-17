import { useState, useEffect } from "react";
import { motion, cubicBezier, useScroll, useTransform } from "motion/react";
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
  const splashOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0], {
    clamp: false,
    ease,
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 0.25], [1, 0.1]);

  // Floating logo
  const scale = useTransform(scrollYProgress, [0.015, 0.25], [1, 0.32], {
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
    [0.015, 0.25],
    ["50%", `${centerY}%`],
    {
      ease,
    },
  );
  const floatingOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.2501],
    [1, 0],
    { clamp: false },
  );

  // Animation when is light theme (nude to gris)
  const logoColor = useTransform(
    scrollYProgress,
    [0.0, 0.2],
    isDark ? ["#ffffff", "#ffffff"] : ["#ffffff", "#33302b"],
    { clamp: false },
  );

  return (
    <>
      {/* Background */}
      <div className="relative z-20 w-full h-dvh pointer-events-none">
        <motion.div
          className="relative w-full h-dvh bg-verde pointer-events-none"
          style={{
            opacity: splashOpacity,
          }}
        >
          {/* Linea decortativa */}
          <motion.div
            className="w-[clamp(1px,0.15625vw,2px)] h-[clamp(40px,11vw,200px)] lg:h-[clamp(107px,18.75vw,240px)] bg-nude"
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              originY: 1,
              scaleY: lineScaleY,
            }}
          />
        </motion.div>
      </div>

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

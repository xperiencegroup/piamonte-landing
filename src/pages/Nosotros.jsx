import NosotrosInicio from "@/sections/Nosotros/Inicio";
import NosotrosVideo from "@/sections/Nosotros/NosotrosVideo";
import Socios from "@/sections/Nosotros/Socios";

export default function Nosotros() {
  return (
    <main>
      {/* Overlay */}
      <div className="fixed w-full h-full -z-10 bg-linear-to-b from-nude/85 via-nude/75 via-30% to-nude/55 dark:from-gris/95 dark:via-gris/90 dark:via-30% dark:to-gris/65" />

      {/* Nosotros */}
      <NosotrosInicio />

      {/* Socios */}
      <Socios />

      {/* Video */}
      <NosotrosVideo />
    </main>
  );
}

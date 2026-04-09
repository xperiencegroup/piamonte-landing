import Inicio from "@/sections/Home/Inicio";
import Ventajas from "@/sections/Home/Ventajas";
import VerProyectos from "@/sections/Home/VerProyectos";

export default function Home() {
  return (
    <main className="relative z-0 w-full">
      {/* Overlay */}
      <div className="fixed w-full h-dvh -z-10 bg-linear-to-b from-nude/85 via-nude/75 via-30% to-nude/55 dark:from-gris/95 dark:via-gris/90 dark:via-30% dark:to-gris/65" />

      <div className="w-full h-dvh" />

      {/* Inicio */}
      <Inicio />

      {/* Ventajas Wellness */}
      <Ventajas />

      {/* Ver Proyecto */}
      <VerProyectos />
    </main>
  );
}

import Inicio from "@/sections/Home/Inicio";
import Ventajas from "@/sections/Home/Ventajas";
import VerProyectos from "@/sections/Home/VerProyectos";

export default function Home() {
  return (
    <main className="relative z-0 w-full">
      <div className="w-full h-dvh" />
      {/* Inicio */}
      <Inicio />

      {/* Ventajas */}
      <Ventajas />

      {/* Ver Proyecto */}
      <VerProyectos />
    </main>
  );
}

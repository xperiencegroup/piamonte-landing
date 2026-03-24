import Inicio from "@/sections/Home/Inicio";
import ventaja_serenidad from "@/assets/images/Home/ventaja_serenidad.svg";
import ventaja_lotes from "@/assets/images/Home/ventaja_lotes.svg";
import ventaja_amenidades from "@/assets/images/Home/ventaja_amenidades.svg";
import ventaja_monterrey from "@/assets/images/Home/ventaja_monterrey.svg";
import ventaja_saltillo from "@/assets/images/Home/ventaja_saltillo.svg";

const VENTAJAS = [
  {
    label: "Tu vida a un instante de serenidad.",
    image: ventaja_serenidad,
  },
  {
    label: "77 lotes",
    image: ventaja_lotes,
  },
  {
    label: "16 amenidades",
    image: ventaja_amenidades,
  },
  {
    label: "A menos de 80 min. de Monterrey",
    image: ventaja_monterrey,
  },
  {
    label: "A menos de 30 min. de Saltillo",
    image: ventaja_saltillo,
  },
];

export default function Home() {
  return (
    <main className="relative z-0 w-full">
      <div className="w-full h-dvh" />
      {/* Inicio */}
      <Inicio />

      {/* Ventajas */}
      <div className="flex flex-wrap justify-center items-center w-full h-dvh gap-[clamp(7px,1.25vw,16px)]">
        {VENTAJAS.map((ventaja) => {
          return (
            <div className="flex flex-col w-[clamp(103px,18.0625vw,231.2px)] h-[clamp(173px,30.390625vw,389px)] p-[clamp(7px,1.25vw,16px)] gap-[clamp(7px,1.25vw,16px)] bg-nude">
              <div className="shrink-0 relative w-[clamp(88px,15.5625vw,199.2px)] h-[clamp(133px,23.359375vw,299px)]">
                <img
                  src={ventaja.image}
                  alt={ventaja.label}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <p className="grow flex justify-center items-center text-center font-bold text-gris uppercase leading-[130%]">
                {ventaja.label}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

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

export default function Ventajas() {
  return (
    <div className="flex flex-wrap lg:flex-col w-full min-h-dvh justify-center items-center gap-1 md:gap-2 lg:gap-[clamp(14px,2.5vw,32px)] max-lg:py-[clamp(22px,3.90625vw,40px)]">
      <div className="grid grid-cols-6 lg:grid-cols-5 gap-[clamp(7px,1.25vw,16px)]">
        {VENTAJAS.map((ventaja, index) => {
          return (
            <div
              key={index}
              className={`col-span-2 lg:col-span-1 flex flex-col w-[clamp(103px,18.0625vw,231.2px)] h-[clamp(173px,30.390625vw,389px)] p-[clamp(7px,1.25vw,16px)] gap-[clamp(7px,1.25vw,16px)] bg-nude dark:bg-verde ${index === 3 ? "max-lg:col-start-2" : ""} ${index === 4 ? "max-lg:col-start-4" : ""}`}
            >
              <div className="shrink-0 relative w-[clamp(88px,15.5625vw,199.2px)] h-[clamp(133px,23.359375vw,299px)]">
                <img
                  src={ventaja.image}
                  alt={ventaja.label}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <p className="grow flex justify-center items-center text-paper text-center font-bold text-gris dark:text-nude uppercase leading-[130%] tracking-tighter">
                {ventaja.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="max-lg:self-start w-[clamp(1px,0.15625vw,2px)] h-[clamp(40px,7.03125vw,90px)] max-lg:translate-y-1/2 bg-cafe" />
    </div>
  );
}

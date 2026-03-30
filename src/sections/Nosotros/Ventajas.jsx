import ubicacionImage from "@/assets/images/Nosotros/ventajas/ubicacion.jpg";
import seguridadImage from "@/assets/images/Nosotros/ventajas/seguridad.jpg";
import tiemposImage from "@/assets/images/Nosotros/ventajas/tiempos.jpg";
import conceptoImage from "@/assets/images/Nosotros/ventajas/concepto.jpg";
import vialidadesImage from "@/assets/images/Nosotros/ventajas/vialidades.jpg";
import PaperTear from "../../assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTear.png";

const VENTAJAS = [
  {
    label: "Residencial campestre a pie de carretera.",
    title: "Ubicación",
    image: ubicacionImage,
  },
  {
    label: "Régimen de propiedad en condominio.",
    title: "Seguridad",
    image: seguridadImage,
  },
  {
    label: "80 minutos de Monterrey y 30 de Saltillo.",
    title: "Tiempos",
    image: tiemposImage,
  },
  {
    label: "Concepto 100% Slow life/Wellness..",
    title: "Concepto",
    image: conceptoImage,
  },
  {
    label: "Carretera interserrana lista 2027.",
    title: "Vialidades",
    image: vialidadesImage,
  },
];

export default function Ventajas() {
  return (
    <div className="flex w-full h-dvh justify-center items-center">
      <div className="w-full max-w-[1280px] h-[389px] px-[clamp(13px,2.34375vw,30px)]">
        <div className="flex w-full h-full justify-between bg-gray-500/20">
          {VENTAJAS.map((item) => {
            return (
              <div
                key={item.label}
                className="relative flex flex-col w-[clamp(103px,18.0625vw,231.2px)] h-[clamp(173px,30.390625vw,389px)] p-[clamp(7px,1.25vw,16px)] gap-[clamp(7px,1.25vw,16px)] bg-nude dark:bg-verde"
              >
                {/* Content */}
                <div className="shrink-0 relative w-[clamp(88px,15.5625vw,199.2px)] h-[clamp(133px,23.359375vw,299px)]">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <p className="grow flex justify-center items-center text-caption text-center font-regular text-gris dark:text-nude leading-[130%]">
                  {item.label}
                </p>

                {/* Title */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-5/8 w-[clamp(72px,12.65625vw,162px)] h-[clamp(28px,4.84375vw,62px)]">
                  <div className="absolute w-full h-full flex justify-center items-center">
                    <img
                      src={PaperTear}
                      alt="Imagen de fondo de textura de papel"
                      className="absolute inset-0 w-full h-full"
                    />
                    <p className="relative z-10 text-frase font-selinea text-verde-claro">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

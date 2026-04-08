import PaperBody from "@/assets/images/Nosotros/PaperBody.png";
import PaperTitle from "@/assets/images/Nosotros/paperTitle.png";

export default function Wellness() {
  return (
    <div className="flex flex-col w-full h-dvh justify-center items-center">
      <div className="relative w-[clamp(478px,84.0625vw,1076px)] h-[clamp(140px,28.5vw,387px)] lg:h-[clamp(176px,31.015625vw,397px)]">
        {/* Image */}
        <img
          src={PaperBody}
          alt="Imagen de hoja"
          className="absolute inset-0 h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
        />

        {/* Content */}
        <div className="relative flex flex-col w-full h-full justify-center items-center gap-[clamp(7px,1.25vw,16px)]">
          {/* Title */}
          <div className="flex absolute top-0 -translate-y-5/8 w-[clamp(73px,12.890625vw,165px)] h-[clamp(29px,5.078125vw,65px)] justify-center items-center">
            <img
              src={PaperTitle}
              alt="Imagen de titulo de carta"
              className="absolute inset-0 w-full h-full"
            />
            <p className="relative text-frase font-selinea text-verde-claro">
              Wellness
            </p>
          </div>

          {/* Body */}
          <p className="w-[clamp(355px,62.5vw,800px)] max-lg:pt-5 text-paragraph text-center leading-[120%] text-cafe">
            La vida wellness es elegir bajar el ritmo y volver a lo esencial. Es
            despertar con calma, respirar profundo y permitir que la naturaleza
            marque el compás de tus días.
            <br />
            <br />
            En <span className="font-bold">Piamonte Residencial</span>, creamos
            un entorno donde el bienestar no es un concepto, sino una
            experiencia cotidiana: espacios que invitan a la pausa, al
            equilibrio y a la reconexión personal.Porque cuando encuentras
            armonía entre mente, cuerpo y entorno, descubres que estás a un
            instante de transformar tu manera de vivir.
          </p>

          <p className="text-frase font-selinea leading-[120%] text-verde">
            Tu vida a un instante de serenidad.
          </p>
        </div>
      </div>
      <div className="max-lg:hidden w-[clamp(1px,0.15625vw,2px)] h-[clamp(30px,5vw,60px)] lg:h-[clamp(55px,7.03125vw,90px)] bg-cafe" />
    </div>
  );
}

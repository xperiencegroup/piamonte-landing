import PaperBody from "@/assets/images/Nosotros/PaperBody.png";
import PaperTitle from "@/assets/images/Nosotros/paperTitle.png";
import PaperBackground from "@/assets/images/Nosotros/paperBackground.svg";

export default function Wellness() {
  return (
    <div className="relative flex flex-col w-full h-dvh justify-center items-center overflow-hidden">
      <div className="relative portrait:w-full portrait:h-[clamp(422px,70.78vh,1323.65px)] w-[clamp(478px,84.0625vw,1076px)] h-[clamp(140px,28.5vw,387px)] lg:h-[clamp(176px,31.015625vw,397px)]">
        {/* Image */}
        <img
          src={PaperBody}
          alt="Imagen de hoja"
          className="portrait:hidden absolute inset-0 h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
        />

        <img
          src={PaperBackground}
          alt="Imagen de hoja"
          className="landscape:hidden absolute inset-0 h-full scale-115 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-fill"
        />

        {/* Content */}
        <div className="relative flex flex-col w-full h-full justify-center items-center gap-[clamp(7px,1.25vw,16px)] portrait:gap-[4vh]">
          {/* Title */}
          <div className="flex absolute top-0 -translate-y-5/8 w-[clamp(73px,12.890625vw,165px)] h-[clamp(29px,5.078125vw,65px)] justify-center items-center portrait:w-[clamp(140px,12.65625vw,162px)] portrait:h-[clamp(55px,5vw,64px)]">
            <img
              src={PaperTitle}
              alt="Imagen de titulo de carta"
              className="absolute inset-0 w-full h-full"
            />
            <p className="relative text-frase portrait:text-[clamp(36.2px,16vw,60px)] font-selinea text-verde-claro">
              Wellness
            </p>
          </div>

          {/* Body */}
          <p className="w-[clamp(355px,62.5vw,800px)] portrait:w-full max-lg:pt-5 portrait:px-[clamp(37.55px,11.733333vw,44px)] text-paragraph portrait:text-[clamp(12.07px,4.433333vw,20px)] text-center leading-[120%] text-cafe">
            La vida wellness es elegir bajar el ritmo y volver a lo esencial. Es
            despertar con calma, respirar profundo y permitir que la naturaleza
            marque el compás de tus días.
            <br />
            <br />
            En <span className="font-bold">Piamonte Residencial</span>, creamos
            un entorno donde el bienestar no es un concepto, sino una
            experiencia cotidiana: espacios que invitan a la pausa, al
            equilibrio y a la reconexión personal.
            <br />
            Porque cuando encuentras armonía entre mente, cuerpo y entorno,
            descubres que estás a un instante de transformar tu manera de vivir.
          </p>

          <p className="text-frase portrait:text-[clamp(36.2px,16vw,60px)] text-center font-selinea leading-[50%] text-verde">
            Tu vida a un instante <br className="landscape:hidden" /> de
            serenidad.
          </p>
        </div>
      </div>
      <div className="absolute bottom-[clamp(31px,5.46875vw,70px)] [@media(max-height:705px)]:hidden max-lg:hidden w-[clamp(1px,0.15625vw,2px)] h-[clamp(30px,5vw,60px)] lg:h-[clamp(65px,7.03125vw,90px)] bg-cafe dark:bg-nude" />
    </div>
  );
}

import PaperBody from "@/assets/images/Nosotros/PaperBody.png";
import PaperTitle from "@/assets/images/Nosotros/paperTitle.png";
import PaperBackground from "@/assets/images/Nosotros/paperBackground.svg";
import wellnessTitle from "@/assets/texts/home/wellnessTitle.svg";

export default function Wellness() {
  return (
    <div className="relative flex flex-col w-full h-lvh justify-center items-center overflow-hidden">
      <div className="relative portrait:w-full portrait:h-[clamp(422px,70.78vh,1323.65px)] w-[clamp(478px,84.0625vw,1076px)] h-fit lg:h-[clamp(140px,28.5vw,387px)] lg:h-[clamp(176px,31.015625vw,397px)]">
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
        <div className="relative flex flex-col w-full h-full justify-center items-center gap-1.5 lg:gap-[clamp(7px,1.25vw,16px)] max-lg:py-3">
          {/* Title */}
          <div className="flex absolute top-0 -translate-y-[105%] w-[clamp(249.22px,42.96875vw,550px)] h-[clamp(41.22px,7.109375vw,91px)] justify-center items-center portrait:w-[clamp(140px,12.65625vw,162px)] portrait:h-[clamp(55px,5vw,64px)]">
            <img
              src={PaperTitle}
              alt="Imagen de titulo de carta"
              className="absolute inset-0 w-full h-full rotate-2"
            />
            <img
              src={wellnessTitle}
              alt="Bienestar y equilibrio como forma de vida"
              className="relative z-50 w-full px-[clamp(18.13px,3.125vw,40px)]"
            />
          </div>

          {/* Body */}
          <p className="w-[clamp(355px,62.5vw,860px)] text-paragraph text-center leading-[120%] text-cafe">
            La vida wellness es elegir bajar el ritmo y volver a lo esencial.
            <br />
            <br />
            Es despertar sin prisa, respirar profundo y dejar que la naturaleza
            marque el compás de cada día.
            <br />
            <br />
            En Piamonte Residencial Campestre, concebimos un entorno donde el
            bienestar no se explica, se vive: espacios que invitan a la pausa,
            al equilibrio y a una reconexión genuina.
            <br />
            <br />
            Porque cuando encuentras armonía entre mente, cuerpo y entorno,
            descubres que tu vida en equilibrio está a un instante.
          </p>

          <br />

          <p className="w-[80%] text-lavolta-title text-center font-lavolta leading-none text-verde uppercase">
            Un entorno disenado para conectar y florecer en comunidad
          </p>
        </div>
      </div>
      <div className="absolute bottom-[clamp(31px,5.46875vw,70px)] [@media(max-height:705px)]:hidden max-lg:hidden w-[clamp(1px,0.15625vw,2px)] h-[clamp(30px,5vw,60px)] lg:h-[clamp(65px,7.03125vw,90px)] bg-cafe dark:bg-nude" />
    </div>
  );
}

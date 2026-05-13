import PaperBody from "@/assets/images/Nosotros/PaperBody.png";
import PaperTitle from "@/assets/images/Nosotros/paperTitle.png";
import PaperBackground from "@/assets/images/Nosotros/paperBackground.svg";

export default function NosotrosInicio() {
  return (
    <div className="relative flex flex-col w-full h-dvh justify-center items-center overflow-hidden">
      <div className="relative portrait:w-[80%] portrait:h-[320px] w-[clamp(478px,84.0625vw,1076px)] h-fit lg:h-[clamp(163.13px,28.125vw,360px)]">
        {/* Image */}
        <img
          src={PaperBody}
          alt="Imagen de hoja"
          className="portrait:hidden absolute inset-0 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-fill"
        />

        <img
          src={PaperBackground}
          alt="Imagen de hoja"
          className="landscape:hidden absolute inset-0 w-full h-full scale-115 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-fill"
        />

        {/* Content */}
        <div className="relative flex flex-col w-full h-full justify-center items-center gap-1.5 lg:gap-[clamp(7px,1.25vw,16px)] max-lg:py-6">
          {/* Title */}
          <div className="flex absolute top-0 portrait:-translate-y-[115%]  -translate-y-[65%] w-[clamp(81.56px,14.0625vw,180px)] h-[clamp(31.72px,5.46875vw,70px)] justify-center items-center portrait:w-[clamp(140px,12.65625vw,162px)] portrait:h-[clamp(55px,5vw,64px)]">
            <img
              src={PaperTitle}
              alt="Imagen de titulo de carta"
              className="absolute inset-0 w-full h-full"
            />
            <p className="relative text-lavolta-title portrait:text-[clamp(19.31px,8.533333vw,32px)] font-lavolta text-cafe whitespace-nowrap">
              Nosotros
            </p>
          </div>

          {/* Body */}
          <p className="portrait:w-full portrait:px-4 portrait:text-[13px] w-[clamp(355px,62.5vw,760px)] text-paragraph text-center leading-[120%] text-cafe">
            Somos un grupo desarrollador formado por personas que crecimos y
            hemos desarrollado nuestra vida entre Saltillo y Monterrey. Desde
            distintas disciplinas, compartimos una misma visión: crear espacios
            que trasciendan lo funcional y generen valor real en la forma de
            vivir.
            <br />
            <br />
            Piamonte Residencial Campestre nace desde esa perspectiva: un
            proyecto concebido con intención, donde la comunidad, la conexión
            con la naturaleza y el bienestar cotidiano son el punto de partida.
          </p>
        </div>

        {/* Mobile line decoration */}
        <div className="hidden absolute left-1/2 -translate-x-1/2 translate-y-5 w-0.5 h-[clamp(44px,9vh,90px)] bg-cafe dark:bg-nude" />
      </div>

      {/* Landscape line decoration */}
      <div className="absolute portrait:bottom-12 portrait:w-0.5 portrait:h-[clamp(44px,9vh,90px)] bottom-[clamp(31px,5.46875vw,70px)] w-[clamp(1px,0.15625vw,2px)] h-[clamp(30px,5vw,60px)] lg:h-[clamp(65px,7.03125vw,90px)] bg-cafe dark:bg-nude" />
    </div>
  );
}

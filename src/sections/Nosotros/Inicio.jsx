import letterImage from "@/assets/images/Nosotros/letters.png";
import PaperBody from "@/assets/images/Nosotros/PaperBody.png";
import PaperBackground from "@/assets/images/nosotros/paperBackground.svg";

export default function NosotrosInicio() {
  return (
    <div className="w-full h-dvh lg:pb-[clamp(31px,5.46875vw,70px)]">
      <div className="flex flex-col w-full h-full justify-end items-center max-sm:px-7 sm:px-10 md:px-12 lg:pb-[clamp(10px,1.796875vw,23px)]">
        <div className="flex portrait:flex-col h-full justify-center items-center gap-[clamp(9px,3.125vw,40px)] landscape:pt-[clamp(40px,7.03125vw,90px)]">
          {/* Image */}
          <img
            src={letterImage}
            alt="Imagenes de cartas"
            className="w-[clamp(167px,24vw,377px)] lg:w-[clamp(167px,29.453125vw,377px)] aspect-[377.82/513.33] portrait:w-[clamp(145px,38.666667vw,494.93px)]"
          />

          <div className="relative flex justify-center items-center w-full max-w-[752px] h-[clamp(146px,25.625vw,328px)] portrait:w-full portrait:max-w-[400px] portrait:h-[270px]">
            {/* Container Background Image */}
            <img
              src={PaperBody}
              alt="Imagen de hoja"
              className="absolute -z-10 w-full h-full inset-0 object-contain portrait:hidden"
            />

            <img
              src={PaperBackground}
              alt="Imagen de hoja"
              className="absolute z-5 w-full h-full object-fill landscape:hidden"
            />

            {/* Texts */}
            <p className="relative z-5 w-[75%] text-paragraph portrait:text-[12px] text-center text-cafe leading-[115%]">
              En <span className="font-bold">Piamonte Residencial</span> creemos
              que vivir bien es vivir en paz. Creamos un entorno donde la
              serenidad del campo y la vida consciente se unen para ofrecer un
              verdadero espacio de bienestar.
              <br /> <br />
              Diseñamos cada detalle para que desaceleres, respires profundo y
              vuelvas a conectar contigo y con lo esencial. Porque el hogar no
              solo se habita, se siente.
              <br />
              <br />
              Tu vida a un instante de serenidad.
            </p>

            {/* Mobile decoration line */}
            <div className="landscape:hidden absolute z-0 bottom-0 translate-y-1/2 w-[clamp(1px,0.15625vw,2px)] h-[clamp(30px,7.03125vw,90px)] bg-cafe dark:bg-nude" />
          </div>
        </div>

        {/* Decoration line */}
        <div className="max-lg:hidden w-[clamp(1px,0.15625vw,2px)] h-[clamp(65px,7.03125vw,90px)] bg-cafe dark:bg-nude" />
      </div>
    </div>
  );
}

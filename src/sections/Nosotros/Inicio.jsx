import letterImage from "@/assets/images/Nosotros/letters.png";

export default function NosotrosInicio() {
  return (
    <div className="w-full h-dvh lg:pb-[clamp(31px,5.46875vw,70px)]">
      <div className="flex flex-col w-full h-full justify-end items-center max-sm:px-7 sm:px-10 md:px-12 lg:pb-[clamp(10px,1.796875vw,23px)]">
        <div className="flex h-full justify-center items-center gap-[clamp(18px,3.125vw,40px)]">
          {/* Image */}
          <img
            src={letterImage}
            alt="Imagenes de cartas"
            className="w-[clamp(167px,24vw,377px)] lg:w-[clamp(167px,29.453125vw,377px)] aspect-[377.82/513.33]"
          />

          {/* Texts */}
          <p className="w-full max-w-[673px] text-paragraph text-center text-cafe dark:text-nude">
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
        </div>

        {/* Decoration line */}
        <div className="max-lg:hidden w-[clamp(1px,0.15625vw,2px)] h-[clamp(65px,7.03125vw,90px)] bg-cafe" />
      </div>
    </div>
  );
}

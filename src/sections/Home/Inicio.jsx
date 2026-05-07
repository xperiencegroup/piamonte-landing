import letter from "@/assets/images/Home/letter.svg";
import frase from "@/assets/logos/main/FraseInicio.svg";

export default function Inicio() {
  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <div className="flex lg:flex-col lg:items-center gap-[clamp(14px,2.5vw,32px)]">
        <div className="flex flex-col items-center gap-[clamp(11.33px,1.953125vw,25px)]">
          {/* Frase */}
          <img
            src={frase}
            alt="Tu vida en equilibrio a un instante"
            className="w-[clamp(120px,32vw,360px)] h-[clamp(18px,4.8vw,54px)] lg:w-[clamp(244.69px,42.1875vw,540px)] lg:h-[clamp(36.7px,6.328125vw,81px)] dark:invert dark:brightness-0"
          />

          {/* Text */}
          <div className="relative w-[clamp(366px,64.453125vw,660px)] lg:w-[clamp(375px,65.9375vw,844px)] h-[clamp(72px,20vw,256px)] lg:h-[clamp(159px,27.96875vw,358px)]">
            <div className="relative z-5 w-[67%] h-full place-self-center flex flex-col justify-center items-center gap-[clamp(15px,2.65625vw,34px)]">
              <p className="text-body-md text-center text-cafe leading-[125%] tracking-tight">
                Piamonte Residencial Campestre es un refugio de bienestar
                integral, donde la serenidad del entorno natural y la vida en
                consciencia redefinen tu forma de vivir.
                <br />
                <br />
                Es un espacio diseñado para desacelerar, reconectar y disfrutar
                la vida en equilibrio, con la naturaleza y lejos del ritmo
                acelerado de la ciudad.
              </p>
            </div>

            <img
              src={letter}
              alt="Imagen carta"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Line decoration */}
        <div className="w-[clamp(1px,0.15625vw,2px)] h-[clamp(40px,7.03125vw,90px)] max-lg:translate-y-1/4 bg-cafe dark:bg-nude" />
      </div>
    </div>
  );
}

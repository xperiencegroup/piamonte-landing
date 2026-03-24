import letter from "@/assets/images/Home/letter.svg";

export default function Inicio() {
  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <div className="flex flex-col items-center gap-[clamp(23px,2.5vw,32px)]">
        <div className="relative w-[clamp(440px,47.8125vw,612px)] h-[clamp(257px,27.96875vw,358px)]">
          <div className="relative z-5 w-[78%] h-full place-self-center flex flex-col justify-center items-center gap-[clamp(24px,2.65625vw,34px)]">
            <h3 className="text-center font-selinea text-letter-title leading-[45%] text-verde">
              Disfruta de espacios que inspiran <br /> comunidad y bienestar
            </h3>

            <p className="text-paragraph text-center text-cafe leading-[125%] tracking-tight">
              Piamonte Residencial es un refugio campestre de bienestar
              integral, donde la serenidad del entorno natural y la vida en
              consciencia redefinen tu forma de vivir.
              <br />
              <br />
              Un espacio diseñado para desacelerar, reconectar y disfrutar una
              vida consciente, en equilibrio con la naturaleza y lejos del ritmo
              acelerado de la ciudad.
            </p>
          </div>

          <img
            src={letter}
            alt="Imagen carta"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <div className="w-[clamp(1px,0.15625vw,2px)] h-[clamp(65px,7.03125vw,90px)] bg-cafe" />
      </div>
    </div>
  );
}

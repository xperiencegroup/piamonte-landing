import portadas from "@/Video/data/portadas.json";
import PhoneRotation from "@/assets/icons/shared/phoneRotation";

export default function RotationMessage() {
  return (
    <div className="absolute inset-0 top-0 left-0 z-5 w-full h-full">
      {/* Overlay */}
      <div className="relative z-10 gradient-inicio-phone-rotation" />

      {/* Background video */}
      <video
        src={portadas.home.src}
        autoPlay
        muted
        playsInline
        loop
        className={`fixed w-full max-w-full h-dvh object-cover top-0 left-0`}
      ></video>

      {/* Content */}
      <div className="absolute z-20 flex flex-col w-full h-full justify-center items-center gap-[clamp(12px,3.2vw,40.96px)] px-[clamp(32px,8.533333vw,109.23px)]">
        <div className="size-[clamp(60px,16vw,204.8px)]">
          <PhoneRotation className="text-verde dark:text-nude" />
        </div>
        <p className="text-phone-rotation text-center text-gris dark:text-nude font-bold uppercase">
          Rota tu celular para disfrutar
        </p>
        <p className="text-selinea-rotation text-center font-selinea text-gris dark:text-nude leading-[100%]">
          Piamonte Xperience
        </p>
      </div>
    </div>
  );
}

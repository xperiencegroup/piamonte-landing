import backgroundImage from "../../../assets/images/Masterplan/RecorridosVirtuales/recorridosBackground.jpg";

export default function AmenidadesRecorridos() {
  return (
    <>
      {/* Background */}
      <div className="absolute -z-10 inset-0 w-full h-dvh">
        {/* Overlay */}
        <div className="absolute inset-0 bg-nude dark:bg-verde" />
      </div>

      <div className="relative z-0 w-full h-full">
        <div className="flex relative w-full h-full justify-center max-lg:landscape:items-end portrait:items-center lg:items-center pt-[clamp(18px,3.125vw,40px)]">
          <div className="relative w-[clamp(540px,95vw,1216px)] h-[clamp(120px,58.67dvh,220px)] lg:h-[clamp(251px,44.140625vw,515px)]">
            <img
              src={backgroundImage}
              alt="Imagen de recorridos virtuales"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

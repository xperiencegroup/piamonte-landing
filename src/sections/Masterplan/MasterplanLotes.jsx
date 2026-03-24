import lotesBackground from "../../assets/images/Masterplan/lotesBackground.png";

export default function MasterplanLotes() {
  return (
    <div className="relative z-0 w-full">
      {/* Background */}
      <div className="absolute inset-0 w-full h-dvh">
        <img
          src={lotesBackground}
          alt="Fondo principal"
          className="absolute inset-0 w-full h-dvh -z-10 object-cover"
        />
        {/* Overlay */}
        <div className="linear-gradient-shadow" />
      </div>

      <div className="relative w-full h-dvh flex justify-center items-center">
        <div className="flex justify-center items-end w-[clamp(540px,95vw,1216px)] h-[clamp(308px,54.140625vw,693px)] gap-[clamp(11px,1.875vw,24px)]"></div>
      </div>
    </div>
  );
}

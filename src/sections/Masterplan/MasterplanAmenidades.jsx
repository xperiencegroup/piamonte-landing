import amenidadesBackground from "../../assets/images/Masterplan/amenidadesBackground.png";

export default function MasterplanAmenidades() {
  return (
    <div className="relative z-0 w-full">
      {/* Background */}
      <div className="absolute inset-0 w-full h-dvh">
        <img
          src={amenidadesBackground}
          alt="Fondo principal"
          className="absolute inset-0 w-full h-dvh -z-10 object-cover"
        />
        {/* Overlay */}
        <div className="linear-gradient-shadow" />
      </div>
    </div>
  );
}

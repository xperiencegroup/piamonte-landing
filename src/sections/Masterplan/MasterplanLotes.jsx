import { useNavigate } from "react-router";
import lotesBg from "../../assets/images/Masterplan/lotes_bg.svg";
import { LOTES } from "@/data/lotes";

export default function MasterplanLotes() {
  const navigate = useNavigate();
  const handleSelectLote = (id) => {
    navigate(`/masterplan/lotes/${id}/vista-360`);
  };
  return (
    <div className="relative z-0 w-full">
      {/* Background */}
      <div className="absolute inset-0 w-full h-dvh">
        <img
          src={lotesBg}
          alt="Fondo principal"
          className="absolute inset-0 w-full h-dvh -z-10 object-cover"
        />
        {/* Overlay */}
        <div className="linear-gradient-shadow" />
      </div>

      <div className="relative w-full h-dvh flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[clamp(540px,95vw,1216px)] h-[clamp(308px,54.140625vw,693px)] gap-[clamp(11px,1.875vw,24px)]">
          <p>Simulación de click en un lote</p>
          <div className="grid grid-cols-10 w-full justify-items-center gap-[clamp(7px,1.25vw,16px)]">
            {LOTES.map((lote) => {
              return (
                <div
                  key={lote.id}
                  onClick={() => handleSelectLote(lote.id)}
                  className="group flex size-[clamp(44px,7.8125vw,100px)] justify-center items-center bg-verde border hover:bg-nude hover:cursor-pointer"
                >
                  <p className="text-boton-grande text-white group-hover:text-gris">
                    {lote.id}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

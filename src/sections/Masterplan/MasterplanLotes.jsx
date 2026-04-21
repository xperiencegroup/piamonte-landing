import { useNavigate } from "react-router";
import { LOTES } from "@/data/lotes";
import CapaLotesMapped from "@/assets/images/Masterplan/Lotes/CapaLotesMapped";

export default function MasterplanLotes() {
  const navigate = useNavigate();
  const handleSelectLote = (id) => {
    navigate(`/masterplan/lotes/${id}/vista-360`);
  };
  return (
    <div className="relative z-0 w-full">
      {/* Background */}
      <div className="absolute inset-0 w-full h-dvh">
        {/* <img
          src={lotes}
          alt="Fondo principal"
          className="absolute inset-0 w-full h-dvh -z-10 object-cover opacity-20"
        /> */}
        {/* Overlay */}
        <div className="linear-gradient-shadow" />
      </div>

      <div className="relative w-full h-dvh flex justify-center items-center">
        {/* Lotes */}
        <CapaLotesMapped handleSelectLote={handleSelectLote} />
      </div>
    </div>
  );
}

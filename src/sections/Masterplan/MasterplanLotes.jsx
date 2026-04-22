import { useNavigate } from "react-router";
import CapaLotesMapped from "@/assets/images/Masterplan/Lotes/CapaLotesMapped";

export default function MasterplanLotes() {
  const navigate = useNavigate();
  const handleSelectLote = (id) => {
    navigate(`/masterplan/lotes/${id}/vista-360`);
  };

  return (
    <div className="relative z-0 ">
      {/* Background */}
      <div className="absolute inset-0 w-full h-dvh">
        {/* Overlay */}
        <div className="linear-gradient-shadow" />
      </div>

      <div className="fixed inset-0">
        <CapaLotesMapped
          className="w-full h-full pointer-events-auto"
          handleSelectLote={handleSelectLote}
        />
      </div>
    </div>
  );
}

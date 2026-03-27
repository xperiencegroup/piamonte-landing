import AdvanceMarker from "@/components/ui/shared/map/AdvanceMarker";
import isotipo from "@/assets/icons/main/isotipo.svg";
import { PiamonteData } from "@/components/ui/shared/map/mapConfig";

export default function PiamonteMarker() {
  return (
    <AdvanceMarker position={PiamonteData.coordinates}>
      <div className="w-[clamp(18px,3.125vw,40px)] h-[clamp(23px,4.0625vw,52px)]">
        <img
          src={isotipo}
          alt="Isotipo de Piamonte"
          className="w-full h-full"
        />
      </div>
    </AdvanceMarker>
  );
}

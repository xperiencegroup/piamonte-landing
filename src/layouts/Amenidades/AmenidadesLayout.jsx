import { Outlet, useOutletContext } from "react-router";
import AmenidadesMenu from "./AmenidadesMenu";

export default function AmenidadesLayout() {
  const context = useOutletContext();
  return (
    <div className="flex flex-col h-dvh w-full">
      <div className="flex flex-col grow min-h-0">
        <Outlet context={context} />
      </div>

      {/* Navigation */}
      <AmenidadesMenu />
    </div>
  );
}

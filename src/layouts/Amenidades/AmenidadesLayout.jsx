import { Outlet } from "react-router";
import AmenidadesMenu from "./AmenidadesMenu";

export default function AmenidadesLayout() {
  return (
    <div className="flex flex-col h-dvh w-full">
      <div className="flex flex-col grow min-h-0">
        <Outlet />
      </div>

      {/* Navigation */}
      <AmenidadesMenu />
    </div>
  );
}

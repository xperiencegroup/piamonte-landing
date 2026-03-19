import LogoPiamonte from "@/assets/logos/main/LogoPiamonte";
import React from "react";
import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex flex-col">
      <nav className="flex self-center justify-between items-center w-[clamp(300px,95vw,1216px)] h-[clamp(48px,5.234vw,67px)] px-[clamp(14px,1.5625vw,20px)] py-[clamp(5px,0.546875vw,7px)] bg-white">
        <Link
          to={"/"}
          className="w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] flex justify-center items-center text-boton text-center font-dmsans uppercase text-gris"
        >
          Piamonte Xperience
        </Link>
        <Link
          to={"/"}
          className="w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] flex justify-center items-center text-boton text-center font-dmsans uppercase text-gris"
        >
          Ubicación
        </Link>

        {/* Logo */}
        <Link className="justify-center">
          <LogoPiamonte />
        </Link>

        <Link
          to={"/"}
          className="w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] flex justify-center items-center text-boton text-center font-dmsans uppercase text-gris"
        >
          Nosotros
        </Link>
        <Link
          to={"/"}
          className="w-[clamp(160px,17.5vw,224px)] h-[clamp(38px,4.140625vw,53px)] flex justify-center items-center text-boton text-center font-dmsans uppercase text-gris"
        >
          Contacto
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}

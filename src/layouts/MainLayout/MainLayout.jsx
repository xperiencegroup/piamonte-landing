import MobileMenu from "@/components/layouts/components/MainLayout/MobileMenu";
import Navbar from "@/components/layouts/components/MainLayout/Navbar";
import ToggleTheme from "@/components/layouts/components/MainLayout/ToggleTheme";
import useIsPortrait from "@/hooks/useIsPortrait";
import React from "react";
import { useLocation } from "react-router";
import { Outlet } from "react-router";

export default function MainLayout() {
  const { pathname } = useLocation();
  const { isPortrait } = useIsPortrait();

  const hideNavbar = pathname.startsWith("/masterplan/amenidades/video-tour");

  return (
    <div className="flex flex-col w-full h-dvh">
      {!hideNavbar && !isPortrait && <Navbar />}

      {isPortrait && <MobileMenu />}

      <ToggleTheme />

      <Outlet />
    </div>
  );
}

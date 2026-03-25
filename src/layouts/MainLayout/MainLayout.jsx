import Navbar from "@/components/layouts/components/MainLayout/Navbar";
import ToggleTheme from "@/components/layouts/components/MainLayout/ToggleTheme";
import React from "react";
import { useLocation } from "react-router";
import { Outlet } from "react-router";

export default function MainLayout() {
  const { pathname } = useLocation();

  const hideNavbar = pathname.startsWith("/masterplan/amenidades/video-tour");

  return (
    <div className="flex flex-col w-full h-dvh">
      {!hideNavbar && <Navbar />}

      <ToggleTheme />

      <Outlet />
    </div>
  );
}

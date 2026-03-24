import Navbar from "@/components/layouts/components/MainLayout/Navbar";
import ToggleTheme from "@/components/layouts/components/MainLayout/ToggleTheme";
import React from "react";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex flex-col w-full h-dvh">
      <Navbar />

      <ToggleTheme />

      {/* Overlay */}
      <div className="fixed w-full h-dvh -z-10 bg-linear-to-b from-nude/85 via-nude/75 via-30% to-nude/55 dark:from-gris/95 dark:via-gris/90 dark:via-30% dark:to-gris/65" />

      <Outlet />
    </div>
  );
}

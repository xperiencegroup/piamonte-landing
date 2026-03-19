import Navbar from "@/components/layouts/components/MainLayout/Navbar";
import ToggleTheme from "@/components/layouts/components/MainLayout/ToggleTheme";
import React from "react";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <ToggleTheme />

      <Outlet />
    </div>
  );
}

import Footer from "@/components/layouts/components/MainLayout/Footer";
import MobileMenu from "@/components/layouts/components/MainLayout/MobileMenu";
import Navbar from "@/components/layouts/components/MainLayout/Navbar";
import ToggleTheme from "@/components/layouts/components/MainLayout/ToggleTheme";
import useIsPortrait from "@/hooks/useIsPortrait";
import React from "react";
import { useRef } from "react";
import { useLocation } from "react-router";
import { Outlet } from "react-router";

const routesToHideNavbar = ["/masterplan/amenidades/video-tour", "/playground"];
const routesToShowFooter = ["/", "/nosotros"];

export default function MainLayout() {
  const navRef = useRef(null);
  const { pathname } = useLocation();
  const { isPortrait } = useIsPortrait();

  const hideNavbar = routesToHideNavbar.some((route) =>
    pathname.startsWith(route),
  );

  const showFooter = routesToShowFooter.some((route) => pathname === route);

  return (
    <div className="flex flex-col w-full h-dvh">
      {!hideNavbar && !isPortrait && <Navbar navRef={navRef} />}

      {isPortrait && <MobileMenu />}

      <ToggleTheme />

      <Outlet context={{ navRef }} />

      {showFooter && <Footer />}
    </div>
  );
}

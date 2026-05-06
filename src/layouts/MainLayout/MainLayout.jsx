import { useRef } from "react";
import { useLocation, Outlet } from "react-router";
import Footer from "@/components/layouts/components/MainLayout/Footer";
import MobileMenu from "@/components/layouts/components/MainLayout/MobileMenu";
import Navbar from "@/components/layouts/components/MainLayout/Navbar";
import ToggleTheme from "@/components/layouts/components/MainLayout/ToggleTheme";
import useIsPortrait from "@/hooks/useIsPortrait";
import RotationMessage from "@/components/layouts/components/MainLayout/RotationMessage";
import WhatsappButton from "@/components/layouts/components/MainLayout/WhatsappButton";
import FullScreenButton from "@/components/layouts/components/MainLayout/FullScreenButton";

const routesToHideNavbar = [
  "/masterplan/amenidades/video-tour",
  "/playground",
  "/masterplan/amenidades/recorridos-virtuales",
];
const routesToShowFooter = ["/", "/nosotros"];
const routesAvailableMobile = ["/nosotros", "/contacto"];

export default function MainLayout() {
  const navRef = useRef(null);
  const { pathname } = useLocation();
  const { isPortrait } = useIsPortrait();

  const hideNavbar = routesToHideNavbar.some((route) =>
    pathname.startsWith(route),
  );

  const showFooter = routesToShowFooter.some((route) => pathname === route);

  const showRotationMessage =
    isPortrait &&
    !routesAvailableMobile.some((route) => pathname.startsWith(route));

  return (
    <div className="relative flex flex-col w-full min-h-screen">
      {!hideNavbar && !isPortrait && <Navbar navRef={navRef} />}

      {isPortrait && <MobileMenu />}

      {showRotationMessage ? (
        <RotationMessage />
      ) : (
        <>
          <Outlet context={{ navRef }} />
          {showFooter && <Footer />}
        </>
      )}

      {!isPortrait && <FullScreenButton />}
      <ToggleTheme />
      <WhatsappButton />
    </div>
  );
}

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home.jsx";
import Ubicacion from "@/pages/Ubicacion";
import Nosotros from "@/pages/Nosotros";
import Contacto from "@/pages/Contacto";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Masterplan from "@/pages/Masterplan";
import MasterplanLotes from "@/sections/Masterplan/MasterplanLotes";
import MasterplanAmenidades from "@/sections/Masterplan/MasterplanAmenidades";
import { VideoPlayerProvider } from "@/Video/context/VideoPlayerProvider";
import VideoComponentLayout from "@/Video/VideoComponentLayout";
import AmenidadesLayout from "@/layouts/Amenidades/AmenidadesLayout";

export default function Router() {
  return (
    <VideoPlayerProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<VideoComponentLayout />}>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />

              <Route path="/masterplan" element={<Masterplan />} />
              <Route path="/masterplan/lotes" element={<MasterplanLotes />} />
              <Route element={<AmenidadesLayout />}>
                <Route
                  path="/masterplan/amenidades"
                  element={<MasterplanAmenidades />}
                />
              </Route>

              <Route path="/ubicacion" element={<Ubicacion />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </VideoPlayerProvider>
  );
}

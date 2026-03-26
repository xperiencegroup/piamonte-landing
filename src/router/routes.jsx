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
import AmenidadesInformacion from "@/sections/Masterplan/Amenidades/AmenidadesInformacion";
import AmenidadesVideoTour from "@/sections/Masterplan/Amenidades/AmenidadesVideoTour";
import AmenidadesFotoRenders from "@/sections/Masterplan/Amenidades/AmenidadesFotoRenders";
import AmenidadesRecorridos from "@/sections/Masterplan/Amenidades/AmenidadesRecorridos";
import LoteLayout from "@/layouts/Lotes/LoteLayout";
import LoteVista360 from "@/sections/Masterplan/Lotes/LoteVista360";
import LoteInformacion from "@/sections/Masterplan/Lotes/LoteInformacion";

export default function Router() {
  return (
    <VideoPlayerProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<VideoComponentLayout />}>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />

              {/* Masterplan */}
              <Route path="/masterplan" element={<Masterplan />} />
              <Route path="/masterplan/lotes" element={<MasterplanLotes />} />

              {/* Lotes */}
              <Route path="/masterplan/lotes/:id" element={<LoteLayout />}>
                <Route path="vista-360" element={<LoteVista360 />} />
                <Route path="informacion" element={<LoteInformacion />} />
              </Route>

              {/* Amenidades */}
              <Route
                path="/masterplan/amenidades"
                element={<AmenidadesLayout />}
              >
                <Route index element={<MasterplanAmenidades />} />
                <Route
                  path="/masterplan/amenidades/informacion"
                  element={<AmenidadesInformacion />}
                />
                <Route
                  path="/masterplan/amenidades/video-tour"
                  element={<AmenidadesVideoTour />}
                />
                <Route
                  path="/masterplan/amenidades/foto-renders"
                  element={<AmenidadesFotoRenders />}
                />
                <Route
                  path="/masterplan/amenidades/recorridos-virtuales"
                  element={<AmenidadesRecorridos />}
                />
              </Route>

              {/* Ubicación */}
              <Route path="/ubicacion" element={<Ubicacion />} />

              {/* Nosotros */}
              <Route path="/nosotros" element={<Nosotros />} />

              {/* Contacto */}
              <Route path="/contacto" element={<Contacto />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </VideoPlayerProvider>
  );
}

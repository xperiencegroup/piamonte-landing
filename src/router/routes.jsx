import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home.jsx";
import Ubicacion from "@/pages/Ubicacion";
import Nosotros from "@/pages/Nosotros";
import Contacto from "@/pages/Contacto";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Masterplan from "@/pages/Masterplan";
import MasterplanLotes from "@/sections/Masterplan/MasterplanLotes";
import MasterplanAmenidades from "@/sections/Masterplan/MasterplanAmenidades";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/masterplan" element={<Masterplan />} />
          <Route path="/masterplan/lotes" element={<MasterplanLotes />} />
          <Route
            path="/masterplan/amenidades"
            element={<MasterplanAmenidades />}
          />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

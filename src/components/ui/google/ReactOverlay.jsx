import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useMap } from "@vis.gl/react-google-maps";

// 1. Declaramos la clase FUERA del componente usando una función.
// Pasamos el objeto "google" como parámetro para asegurar que exista.
function createOverlayClass(google) {
  return class CustomOverlay extends google.maps.OverlayView {
    constructor(bounds, container) {
      super();
      this.bounds = bounds;
      this.container = container;
    }

    onAdd() {
      const panes = this.getPanes();
      if (panes?.overlayMouseTarget) {
        panes.overlayMouseTarget.appendChild(this.container);
      }
    }

    draw() {
      const projection = this.getProjection();
      if (!projection) return;

      const sw = projection.fromLatLngToDivPixel(
        new google.maps.LatLng(this.bounds.south, this.bounds.west),
      );
      const ne = projection.fromLatLngToDivPixel(
        new google.maps.LatLng(this.bounds.north, this.bounds.east),
      );

      if (sw && ne) {
        this.container.style.left = `${sw.x}px`;
        this.container.style.top = `${ne.y}px`;
        this.container.style.width = `${ne.x - sw.x}px`;
        this.container.style.height = `${sw.y - ne.y}px`;
      }
    }

    onRemove() {
      if (this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
      }
    }
  };
}

// 2. El componente principal, limpio de declaraciones de clase.
export default function ReactBoundsOverlay({ bounds, children }) {
  const map = useMap();
  const [container, setContainer] = useState(null);

  useEffect(() => {
    if (!map || !window.google) return;

    // Creamos el div contenedor aquí
    const div = document.createElement("div");
    div.style.position = "absolute";

    // Generamos la clase pasándole el objeto global de google
    const OverlayClass = createOverlayClass(window.google);

    // Instanciamos el overlay
    const overlay = new OverlayClass(bounds, div);
    overlay.setMap(map);
    setContainer(div);

    return () => {
      overlay.setMap(null);
    };
  }, [map, bounds]);

  if (!container) return null;

  return createPortal(children, container);
}

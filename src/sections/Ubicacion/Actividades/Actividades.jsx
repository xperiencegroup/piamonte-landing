import Gallery from "@/components/ui/shared/gallery/Gallery";
import PaperTear from "@/assets/images/Masterplan/AmenidadesInformacion/Papeles/paperTear.png";
import seria_cedros from "@/assets/images/Ubicación/actividades/seria_cedros.jpg";
import monterreal from "@/assets/images/Ubicación/actividades/monterreal.jpg";
import areteaga from "@/assets/images/Ubicación/actividades/arteaga.jpg";
import bodega_vientos from "@/assets/images/Ubicación/actividades/bodega_vientos.jpg";
import huachichil from "@/assets/images/Ubicación/actividades/huachichil.jpg";
import monterrey from "@/assets/images/Ubicación/actividades/monterrey.jpeg";
import saltillo from "@/assets/images/Ubicación/actividades/saltillo.jpg";
import san_antonio from "@/assets/images/Ubicación/actividades/san-antonio.jpeg";
import sierra_marta from "@/assets/images/Ubicación/actividades/sierra_marta.webp";

const ACTIVITIES = [
  {
    id: 1,
    label: "Seria los cedros",
    tiempo: "42",
    distancia: "43.3",
    image: seria_cedros,
  },
  {
    id: 2,
    label: "Monterreal",
    tiempo: "42",
    distancia: "43.3",
    image: monterreal,
  },
  {
    id: 3,
    label: "Bodega de los vientos",
    tiempo: "16",
    distancia: "14.1",
    image: bodega_vientos,
  },
  {
    id: 4,
    label: "Arteaga",
    tiempo: "25",
    distancia: "26",
    image: areteaga,
  },
  {
    id: 5,
    label: "Sierra de la Marta",
    tiempo: "1 hr 18",
    distancia: "55.9",
    image: sierra_marta,
  },
  {
    id: 6,
    label: "Huachichil",
    tiempo: "14",
    distancia: "15.3",
    image: huachichil,
  },
  {
    id: 7,
    label: "Próximamente",
    tiempo: "",
    distancia: "",
    image: "",
  },
  {
    id: 8,
    label: "San Antonio de las alazanas",
    tiempo: "26",
    distancia: "30.9",
    image: san_antonio,
  },
  {
    id: 9,
    label: "Saltillo",
    tiempo: "36",
    distancia: "38.9",
    image: saltillo,
  },
  {
    id: 10,
    label: "Monterrey",
    tiempo: "1 hr 40",
    distancia: "105",
    image: monterrey,
  },
];

export default function Actividades() {
  const slides = ACTIVITIES.map((item) => {
    return (
      <div
        key={item.label}
        className="relative flex shrink-0 flex-col w-[clamp(103.71px,17.890625vw,229px)] h-[clamp(174.69px,30.15625vw,386px)] bg-nude dark:bg-verde p-[clamp(7px,1.25vw,16px)] gap-[clamp(7px,1.25vw,16px)]"
      >
        {/* Image */}
        <div className="relative w-full flex-10">
          {item.image && (
            <img
              src={item.image}
              alt={`Imagen de ${item.label}`}
              draggable={false}
              className="absolute w-full h-full object-cover"
            />
          )}
        </div>
        <div className="w-full flex-1 flex justify-center items-center gap-[clamp(7px,1.25vw,16px)]">
          {item.label === "Próximamente" ? (
            <>
              <p className="text-caption text-gris">Próximamente</p>
            </>
          ) : (
            <>
              <div className="text-center">
                <p className="text-card-subtitle text-cafe-claro dark:text-nude uppercase">
                  Tiempo
                </p>
                <p className="text-gris text-caption dark:text-nude">
                  {item.tiempo}
                </p>
              </div>
              <div className="h-[clamp(19.03px,3.28125vw,42px)] border border-cafe-claro dark:border-nude" />
              <div className="text-center">
                <p className="text-card-subtitle text-cafe-claro dark:text-nude uppercase">
                  Distancia
                </p>
                <p className="text-gris dark:text-nude text-caption uppercase">
                  {item.distancia} km
                </p>
              </div>
            </>
          )}
        </div>

        {/* Label Title */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4/8 w-[clamp(105.57px,18.203125vw,228px)] h-[clamp(32.63px,5.625vw,72px)]">
          <div className="absolute w-full h-full flex justify-center items-center">
            <img
              src={PaperTear}
              alt="Imagen de fondo de textura de papel"
              className="absolute inset-0 w-full h-full"
            />
            <p className="relative z-10 text-frase text-center font-selinea text-cafe dark:text-verde-claro leading-[45%] tracking-tight">
              {item.label}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="absolute top-0 left-0 z-5 w-full h-dvh flex justify-center items-center">
      <div className="w-full max-w-[1280px] flex h-[clamp(217.5px,37.5vw,480px)] px-[clamp(13.59px,2.34375vw,30px)] gap-[clamp(8.61px,1.484375vw,19px)] overflow-x-hidden">
        <Gallery slides={slides} />
      </div>
    </div>
  );
}

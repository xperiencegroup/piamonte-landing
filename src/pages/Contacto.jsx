import InstagramIcon from "@/assets/icons/contact/InstagramIcon";
import LinkedinIcon from "@/assets/icons/contact/LinkedinIcon";
import SendIcon from "@/assets/icons/contact/SendIcon";
import XIcon from "@/assets/icons/contact/XIcon";
import PaperBackground from "@/assets/images/Contacto/paperBackground.svg";

const SOCIAL_LINKS = [
  {
    id: "instagram",
    icon: InstagramIcon,
    href: "#",
  },
  {
    id: "linkedin",
    icon: LinkedinIcon,
    href: "#",
  },
  {
    id: "x_twitter",
    icon: XIcon,
    href: "#",
  },
];

export default function Contacto() {
  return (
    <div className="relative w-full h-dvh flex justify-center items-center">
      {/* Overlay gradiente */}
      <div className="gradient-inicio" />

      <div className="flex flex-col w-full max-w-[1280px] h-full max-h-[476px] flex justify-center items-center px-[clamp(13px,2.34375vw,30px)] lg:gap-[clamp(7px,1.25vw,16px)]">
        <div className="flex w-full">
          {/* CONTENT */}
          <div className="flex-1 flex items-center text-cafe dark:text-nude text-center">
            <div className="relative flex flex-col w-[clamp(213px,37.578125vw,481px)] h-[clamp(127px,22.265625vw,285px)]">
              {/* Image */}
              <img
                src={PaperBackground}
                alt="Imagen de fondo papel"
                className="absolute -z-10 inset-0 w-full h-full object-cover overflow-visible transition-opacity delay-50 dark:opacity-0"
              />

              {/* Dirección */}
              <div className="flex-1">
                <h3 className="text-contact-title font-baskerville">
                  Dirección
                </h3>
                <p className="text-paragraph">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit, sed do <br /> eiusmod tempor incididunt ut labore et
                </p>
              </div>

              {/* Horario */}
              <div className="flex-1">
                <h3 className="text-contact-title font-baskerville">Horario</h3>
                <p className="text-paragraph">
                  Lorem ipsum dolor sit <br /> amet consectetur <br />{" "}
                  adipiscing elit
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="flex-1 flex h-full justify-end">
            <form className="flex flex-col w-[clamp(213px,37.578125vw,481px)] text-center gap-3 lg:gap-[clamp(11px,1.875vw,24px)]">
              {/* Nombre */}
              <div className="flex flex-col lg:gap-[clamp(9px,1.5625vw,20px)]">
                <p className="text-contact-title font-baskerville text-cafe dark:text-nude">
                  Nombre completo
                </p>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                  pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+"
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(
                      /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,
                      "",
                    );
                  }}
                  className="w-full p-[clamp(7px,1.25vw,16px)] bg-gris placeholder:text-nude placeholder:text-caption text-caption text-nude"
                />
              </div>

              {/* Correo Electrónico */}
              <div className="flex flex-col lg:gap-[clamp(9px,1.5625vw,20px)]">
                <p className="text-contact-title font-baskerville text-cafe dark:text-nude">
                  Correo electrónico
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-[clamp(7px,1.25vw,16px)] bg-gris placeholder:text-nude placeholder:text-caption text-caption text-nude"
                />
              </div>

              {/* Número de teléfono */}
              <div className="flex flex-col lg:gap-[clamp(9px,1.5625vw,20px)]">
                <p className="text-contact-title font-baskerville text-cafe dark:text-nude">
                  Número de teléfono
                </p>
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Número"
                  pattern="[0-9]+"
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                  className="w-full p-[clamp(7px,1.25vw,16px)] bg-gris placeholder:text-nude placeholder:text-caption text-caption text-nude"
                />
              </div>

              <button
                type="submit"
                className="flex self-end justify-center items-center gap-[clamp(4px,0.78125vw,10px)] lg:p-[clamp(7px,1.25vw,16px)] hover:cursor-pointer"
              >
                <span className="flex justify-center items-center size-[clamp(11px,1.875vw,24px)]">
                  <SendIcon className="w-[clamp(8px,1.464844vw,18.75px)] h-[clamp(9px,1.640625vw,21px)] text-gris" />
                </span>
                <span className="text-boton-normal text-gris uppercase">
                  Enviar
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Caption and social links */}
        <div className="w-full h-fit flex max-lg:flex-col max-lg:gap-2">
          <div className="flex-1 max-lg:self-center">
            <p className="text-caption text-gris dark:text-amarillo">
              © Piamonte residencial. All rights reserved
            </p>
          </div>
          <div className="flex-1 max-lg:self-center flex justify-end">
            <div className="flex w-[clamp(213px,37.578125vw,481px)] justify-between">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className="size-[clamp(12px,2.03125vw,26px)]"
                  >
                    <Icon className="w-full h-full text-verde dark:text-amarillo" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

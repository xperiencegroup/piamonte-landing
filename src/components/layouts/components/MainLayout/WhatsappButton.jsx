import WhatsappIcon from "@/assets/icons/shared/whatsappIcon";

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-0 z-10 flex self-end w-fit h-[clamp(31px,5.46875vw,70px)] justify-center items-center landscape:pr-[clamp(13px,2.34375vw,30px)] portrait:self-end portrait:pr-4 portrait:pb-4">
      <a
        href="https://wa.me/528145933236"
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-[clamp(26.27px,4.53125vw,58px)] justify-center items-center hover:cursor-pointer"
      >
        <WhatsappIcon className="w-[clamp(15.41px,2.65625vw,34px)] portrait:size-[26px] text-whatsapp" />
      </a>
    </div>
  );
}

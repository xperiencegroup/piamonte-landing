import WhatsappIcon from "@/assets/icons/shared/whatsappIcon";

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-0 z-10 flex self-end w-fit h-[clamp(31px,5.46875vw,70px)] justify-center items-center landscape:pr-[clamp(13px,2.34375vw,30px)] portrait:self-end portrait:pr-4 portrait:pb-4">
      <button className="flex size-[clamp(26.27px,4.53125vw,58px)] justify-center items-center">
        <WhatsappIcon className="size-[clamp(12.69px,2.1875vw,28px)] portrait:size-[26px] text-whatsapp" />
      </button>
    </div>
  );
}

import KuulaComponent from "@/components/ui/shared/kuula/KuulaComponent";

export default function AmenidadesRecorridos() {
  return (
    <>
      {/* Background */}
      <div className="absolute -z-10 inset-0 w-full h-dvh">
        {/* Overlay */}
        <div className="absolute inset-0 bg-nude dark:bg-verde" />
      </div>

      <div className="relative z-0 w-full h-full">
        <div className="flex relative w-full h-full justify-center max-lg:landscape:items-end portrait:items-center lg:items-center pt-[clamp(38px,6vw,75px)]">
          <div className="relative w-[clamp(540px,95vw,1216px)] h-[clamp(120px,58.67dvh,220px)] h-full lg:max-h-[617px]">
            <KuulaComponent
              src={
                "https://kuula.co/share/collection/7M6Wh?logo=-1&info=0&fs=0&vr=0&zoom=1&initload=1&thumbs=-1&margin=30&alpha=0.81&inst=0&keys=0"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

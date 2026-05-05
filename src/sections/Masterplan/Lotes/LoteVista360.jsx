import KuulaComponent from "@/components/ui/shared/kuula/KuulaComponent";

export default function LoteVista360() {
  return (
    <>
      {/* Background */}
      <div className="absolute -z-10 inset-0 w-full h-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-nude dark:bg-verde" />
      </div>

      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="flex relative w-full h-full justify-center max-lg:landscape:items-end portrait:items-center lg:items-center">
          <div className="relative w-full h-full">
            {/* Overlay */}
            <div className="absolute inset-0 z-10 w-full h-full linear-gradient-normal pointer-events-none" />
            <KuulaComponent
              src={
                "https://kuula.co/share/collection/7M6Wc?logo=-1&info=0&fs=0&vr=0&zoom=1&initload=1&thumbs=-1&margin=30&alpha=0.81&inst=0&keys=0"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

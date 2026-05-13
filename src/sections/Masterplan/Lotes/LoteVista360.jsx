import KuulaComponent from "@/components/ui/shared/kuula/KuulaComponent";
import { useParams } from "react-router";

const ID_LOTES = {
  1: "LlF0H",
  2: "LlF0M",
  3: "LlF0T",
  4: "LlF0d",
  5: "LlF0n",
  6: "LlF06",
  7: "LlF08",
  8: "LlF0g",
  9: "LlF0x",
  10: "LlF0C",
  11: "LlF0V",
  12: "LlF0j",
  13: "LlF0s",
  14: "LlF0w",
  15: "LlF02",
  16: "LlF03",
  17: "LlF0R",
  18: "LlF0W",
  19: "LlF0y",
  20: "LlF0z",
  21: "LlF0Q",
  22: "LlF0S",
  23: "LlF0B",
  24: "LlF0r",
  25: "LlF0t",
  26: "LlFG4",
  27: "LlFG7",
  28: "LlFGN",
  29: "LlFGh",
  30: "LlFGL",
  31: "LlFGm",
  32: "LlFGp",
  33: "LlFG0",
  34: "LlFGG",
  35: "LlFGf",
  36: "LlFGl",
  37: "LlFGP",
  38: "LlFGY",
  39: "LlFGk",
  40: "LlFGq",
  41: "LlFGv",
  42: "LlFG9",
  43: "LlFGF",
  44: "LlFGJ",
  45: "LlFGX",
  46: "LlFGc",
  47: "LlFGK",
  48: "LlFGZ",
  49: "LlFGb",
  50: "LlFG1",
  51: "LlFGH",
  52: "LlFGM",
  53: "LlFGT",
  54: "LlFGd",
  55: "LlFGn",
  56: "LlFG6",
  57: "LlFG8",
  58: "LlFGg",
  59: "LlFGx",
  60: "LlFGC",
  61: "LlFGV",
  62: "LlFGj",
  63: "LlFGw",
  64: "LlFG2",
  65: "LlFG3",
  66: "LlFGW",
  67: "LlFGy",
  68: "LlFGz",
  69: "LlFGQ",
  70: "LlFGB",
  71: "LlFGr",
  72: "LlFGt",
  73: "LlFf4",
  74: "LlFf7",
  75: "LlFfN",
  76: "LlFfh",
  77: "LlFfL",
};

export default function LoteVista360() {
  const { id } = useParams();
  const loteId = ID_LOTES[id];

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
            <div className="absolute inset-0 z-10 w-full h-full linear-gradient-bottom pointer-events-none" />

            <KuulaComponent
              src={`https://kuula.co/share/${loteId}/collection/7M6Wc?logo=-1&info=0&fs=0&vr=0&zoom=1&initload=1&thumbs=-1&margin=30&alpha=0.81&inst=0&keys=0&yaw=20`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

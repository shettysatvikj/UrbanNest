import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="w-full select-none">

      {/* ===== IMAGE CONTAINER ===== */}
      <div className="relative overflow-hidden rounded-[40px] shadow-[0_25px_70px_rgba(0,0,0,0.12)] w-full h-[280px] sm:h-[320px] md:h-[480px] group">

        {/* AFTER IMAGE */}
        <img
          src={afterImage}
          alt="After Transformation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
          decoding="async"
        />

        {/* BEFORE IMAGE */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
          }}
        >
          <img
            src={beforeImage}
            alt="Before Transformation"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/90 shadow-md z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-white flex items-center justify-center gap-1 transition">
            <MoveLeft size={14} className="text-[#A67C52]" />
            <MoveRight size={14} className="text-[#A67C52]" />
          </div>
        </div>

        {/* Invisible range */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0"
        />

        {/* Desktop Labels */}
        <div className="hidden md:block absolute top-6 left-6 z-20 pointer-events-none">
          <span className="px-5 py-2 rounded-full backdrop-blur-md bg-black/40 border border-white/20 text-white text-xs uppercase tracking-[0.2em] shadow-lg">
            {beforeLabel}
          </span>
        </div>

        <div className="hidden md:block absolute top-6 right-6 z-20 pointer-events-none">
          <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#A67C52]/80 border border-[#A67C52] text-white text-xs uppercase tracking-[0.2em] shadow-lg">
            {afterLabel}
          </span>
        </div>

      </div>

      {/* ✅ Mobile Labels Below Image */}
      <div className="flex md:hidden justify-between mt-4 text-sm font-medium text-[#6A625A] px-2">
        <span>{beforeLabel}</span>
        <span>{afterLabel}</span>
      </div>

    </div>
  );
}

export default BeforeAfterSlider;

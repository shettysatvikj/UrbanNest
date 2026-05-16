import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="relative overflow-hidden rounded-[40px] shadow-[0_25px_70px_rgba(0,0,0,0.12)] w-full h-[320px] md:h-[480px] select-none group">
      
      {/* ===== AFTER IMAGE (Base / Bottom) ===== */}
      <img
        src={afterImage}
        alt="After Transformation"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* ===== BEFORE IMAGE (Top / Clipped) ===== */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={beforeImage}
          alt="Before Transformation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ width: "100%", maxWidth: "none" }}
        />
      </div>

      {/* ===== SLIDER LINE & HANDLE ===== */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20 pointer-events-none transition-all duration-75"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white flex items-center justify-center text-[#1C1C1C] gap-1 group-hover:scale-110 transition duration-300">
          <MoveLeft size={16} className="text-[#A67C52]" />
          <MoveRight size={16} className="text-[#A67C52]" />
        </div>
      </div>

      {/* ===== INVISIBLE INPUT RANGE (Handles Drag & Touch Flawlessly) ===== */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0"
      />

      {/* ===== LABELS ===== */}
      <div className="absolute top-6 left-6 z-20 pointer-events-none">
        <span className="px-5 py-2 rounded-full backdrop-blur-md bg-black/40 border border-white/20 text-white text-xs uppercase tracking-[0.2em] shadow-lg">
          {beforeLabel}
        </span>
      </div>

      <div className="absolute top-6 right-6 z-20 pointer-events-none">
        <span className="px-5 py-2 rounded-full backdrop-blur-md bg-[#A67C52]/80 border border-[#A67C52] text-white text-xs uppercase tracking-[0.2em] shadow-lg">
          {afterLabel}
        </span>
      </div>

      {/* Drag Instruction Overlay (Fades on hover) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-60 group-hover:opacity-0 transition duration-300 hidden md:block">
        <span className="px-6 py-2.5 rounded-full backdrop-blur-md bg-black/30 text-white text-xs tracking-wider">
          ↔ Drag to interact
        </span>
      </div>

    </div>
  );
}

export default BeforeAfterSlider;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Helmet } from "react-helmet-async";


function Estimate() {
  const [size, setSize] = useState(140);
  const [material, setMaterial] = useState("Laminate");
  const [showForm, setShowForm] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);

  const baseRate =
    material === "Laminate"
      ? 1800
      : material === "Acrylic"
      ? 2300
      : 2700;

  const estimatedCost = size * baseRate;

  // Smooth count-up animation
  useEffect(() => {
    if (unlocked) {
      let start = 0;
      const duration = 800;
      const increment = estimatedCost / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= estimatedCost) {
          setAnimatedValue(estimatedCost);
          clearInterval(counter);
        } else {
          setAnimatedValue(Math.floor(start));
        }
      }, 16);
    } else {
      setAnimatedValue(estimatedCost);
    }
  }, [unlocked, estimatedCost]);

  const formatted = animatedValue.toLocaleString("en-IN");

  let numericIndex = 0;
  <Helmet>
  <title>Modular Kitchen Cost Calculator Mumbai | Get Instant Estimate</title>
  <meta
    name="description"
    content="Use our modular kitchen cost calculator to get an instant estimate in Mumbai. Transparent pricing for laminate, acrylic and PU finish kitchens."
  />
  <meta
    name="keywords"
    content="Modular kitchen cost Mumbai, Kitchen cost calculator Mumbai, Interior cost estimate Mumbai"
  />
</Helmet>

  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#1C1C1C] flex items-center justify-center px-8 py-32">

      <div className="max-w-6xl w-full">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-xs text-[#A67C52] mb-4">
            Instant Estimate
          </p>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight">
            Configure Your
            <span className="block font-medium text-[#A67C52]">
              Kitchen Investment
            </span>
          </h1>
        </div>

        {/* MAIN PANEL */}
        <div className="bg-white rounded-[40px] p-16 shadow-[0_30px_90px_rgba(0,0,0,0.06)] grid md:grid-cols-2 gap-20">

          {/* CONTROLS */}
          <div className="space-y-14">

            <div>
              <div className="flex justify-between mb-4">
                <p className="uppercase text-xs tracking-[0.2em] text-[#A67C52]">
                  Kitchen Size
                </p>
                <p className="text-xl font-light">
                  {size} <span className="text-sm text-[#6A625A]">sq ft</span>
                </p>
              </div>

              <input
                type="range"
                min="60"
                max="300"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full accent-[#A67C52]"
              />
            </div>

            <div>
              <p className="uppercase text-xs tracking-[0.2em] text-[#A67C52] mb-6">
                Finish Selection
              </p>

              <div className="flex gap-4 flex-wrap">
                {["Laminate", "Acrylic", "PU Finish"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setMaterial(item)}
                    className={`px-7 py-3 rounded-full border text-sm transition ${
                      material === item
                        ? "bg-[#A67C52] text-white border-[#A67C52]"
                        : "border-[#E6DDD3] text-[#6A625A] hover:border-[#A67C52] hover:text-[#A67C52]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* PRICE SECTION */}
          <div className="flex flex-col justify-center">

            <p className="uppercase text-xs tracking-[0.3em] text-[#6A625A] mb-6">
              Estimated Investment
            </p>

            <div className="text-6xl md:text-7xl font-light flex">
              ₹{" "}
              {formatted.split("").map((char, index) => {
                const isNumber = /\d/.test(char);
                if (isNumber) numericIndex++;

                const shouldMask =
                  !unlocked && isNumber && numericIndex <= 2;

                return (
                  <AnimatePresence key={index}>
                    {shouldMask ? (
                      <motion.span
                        initial={{ y: 0 }}
                        animate={{ y: 0 }}
                        className="inline-block w-[1ch]"
                      >
                        ?
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ y: unlocked ? 40 : 0, opacity: unlocked ? 0 : 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    )}
                  </AnimatePresence>
                );
              })}
            </div>

            {!unlocked && (
              <button
                onClick={() => setShowForm(true)}
                className="mt-12 px-12 py-4 border border-[#A67C52] text-[#A67C52] rounded-full hover:bg-[#A67C52] hover:text-white transition"
              >
                Reveal Full Estimate
              </button>
            )}

            {unlocked && (
              <button className="mt-12 px-12 py-4 bg-[#A67C52] text-white rounded-full hover:opacity-90 transition">
                Book Free Consultation
              </button>
            )}

          </div>

        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {showForm && !unlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-12 rounded-[40px] w-full max-w-md shadow-xl relative"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-6 right-6 text-[#6A625A]"
              >
                <X size={18} />
              </button>

              <h3 className="text-2xl font-light mb-8 text-center">
                Unlock Your Estimate
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setUnlocked(true);
                  setShowForm(false);
                }}
                className="space-y-6"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border border-[#E6DDD3]"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-xl border border-[#E6DDD3]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl border border-[#E6DDD3]"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-[#A67C52] text-white rounded-full hover:opacity-90 transition"
                >
                  Unlock Estimate
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Estimate;
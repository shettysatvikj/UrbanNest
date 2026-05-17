import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// You might need to install and import some icons from lucide-react
import { Check, Award, SlidersHorizontal } from "lucide-react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import FreeDesignModal from "../components/FreeDesignModal";
import { useState } from "react";

import { Helmet } from "react-helmet-async";


const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function ModularKitchenMumbai() {
  const [show3DModal, setShow3DModal] = useState(false);
  <Helmet>
  <title>Modular Kitchen in Mumbai | Factory-Finished Kitchens</title>
  <meta
    name="description"
    content="Looking for modular kitchen in Mumbai? Get factory-finished kitchens with humidity-resistant boards and transparent pricing."
  />
</Helmet>
  return (
    <div className="bg-[#E6DFD6] text-[#1C1C1C] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="pt-40 pb-28 text-center px-6 bg-[#D4C8BB]">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <h1 className="text-5xl md:text-6xl font-light leading-tight">
            Modular Kitchens,
            <span className="block font-medium text-[#8F735A]">
              Engineered for Mumbai.
            </span>
          </h1>
          <p className="mt-8 text-lg text-[#2E2A26] max-w-3xl mx-auto">
            Experience factory-finished precision, humidity-resistant materials,
            and intelligent design crafted for the modern Mumbai apartment.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="px-14 py-5 bg-[#1C1C1C] text-white rounded-full text-lg shadow-lg hover:scale-105 transition"
            >
              Get a Free Kitchen Quote
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= MUMBAI-SPECIFIC CHALLENGES ================= */}
      <section className="py-44 px-10 bg-[#E6DFD6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light">
              The Mumbai Kitchen Challenge
            </h2>
            <p className="mt-6 text-[#2E2A26] max-w-2xl mx-auto">
              We understand the unique demands of a Mumbai home.
              Our kitchens are built to solve them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="p-8 bg-[#D9CEC1] rounded-2xl">
              <h3 className="text-2xl font-medium mb-4 text-[#8F735A]">Humidity Resistance</h3>
              <p>Using only Marine Grade Plywood and HDHMR boards that don't swell or warp during monsoons.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 bg-[#D9CEC1] rounded-2xl">
              <h3 className="text-2xl font-medium mb-4 text-[#8F735A]">Space Optimization</h3>
              <p>Smart layouts and hardware to maximize storage and functionality in compact apartment kitchens.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 bg-[#D9CEC1] rounded-2xl">
              <h3 className="text-2xl font-medium mb-4 text-[#8F735A]">Heavy-Duty Use</h3>
              <p>Designed for the rigors of Indian cooking with durable countertops and easy-to-clean finishes.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= BEFORE / AFTER KITCHEN TRANSFORMATION ================= */}
<section className="py-40 px-8 bg-[#F6F1EA]">
  <div className="max-w-6xl mx-auto">
    
    <div className="text-center mb-20">
      <p className="uppercase tracking-[0.3em] text-xs text-[#A67C52] mb-4">
        Real Results
      </p>
      <h2 className="text-5xl font-light tracking-tight">
        From Cluttered to <span className="text-[#A67C52] font-medium">Flawless</span>
      </h2>
      <p className="mt-6 text-[#6A625A] max-w-2xl mx-auto">
        See how we transformed a standard, cramped Mumbai kitchen into an optimized, moisture-resistant modular masterpiece.
      </p>
    </div>

    {/* Slider Component */}
    <BeforeAfterSlider
      beforeImage="/Before Kitchen.png" // Put old kitchen image here
      afterImage="/After Kitchen.png"  // Put new luxury kitchen here
      beforeLabel="Old Kitchen (Carpentry)"
      afterLabel="UrbanNest Modular Kitchen"
    />

  </div>
</section>
      
      {/* ================= KITCHEN LAYOUTS ================= */}
      <section className="py-44 px-10 bg-[#D4C8BB]">

  <h2 className="text-5xl font-light text-center mb-24">
    Layouts for Every Floorplan
  </h2>

  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

    {[
      { title: "L-Shape", image: "/L-shape.jpg" },
      { title: "U-Shape", image: "/U-shape.jpg" },
      { title: "Parallel", image: "/Parallel.jpg" },
      { title: "Island", image: "/island.jpg" }
    ].map((layout) => (
      <div key={layout.title} className="group text-center">

        {/* Image Container */}
        <div className="relative overflow-hidden rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.15)]">

          <img
            src={layout.image}
            alt={`${layout.title} Kitchen Layout`}
            loading="lazy"
  decoding="async"
            className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Premium Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        </div>

        <h3 className="text-xl font-medium mt-6">
          {layout.title} Kitchen
        </h3>

      </div>
    ))}

  </div>

</section>
      {/* ================= MATERIALS & FINISHES ================= */}
      <section className="py-44 px-10 bg-[#E6DFD6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">
            <div>
              <img
                src="/Material.jpg" // Placeholder image for finishes
                loading="lazy"
  decoding="async"
                className="rounded-[35px] shadow-[0_35px_70px_rgba(0,0,0,0.3)]"
              />
            </div>
            <div>
              <h2 className="text-5xl font-light mb-8">
                Premium Materials. <br/> Transparent Choices.
              </h2>
              <p className="text-[#2E2A26] mb-10 leading-relaxed">
                Choose from a curated range of high-quality finishes and hardware, all backed by our 10-year warranty.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3"><span className="text-[#8F735A] font-bold">✓</span> HDHMR & Marine Plywood</li>
                <li className="flex items-center gap-3"><span className="text-[#8F735A] font-bold">✓</span> Acrylic, Laminate, PU Finishes</li>
                <li className="flex items-center gap-3"><span className="text-[#8F735A] font-bold">✓</span> Hettich & Blum Hardware</li>
                <li className="flex items-center gap-3"><span className="text-[#8F735A] font-bold">✓</span> Quartz & Granite Countertops</li>
              </ul>
            </div>
        </div>
      </section>

      {/* ================= PRICING PREVIEW ================= */}
      <section className="py-44 px-10 bg-[#D9CEC1] text-center">
        <h2 className="text-5xl font-light">
          Transparent Pricing, No Surprises.
        </h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Our modular kitchens start from ₹1.5 Lakhs. Get a detailed Bill of Quantities (BOQ) before you pay a single rupee.
        </p>
        <div className="mt-10">
          <Link
            to="/pricing"
            className="px-14 py-5 border border-[#1C1C1C] rounded-full text-lg shadow-lg hover:bg-[#1C1C1C] hover:text-white transition"
          >
            Explore Pricing Details
          </Link>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-44 text-center bg-[#8F735A] text-white px-10">
        <h2 className="text-5xl font-light mb-12">
          Ready to Build Your Dream Kitchen?
        </h2>
        <p className="max-w-2xl mx-auto mb-10">
          Let our designers create a free, no-obligation 3D model of your new kitchen.
        </p>
       <button   className="px-14 py-5 bg-white text-[#1C1C1C] rounded-full text-lg shadow-lg hover:scale-105 transition" onClick={() => setShow3DModal(true)}>
  Get Free 3D Design
</button>
         
       
      </section>
<FreeDesignModal
  isOpen={show3DModal}
  onClose={() => setShow3DModal(false)}
/>
    </div>
  );
}

export default ModularKitchenMumbai;

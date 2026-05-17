import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { Helmet } from "react-helmet-async";


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function Interiors() {
  
  return (
    <>
    <Helmet>
  <title>2BHK & 3BHK Home Interiors in Mumbai | Turnkey Interior Solutions</title>
  <meta
    name="description"
    content="Premium 2BHK and 3BHK home interiors in Mumbai. Complete turnkey interior solutions with modular kitchens, wardrobes, false ceilings, and smart storage."
  />
  <meta
    name="keywords"
    content="2BHK interiors Mumbai, 3BHK interiors Mumbai, Full home interiors Mumbai, Turnkey interior Mumbai"
  />
</Helmet>
    <div className="bg-[#E6DFD6] text-[#1C1C1C] overflow-hidden">

      
        {/* ================= HERO ================= */}
        <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-10 text-center bg-[#D4C8BB]">

          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight">
              Complete Home Interiors
              <span className="block font-medium text-[#8F735A]">
                Designed for Modern Mumbai Living.
              </span>
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-lg max-w-3xl mx-auto text-[#2E2A26]">
              From 2BHK apartments to luxury 3BHK residences,
              we deliver turnkey interiors with precision,
              transparency, and premium craftsmanship.
            </p>

            <div className="mt-8 md:mt-12">
              <Link
                to="/contact"
                className="inline-block px-8 sm:px-10 md:px-14 py-3 md:py-5 bg-[#1C1C1C] text-white rounded-full text-sm sm:text-base md:text-lg shadow-lg hover:scale-105 transition"
              >
                Get Free Interior Consultation
              </Link>
            </div>
          </motion.div>

        </section>

     {/* ================= BEFORE / AFTER LIVING ROOM TRANSFORMATION ================= */}
<section className="py-40 px-8 bg-[#F6F1EA]">
  <div className="max-w-6xl mx-auto">
    
    <div className="text-center mb-20">
      <p className="uppercase tracking-[0.3em] text-xs text-[#A67C52] mb-4">
        Complete Overhaul
      </p>
      <h2 className="text-5xl font-light tracking-tight">
        Bare Walls to <span className="text-[#A67C52] font-medium">Bespoke Luxury</span>
      </h2>
      <p className="mt-6 text-[#6A625A] max-w-2xl mx-auto">
        We handle everything from civil changes and wiring to custom furniture and ambient lighting. Drag the slider to experience the change.
      </p>
    </div>

    {/* Slider Component */}
    <BeforeAfterSlider
      beforeImage="/Before-Living.webp" // Put raw/empty room image here
      afterImage="/After-Living.webp"   // Put finished luxury living room here
      beforeLabel="Builder Finish (Bare)"
      afterLabel="Turnkey Interior Execution"
    />

  </div>
</section>

      {/* ================= PACKAGES ================= */}
      <section className="py-44 px-10 bg-[#D9CEC1] text-center">

        <h2 className="text-5xl font-light mb-20">
          Designed for Every Home Size
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div className="p-12 bg-[#E6DFD6] rounded-3xl shadow-md">
            <h3 className="text-3xl font-medium mb-6 text-[#8F735A]">
              2BHK Interiors
            </h3>
            <p className="text-[#2E2A26] mb-6">
              Perfectly optimized layouts, smart storage,
              and elegant finishes tailored for compact
              Mumbai apartments.
            </p>
            <p className="font-medium">
              Starting from ₹4.5 Lakhs*
            </p>
          </div>

          <div className="p-12 bg-[#E6DFD6] rounded-3xl shadow-md">
            <h3 className="text-3xl font-medium mb-6 text-[#8F735A]">
              3BHK Interiors
            </h3>
            <p className="text-[#2E2A26] mb-6">
              Spacious, cohesive interiors with premium
              finishes and personalized design detailing.
            </p>
            <p className="font-medium">
              Starting from ₹6.5 Lakhs*
            </p>
          </div>

        </div>

      </section>

      {/* ================= WHAT'S INCLUDED ================= */}
      <section className="py-44 px-10 bg-[#E6DFD6] text-center">

        <h2 className="text-5xl font-light mb-24">
          What’s Included
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-left">

          {[
            "Modular Kitchen",
            "Wardrobes",
            "TV Units & Living Room Storage",
            "False Ceiling & Lighting",
            "Study Units",
            "Complete Turnkey Execution"
          ].map((item, index) => (
            <div key={index} className="text-lg">
              <span className="text-[#8F735A] font-bold">✓</span> {item}
            </div>
          ))}

        </div>

      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-44 px-10 bg-[#D4C8BB] text-center">

        <h2 className="text-5xl font-light mb-24">
          Our Interior Process
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-16">
          {["Consultation", "Design & 3D", "Production", "Installation"].map((step, i) => (
            <div key={i}>
              <h3 className="text-4xl font-light text-[#8F735A]">
                0{i + 1}
              </h3>
              <p className="mt-4">{step}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-44 text-center bg-[#8F735A] text-white px-10">

        <h2 className="text-5xl font-light mb-12">
          Let’s Design Your Dream Home.
        </h2>

        <p className="max-w-2xl mx-auto mb-10">
          Book a free consultation and receive a
          personalized interior proposal for your home.
        </p>

        <Link
          to="/contact"
          className="px-14 py-5 bg-white text-[#1C1C1C] rounded-full text-lg shadow-lg hover:scale-105 transition"
        >
          Book Free Consultation
        </Link>

      </section>

    </div>
    </>
  );
}

export default Interiors;

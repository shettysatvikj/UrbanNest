import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
  <Helmet>
  <title>Luxury Modular Kitchens & Home Interiors in Mumbai | UrbanNest Interiors</title>
  <meta
    name="description"
    content="Premium modular kitchens and full home interiors in Mumbai. Transparent pricing, 10-year warranty, 45-day delivery."
  />
</Helmet>
  return (
    <div className="bg-[#E6DFD6] text-[#1C1C1C] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-10">

        {/* Richer Accent Shape */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[#D4C8BB] -z-10 rounded-bl-[160px]" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-light leading-tight tracking-tight"
            >
              Crafted Spaces
              <span className="block font-medium text-[#8F735A]">
                For Modern Mumbai.
              </span>
            </motion.h1>

            <p className="mt-8 text-lg text-[#2E2A26] max-w-md leading-relaxed">
              Bespoke modular kitchens and complete home interiors
              designed with architectural precision and timeless elegance.
            </p>

            <div className="mt-12 flex gap-6">
              <Link
                to="/portfolio"
                className="px-10 py-4 bg-[#1C1C1C] text-white rounded-full shadow-lg hover:scale-105 transition"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="px-10 py-4 border border-[#1C1C1C] rounded-full hover:bg-[#1C1C1C] hover:text-white transition"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          <div className="relative">
            <img

                 src="/Home1.jpg"
              fetchpriority="high"

                 src="./public/Home1.jpg"
              alt="Luxury Modular Kitchen Mumbai"

              className="rounded-[45px] shadow-[0_40px_80px_rgba(0,0,0,0.35)]"
            />
          </div>

        </div>
      </section>

      {/* ================= STATEMENT BLOCK ================= */}
      <section className="py-44 px-10 bg-[#D9CEC1] text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-light max-w-4xl mx-auto leading-snug"
        >
          Interiors should feel
          <span className="block font-medium text-[#8F735A]">
            intentional, not assembled.
          </span>
        </motion.h2>

      </section>

      {/* ================= SHOWCASE SECTION ================= */}
      <section className="py-44 px-10 bg-[#D4C8BB]">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">

          <div>
            <img
          
               src="/Home2.jpg"
              alt="Luxury Living Room Interior"
              className="rounded-[35px] shadow-[0_35px_70px_rgba(0,0,0,0.3)]"
            />
          </div>

          <div>
            <h3 className="text-4xl font-light mb-8">
              Complete Home Transformation
            </h3>
            <p className="text-[#2E2A26] mb-10 leading-relaxed">
              From kitchen planning to wardrobe precision,
              every detail is engineered to enhance storage,
              flow, and elegance.
            </p>
            <Link
              to="/modular-kitchen-mumbai"
              className="text-[#8F735A] font-medium hover:underline"
            >
              Explore Kitchens →
            </Link>
          </div>

        </div>

      </section>

     {/* ================= TRUST SECTION ================= */}
<section className="py-44 px-10 bg-[#E6DFD6]">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-24">
      <h2 className="text-5xl font-light">
        A Reputation Built on Precision.
      </h2>
      <p className="mt-6 text-[#2E2A26] max-w-2xl mx-auto">
        Every space we design reflects craftsmanship, commitment,
        and long-term durability.
      </p>
    </div>

    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#cbbfb3] text-center">

      <div className="px-10 py-12">
        <h3 className="text-6xl font-light text-[#8F735A]">500+</h3>
        <p className="mt-4 text-[#2E2A26] tracking-wide">
          Homes Delivered Across Mumbai
        </p>
      </div>

      <div className="px-10 py-12">
        <h3 className="text-6xl font-light text-[#8F735A]">10</h3>
        <p className="mt-4 text-[#2E2A26] tracking-wide">
          Year Structural Warranty
        </p>
      </div>

      <div className="px-10 py-12">
        <h3 className="text-6xl font-light text-[#8F735A]">45</h3>
        <p className="mt-4 text-[#2E2A26] tracking-wide">
          Day Project Completion
        </p>
      </div>

    </div>

  </div>

</section>

      \{/* ================= PORTFOLIO SECTION ================= */}
<section className="py-44 px-10 bg-[#E6DFD6]">

  <h2 className="text-5xl font-light text-center mb-24">
    Selected Works
  </h2>

  <div className="grid md:grid-cols-3 gap-12">

    {[
      "/Pic1.jpg",
      "/Pic2.jpg",
      "/Pic3.jpg",
    ].map((img, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-[30px] shadow-[0_25px_60px_rgba(0,0,0,0.25)] group"
      >
        <img
          src={img}
          alt="Interior Project"
          className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    ))}

  </div>

</section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-44 text-center bg-[#8F735A] text-white px-10">

        <h2 className="text-5xl font-light mb-12">
          Let’s Design Your Space.
        </h2>

        <Link
          to="/contact"
          className="px-14 py-5 bg-white text-[#1C1C1C] rounded-full text-lg shadow-lg hover:scale-105 transition"
        >
          Schedule Consultation
        </Link>

      </section>

    </div>
  );
}

export default Home;

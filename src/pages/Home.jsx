import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Luxury Modular Kitchens & Home Interiors in Mumbai | UrbanNest Interiors</title>
        <meta
          name="description"
          content="Premium modular kitchens and full home interiors in Mumbai. Transparent pricing, 10-year warranty, 45-day delivery."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="bg-[#E6DFD6] text-[#1C1C1C] overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-center px-6 md:px-10">

          <div className="absolute top-0 right-0 w-[60%] h-full bg-[#D4C8BB] -z-10 rounded-bl-[160px]" />

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight tracking-tight"
              >
                Crafted Spaces
                <span className="block font-medium text-[#8F735A]">
                  For Modern Mumbai.
                </span>
              </motion.h1>

              <p className="mt-6 md:mt-8 text-base md:text-lg text-[#2E2A26] max-w-md leading-relaxed">
                Bespoke modular kitchens and complete home interiors
                designed with architectural precision and timeless elegance.
              </p>

              <div className="mt-8 md:mt-12 flex flex-wrap gap-4 md:gap-6">
                <Link
                  to="/portfolio"
                  className="px-6 md:px-10 py-3 md:py-4 bg-[#1C1C1C] text-white rounded-full text-sm md:text-base shadow-xl hover:scale-105 transition"
                >
                  View Projects
                </Link>

                <Link
                  to="/contact"
                  className="px-6 md:px-10 py-3 md:py-4 border border-[#1C1C1C] rounded-full text-sm md:text-base hover:bg-[#1C1C1C] hover:text-white transition"
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative">
              <img
                src="/Home1.webp"
                alt="Luxury Modular Kitchen in Mumbai"
                fetchpriority="high"
                width="1000"
                height="650"
                className="rounded-[45px] shadow-xl object-cover w-full"
              />
            </div>

          </div>
        </section>

        {/* ================= STATEMENT BLOCK ================= */}
        <section className="py-24 md:py-44 px-6 md:px-10 bg-[#D9CEC1] text-center">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-6xl font-light max-w-4xl mx-auto leading-snug"
          >
            Interiors should feel
            <span className="block font-medium text-[#8F735A]">
              intentional, not assembled.
            </span>
          </motion.h2>

        </section>

        {/* ================= SHOWCASE SECTION ================= */}
        <section className="py-24 md:py-44 px-6 md:px-10 bg-[#D4C8BB]">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-28 items-center">

            <div>
              <img
                src="/Home2.webp"
                alt="Luxury Living Room Interior in Mumbai"
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
                className="rounded-[35px] shadow-xl object-cover w-full"
              />
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-light mb-6 md:mb-8">
                Complete Home Transformation
              </h3>

              <p className="text-[#2E2A26] mb-8 md:mb-10 leading-relaxed">
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
        <section className="py-24 md:py-44 px-6 md:px-10 bg-[#E6DFD6]">

          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-light">
                A Reputation Built on Precision.
              </h2>
              <p className="mt-4 md:mt-6 text-[#2E2A26] max-w-2xl mx-auto">
                Every space we design reflects craftsmanship and long-term durability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center">

              <div>
                <h3 className="text-4xl md:text-6xl font-light text-[#8F735A]">500+</h3>
                <p className="mt-4">Homes Delivered Across Mumbai</p>
              </div>

              <div>
                <h3 className="text-4xl md:text-6xl font-light text-[#8F735A]">10</h3>
                <p className="mt-4">Year Structural Warranty</p>
              </div>

              <div>
                <h3 className="text-4xl md:text-6xl font-light text-[#8F735A]">45</h3>
                <p className="mt-4">Day Project Completion</p>
              </div>

            </div>

          </div>

        </section>

        {/* ================= PORTFOLIO SECTION ================= */}
        <section className="py-24 md:py-44 px-6 md:px-10 bg-[#E6DFD6]">

          <h2 className="text-3xl md:text-5xl font-light text-center mb-16 md:mb-24">
            Selected Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">

            {["/Pic1.webp", "/Pic2.webp", "/Pic3.webp"].map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[30px] shadow-xl group"
              >
                <img
                  src={img}
                  alt={`Interior Project ${index + 1} in Mumbai`}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="450"
                  className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}

          </div>

        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-24 md:py-44 text-center bg-[#8F735A] text-white px-6 md:px-10">

          <h2 className="text-3xl md:text-5xl font-light mb-8 md:mb-12">
            Let’s Design Your Space.
          </h2>

          <Link
            to="/contact"
            className="px-8 md:px-14 py-3 md:py-5 bg-white text-[#1C1C1C] rounded-full text-sm md:text-lg shadow-xl hover:scale-105 transition"
          >
            Schedule Consultation
          </Link>

        </section>

      </div>
    </>
  );
}

export default Home;

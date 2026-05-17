import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

function About() {
  <Helmet>
  <title>Modular Kitchen in Mumbai | Factory-Finished Kitchens</title>
  <meta
    name="description"
    content="Looking for modular kitchen in Mumbai? Get factory-finished kitchens with humidity-resistant boards and transparent pricing."
  />
</Helmet>
  return (
    <div className="bg-[#F4EFE8] text-[#1C1C1C] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-40 pb-32 px-8 text-center">

        {/* Soft Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E9E2D8] to-transparent opacity-60 -z-10" />

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-light leading-tight"
        >
          We Design With
          <span className="block text-[#A98C6C] font-medium">
            Intention & Precision.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-2xl mx-auto text-[#7A6E63] text-lg leading-relaxed"
        >
          UrbanNest Interiors was founded in Mumbai to bring clarity,
          structure, and craftsmanship to home interior projects —
          eliminating uncertainty and delivering with discipline.
        </motion.p>

      </section>
 {/* ================= PHILOSOPHY ================= */}
        <section className="py-32 px-8 bg-white">

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-8">
                Our Philosophy
              </h2>

              <p className="text-[#7A6E63] leading-relaxed mb-6">
                Interior design is not decoration. It is planning,
                engineering, and structured execution.
              </p>

              <p className="text-[#7A6E63] leading-relaxed">
                We combine factory precision with disciplined on-site execution,
                ensuring every detail is delivered on time.
              </p>
            </motion.div>

            {/* ✅ About Image Added */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
            >
              <img
                src="/About.jpg"
                loading="lazy"
  decoding="async"
                className="w-full h-[420px] object-cover transition duration-700 hover:scale-105"
              />
            </motion.div>

          </div>

        </section>

      {/* ================= DIFFERENCE ================= */}
      <section className="py-32 px-8 bg-[#F4EFE8]">

        <div className="max-w-6xl mx-auto text-center mb-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-light"
          >
            What Sets Us Apart
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">

          {[
            {
              title: "Transparent Pricing",
              text: "Detailed BOQs with zero hidden costs."
            },
            {
              title: "Factory Precision",
              text: "CNC manufacturing ensures superior quality."
            },
            {
              title: "Structured Execution",
              text: "Defined timelines. Delivery within 45 days."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="p-10 bg-white rounded-[30px] shadow-md hover:shadow-xl transition duration-500"
            >
              <h3 className="text-2xl font-medium text-[#A98C6C] mb-4">
                {item.title}
              </h3>
              <p className="text-[#7A6E63]">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-32 px-8 bg-white">

        <div className="max-w-6xl mx-auto text-center mb-24">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-light"
          >
            Our Process
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-center">

          {["Consultation", "Design & 3D", "Production", "Installation"].map(
            (step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="transition"
              >
                <div className="text-3xl font-light text-[#A98C6C] mb-4">
                  0{index + 1}
                </div>
                <p className="text-[#7A6E63]">{step}</p>
              </motion.div>
            )
          )}

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 px-8 text-center bg-[#1C1C1C] text-white relative overflow-hidden">

        {/* Soft glow behind CTA */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#2A241F] to-[#1C1C1C] opacity-80" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-light mb-8">
            Let’s Build Your Space With Confidence.
          </h2>

          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-[#A98C6C] text-[#1C1C1C] rounded-full hover:scale-105 transition duration-300 shadow-lg"
          >
            Book a Consultation
          </Link>
        </motion.div>

      </section>

    </div>
  );
}

export default About;

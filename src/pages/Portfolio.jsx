import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "3BHK — Powai",
    type: "Full Home",
    cost: "₹12 Lakhs",
    image: "/P1.jpg",
    size: "large"
  },
  {
    id: 2,
    title: "Modular Kitchen — Andheri",
    type: "Kitchen",
    cost: "₹3.2 Lakhs",
    image: "/P2.jpg",
    size: "small"
  },
  {
    id: 3,
    title: "2BHK — Thane",
    type: "Full Home",
    cost: "₹8.5 Lakhs",
    image: "/P3.jpg",
    size: "small"
  },
  {
    id: 4,
    title: "L-Shape Kitchen — Bandra",
    type: "Kitchen",
    cost: "₹2.8 Lakhs",
    image: "/P4.jpg",
    size: "small"
  },
  {
    id: 5,
    title: "3BHK — Navi Mumbai",
    type: "Full Home",
    cost: "₹14 Lakhs",
    image: "/P6.jpg",
    size: "large"
  },
  {
    id: 6,
    title: "Parallel Kitchen — Powai",
    type: "Kitchen",
    cost: "₹2.5 Lakhs",
    image: "/P5.jpg",
    size: "small"
  }
];


function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);
      

  return (
    <><Helmet>
  <title>Interior Design Portfolio Mumbai | Modular Kitchen & Home Projects</title>
  <meta
    name="description"
    content="Explore our portfolio of luxury modular kitchens and full home interior projects across Mumbai. See real transformations and completed 2BHK & 3BHK interiors."
  />
  <meta
    name="keywords"
    content="Interior design portfolio Mumbai, Modular kitchen projects Mumbai, Completed home interiors Mumbai"
  />
</Helmet>
    <div className="bg-[#F7F3ED] text-[#1C1C1C] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="pt-40 pb-24 px-8 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-light"
        >
          Our
          <span className="text-[#B08A5A] font-medium"> Portfolio </span>
        </motion.h1>

        <p className="mt-6 max-w-2xl mx-auto text-[#6F655C]">
          A curated selection of refined residential interiors across Mumbai.
        </p>

      </section>

      {/* ================= FILTER ================= */}
      <section className="px-8 mb-24">
        <div className="max-w-7xl mx-auto flex justify-center gap-4 flex-wrap">

          {["All", "Kitchen", "Full Home"].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#B08A5A] text-white shadow-lg"
                  : "bg-white text-[#6F655C] border border-[#E5DED4] hover:border-[#B08A5A] hover:text-[#B08A5A]"
              }`}
            >
              {filter === "All" ? "All Projects" : filter + "s"}
            </motion.button>
          ))}

        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="px-8 pb-40">
        <div className="max-w-7xl mx-auto">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-10"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  className={`relative group ${
                    project.size === "large" ? "md:col-span-2" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden rounded-[30px] shadow-[0_30px_70px_rgba(0,0,0,0.08)]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
  decoding="async"
                      className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                        project.size === "large" ? "h-[480px]" : "h-[380px]"
                      }`}
                    />

                    {/* Elegant Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-10">

                      <div>
                        <p className="text-[#E8D5BC] text-xs uppercase tracking-[0.3em] mb-3">
                          {project.type}
                        </p>

                        <h3 className="text-2xl font-light text-white">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-[#E8D5BC] font-medium">
                          {project.cost}
                        </p>
                      </div>

                    </div>

                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-8 text-center bg-[#EFE8DF]">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-light mb-10"
        >
          Let’s Create Something Exceptional.
        </motion.h2>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/contact"
            className="inline-block px-14 py-4 bg-[#B08A5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
          </Link>
        </motion.div>

      </section>

    </div>
    </>
  );
}

export default Portfolio;

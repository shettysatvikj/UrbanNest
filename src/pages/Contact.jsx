import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";


function Contact() {
  <Helmet>
  <title>Contact UrbanNest Interiors | Book Free 3D Design Consultation</title>
  <meta
    name="description"
    content="Contact UrbanNest Interiors in Mumbai to book your free 3D modular kitchen or home interior consultation. Get expert guidance and transparent pricing."
  />
  <meta
    name="keywords"
    content="Contact interior designer Mumbai, Book modular kitchen consultation Mumbai, Free 3D kitchen design"
  />
</Helmet>
  return (
    <div className="bg-[#F4EFE8] text-[#1C1C1C] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="pt-40 pb-24 px-8 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-light"
        >
          Let’s Design Your
          <span className="block text-[#C6A87D] font-medium">
            Dream Space.
          </span>
        </motion.h1>

        <p className="mt-6 max-w-2xl mx-auto text-[#7A6E63] text-lg">
          Share your requirements and our design experts
          will get in touch within 24 hours.
        </p>

      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="px-8 pb-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

          {/* LEFT — FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
          >
            <h2 className="text-3xl font-light mb-10">
              Tell Us About Your Project
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border border-[#E5DED4] focus:border-[#C6A87D] outline-none transition"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border border-[#E5DED4] focus:border-[#C6A87D] outline-none transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border border-[#E5DED4] focus:border-[#C6A87D] outline-none transition"
              />

              <select
                className="w-full p-4 rounded-xl border border-[#E5DED4] focus:border-[#C6A87D] outline-none transition"
              >
                <option>Select Service</option>
                <option>Modular Kitchen</option>
                <option>Full Home Interiors</option>
                <option>2BHK Interiors</option>
                <option>3BHK Interiors</option>
              </select>

              <textarea
                rows="4"
                placeholder="Tell us about your space..."
                className="w-full p-4 rounded-xl border border-[#E5DED4] focus:border-[#C6A87D] outline-none transition resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 bg-[#C6A87D] text-[#121212] rounded-full text-lg hover:scale-105 transition shadow-[0_0_40px_rgba(198,168,125,0.3)]"
              >
                Request Consultation
              </button>

            </form>
          </motion.div>

          {/* RIGHT — INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl font-light mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 text-[#7A6E63]">

                <div>
                  <p className="text-sm uppercase tracking-widest text-[#C6A87D] mb-2">
                    Office
                  </p>
                  <p>Mumbai, Maharashtra</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-[#C6A87D] mb-2">
                    Phone
                  </p>
                  <p>+91 98765 43210</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-[#C6A87D] mb-2">
                    Email
                  </p>
                  <p>hello@urbannestinteriors.in</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-[#C6A87D] mb-2">
                    Working Hours
                  </p>
                  <p>Monday – Saturday<br />10:00 AM – 7:00 PM</p>
                </div>

              </div>
            </div>

            {/* Trust Note */}
            <div className="mt-12 p-8 bg-[#1C1C1C] text-white rounded-[30px]">
              <p className="text-lg font-light">
                We typically respond within
                <span className="text-[#C6A87D]"> 24 hours.</span>
              </p>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default Contact;
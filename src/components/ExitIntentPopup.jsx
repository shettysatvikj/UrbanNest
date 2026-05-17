import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (hasTriggered) return;

    // Push a fake history state
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      if (!hasTriggered) {
        setShowPopup(true);
        setHasTriggered(true);

        // Push again so user doesn't instantly leave
        window.history.pushState(null, "", window.location.href);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [hasTriggered]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const templateParams = {
      user_email: form.email.value,
      user_phone: form.phone.value,
      pdf_link: window.location.origin + "/5-mistakes.pdf"
    };

    emailjs
      .send(
        "service_fxrqm5l",
        "template_i6xenai",
        templateParams,
        "-Eh15H9MdRs6xMXt2"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.reset();
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong. Try again.");
      });
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-lg p-10 md:p-12 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.2)] relative"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-black transition"
              type="button"
              aria-label="Close popup"
            >
              <X size={18} />
            </button>

            {!success ? (
              <>
                <h2 className="text-2xl md:text-3xl font-light mb-4">
                  Before You Leave…
                </h2>

                <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                  Download our FREE PDF:
                  <br />
                  <strong>
                    5 Costly Mistakes Homeowners Make During Interior Projects
                  </strong>
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#A67C52] outline-none transition"
                  />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#A67C52] outline-none transition"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#A67C52] text-white rounded-full hover:opacity-90 transition"
                  >
                    {loading ? "Sending..." : "Get Free PDF"}
                  </button>

                </form>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-light mb-4">
                  ✅ Check Your Email
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Your free PDF has been sent successfully.
                </p>
              </div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ExitIntentPopup;

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function FreeDesignModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-12 rounded-[40px] w-full max-w-lg shadow-2xl relative"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500"
          >
            <X size={20} />
          </button>

          <h2 className="text-3xl font-light mb-6 text-center">
            Get Your Free 3D Design
          </h2>

          <p className="text-center text-gray-500 mb-8">
            Share your kitchen details and receive a customized 3D concept.
          </p>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl border border-gray-200"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border border-gray-200"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border border-gray-200"
            />

            <select className="w-full p-4 rounded-xl border border-gray-200">
              <option>Select Kitchen Type</option>
              <option>L-Shape</option>
              <option>U-Shape</option>
              <option>Island</option>
              <option>Parallel</option>
            </select>

            <button
              type="submit"
              className="w-full py-4 bg-[#A67C52] text-white rounded-full hover:opacity-90 transition"
            >
              Request Free 3D Design
            </button>

          </form>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FreeDesignModal;
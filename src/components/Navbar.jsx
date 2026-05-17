import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Kitchens", path: "/modular-kitchen-mumbai" },
    { name: "Interiors", path: "/interiors" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  // Lock scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#E6DFD6]/80 border-b border-[#d4c8bb]">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          {/* LOGO */}
          <Link
            to="/"
            className="text-xl font-semibold tracking-wide text-[#1C1C1C]"
          >
            UrbanNest <span className="text-[#8F735A]">Interiors</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-10 items-center text-[#2E2A26] text-[15px]">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group font-medium"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#8F735A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Link
              to="/estimate"
              className="ml-6 px-6 py-2.5 bg-[#1C1C1C] text-white rounded-full shadow-md hover:shadow-xl hover:scale-105 transition text-sm"
            >
              Get Free Estimate
            </Link>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#1C1C1C] relative z-50"
          >
            <div className="transition-transform duration-300 ease-in-out">
              {open ? <X size={26} /> : <Menu size={26} />}
            </div>
          </button>

        </div>

      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed top-0 left-0 right-0 bg-[#F6F1EA] md:hidden transform transition-transform duration-300 ease-in-out z-40 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-28 px-8 pb-10 flex flex-col gap-8 text-[#1C1C1C]">

          {navLinks.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-xl font-light tracking-wide hover:text-[#8F735A] transition"
              style={{
                transitionDelay: open ? `${index * 50}ms` : "0ms"
              }}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/estimate"
            onClick={() => setOpen(false)}
            className="mt-6 px-6 py-3 bg-[#1C1C1C] text-white rounded-full text-center hover:opacity-90 transition"
          >
            Get Free Estimate
          </Link>

        </div>
      </div>
    </>
  );
}

export default Navbar;

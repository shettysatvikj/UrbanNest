import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Kitchens", path: "/modular-kitchen-mumbai" },
    { name: "Interiors", path: "/interiors" }, // you should create this page
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
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

          {/* PRIMARY CTA */}
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
          className="md:hidden text-[#1C1C1C]"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#E6DFD6] px-6 pb-6 pt-4 flex flex-col gap-5 text-[#2E2A26]">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 px-6 py-3 bg-[#1C1C1C] text-white rounded-full text-center"
          >
            Get Free Estimate
          </Link>

        </div>
      )}

    </header>
  );
}

export default Navbar;

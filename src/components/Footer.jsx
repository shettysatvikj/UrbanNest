import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#1A1614] text-[#F0EBE4] relative overflow-hidden">

      {/* Top Divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A87C]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-4 gap-16">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-light tracking-wide mb-6">
            UrbanNest <span className="text-[#C9A87C] font-medium">Interiors</span>
          </h3>

          <p className="text-[#8A7E72] leading-relaxed">
            Premium modular kitchens and complete home interiors
            crafted for modern Mumbai living.
            Designed with precision. Delivered with integrity.
          </p>

          {/* Mini CTA */}
          <Link
            to="/contact"
            className="inline-block mt-8 text-[#C9A87C] hover:text-white transition"
          >
            Book Free Consultation →
          </Link>
        </div>

        {/* Services */}
        <div>
          <h4 className="uppercase tracking-[0.2em] text-xs text-[#C9A87C] mb-6">
            Services
          </h4>

          <ul className="space-y-4 text-[#8A7E72]">
            <li>
              <Link
                to="/modular-kitchen-mumbai"
                className="hover:text-[#C9A87C] transition"
              >
                Modular Kitchens
              </Link>
            </li>
            <li>
              <Link
                to="/interiors"
                className="hover:text-[#C9A87C] transition"
              >
                Full Home Interiors
              </Link>
            </li>
            <li>
              <Link
                to="/estimate"
                className="hover:text-[#C9A87C] transition"
              >
                Cost Estimator
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-[#C9A87C] transition"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="uppercase tracking-[0.2em] text-xs text-[#C9A87C] mb-6">
            Locations
          </h4>

          <ul className="space-y-4 text-[#8A7E72]">
            <li>Andheri</li>
            <li>Powai</li>
            <li>Thane</li>
            <li>Borivali</li>
            <li>Navi Mumbai</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="uppercase tracking-[0.2em] text-xs text-[#C9A87C] mb-6">
            Contact
          </h4>

          <p className="text-[#8A7E72] leading-relaxed">
            Mumbai, Maharashtra
            <br /><br />
            <span className="text-[#F0EBE4]">
              +91 98765 43210
            </span>
            <br /><br />
            hello@urbannestinteriors.in
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#3A322C] py-8 text-center text-sm text-[#8A7E72]">
        © 2026 UrbanNest Interiors. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
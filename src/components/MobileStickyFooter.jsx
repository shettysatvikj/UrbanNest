function MobileStickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex justify-around py-3 md:hidden z-50">
      <a href="tel:+919876543210" className="text-sm font-semibold">
        Call
      </a>
      <a href="https://wa.me/919876543210" className="text-sm font-semibold">
        WhatsApp
      </a>
      <a href="/contact" className="text-sm font-semibold">
        Get Quote
      </a>
    </div>
  );
}

export default MobileStickyFooter;
import { X } from "lucide-react";
import { Link } from "react-router-dom";

function TopSidebar({ isOpen, onClose, nav }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Top Drawer */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-[#0c0c0c] text-white
        transform transition-transform duration-300
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-lg font-bold">CampusTees</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-lg">
          {nav.map((item) => (
            <Link key={item.name} to={item.href}>
              <a onClick={onClose} className="hover:underline">
                {item.name}
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TopSidebar;

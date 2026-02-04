import { Menu, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import TopSidebar from "./Sidebar";
import { Link } from "react-router-dom";

const navList = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Design Your Shirt", href: "/design" },
  { name: "About", href: "/about" },
];

const nav = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Design Your Shirt", href: "/design" },
  { name: "About", href: "/about" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-900/30 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">CampusTees</div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-5  text-white">
            {navList.map((item) => (
              <Link key={item.name} to={item.href}>
                <a className="hover:bg-gray-200/10  transition px-4 py-2 rounded-2xl text-sm">
                  {item.name}
                </a>
              </Link>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button className="rounded bg-primary p-2 text-white">
              <User className="h-5 w-5" />
            </button>

            <button className="rounded bg-primary p-2 text-white">
              <ShoppingCart className="h-5 w-5" />
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden rounded bg-primary p-2 text-white"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <TopSidebar isOpen={open} onClose={() => setOpen(false)} nav={nav} />
    </>
  );
}

export default Navbar;

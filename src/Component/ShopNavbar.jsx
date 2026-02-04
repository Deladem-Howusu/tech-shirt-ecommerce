import { Heart, Menu, Package, Search, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TopSidebar from "./Sidebar";
import { useState } from "react";

const navButtons = [
  { name: "Orders", icon: Package },
  { name: "Favorite", icon: Heart },
  { name: "Cart", icon: ShoppingBag },
];

const navList = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Design Your Shirt", href: "/design" },
  { name: "About", href: "/about" },
];

function ShopNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0c0c0c] px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo + Search */}
          <div className="flex items-center gap-3">
            <h1
              onClick={() => navigate("/")}
              className="cursor-pointer text-lg font-bold text-pink-500 sm:text-xl"
            >
              CampusTees
            </h1>

            {/* Search (hidden on very small screens) */}
            <div className="hidden sm:flex w-64 items-center rounded-2xl bg-gray-500/10 px-3 py-2">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent text-sm text-gray-300 focus:outline-none"
              />
              <button className="ml-2 rounded-xl bg-pink-500 p-1.5">
                <Search size={14} className="text-white" />
              </button>
            </div>
          </div>

          {/* Center: Nav links (desktop only) */}
          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-100">
            {navList.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.href)}
                  className="transition hover:text-pink-500"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {navButtons.map(({ name, icon: Icon }) => (
              <button
                key={name}
                className="flex items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-gray-400/20"
              >
                <Icon className="h-5 w-5 text-gray-100" />
                <span className="hidden md:inline text-sm text-gray-100">
                  {name}
                </span>
              </button>
            ))}

            {/* Avatar */}
            <figure className="ml-2 h-8 w-8 overflow-hidden rounded-full cursor-pointer">
              <img
                src="https://i.pravatar.cc/400"
                alt="User Avatar"
                className="h-full w-full object-cover"
              />
            </figure>

            {/* Mobile menu icon */}
            <button
              onClick={() => setOpen(true)}
              className="ml-2 rounded-lg p-2 text-gray-100 hover:bg-gray-400/20 lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 flex sm:hidden">
          <div className="flex w-full items-center rounded-2xl bg-gray-500/10 px-3 py-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent text-sm text-gray-300 focus:outline-none"
            />
            <button className="ml-2 rounded-xl bg-pink-500 p-1.5">
              <Search size={14} className="text-white" />
            </button>
          </div>
        </div>
      </nav>
      <TopSidebar isOpen={open} onClose={() => setOpen(false)} nav={navList} />
    </>
  );
}

export default ShopNavbar;

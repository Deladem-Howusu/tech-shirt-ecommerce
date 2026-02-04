import { useState } from "react";
import ProductCard from "./Card";
import PriceRange from "./PriceRange";
import SizeFilter from "./SizeFilter";
import { SlidersHorizontal, X } from "lucide-react";

const categories = [
  "All",
  "Technology and Engineering",
  "Arts and Humanities",
  "Science and Health",
  "Business and Economics",
  "Education",
  "Law and Public Policy",
  "Lifestyle",
];

function ShopMain({ shirts }) {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="h-vh w-full ">
      <div className="container h-full mx-auto  py-5 px-4">
        <div className="flex space-x-4 overflow-x-auto mb-2  sticky top-16 z-20 py-2 bg-[#121212]">
          {categories.map((category) => (
            <button
              key={category}
              className="whitespace-nowrap px-4 py-2 bg-[#403f3f45]  rounded-full  hover:bg-violet-500 hover:text-white transition text-sm font-medium text-gray-400"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Filter Button */}
        <div className="mb-4 block lg:hidden">
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium text-white"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Product Grid Placeholder */}
        <div className="display  grid  grid-cols-1 sm:grid-cols-2  gap-2  ">
          {/* Product cards would go here */}
          <div className="hidden lg:block filter h-[70vh] py-5 overflow-auto space-y-4 px-2">
            <PriceRange />
            <SizeFilter />
          </div>
          {shirts.length === 0 ? (
            <div className="flex items-center justify-center w-[90vw] lg:w-full mt-5 lg:m-auto">
              <div className="bg-[#1e1e1e89] p-6 rounded-lg shadow-md text-center  w-fit lg:w-full h-fit lg:h-[60vh] flex flex-col justify-center">
                <p className="text-gray-400 py-2 font-semibold text-lg">
                  No Product Found.
                </p>
                <p className="text-gray-400 py-2 text-sm">
                  Try adjusting your filters or search terms.
                </p>
                <div className="inline">
                  <button
                    onClick={() => window.location.reload()}
                    className=" mt-4 px-5 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="shirt-grid space-y-4 ml-2  w-[90vw] lg:w-full  pt-5 pb-40  overflow-auto grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* More product cards... */}
              {shirts.map((shirt) => (
                <ProductCard
                  image={shirt.image}
                  title={shirt.name}
                  price={shirt.price}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setShowFilters(false)}
            className="fixed h-screen inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity"
          />

          {/* Drawer */}
          <div
            className={`fixed left-0 top-30 z-50 h-screen  bg-[#0f0f0f] p-4 shadow-xl transition-transform duration-300 `}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-200">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X className="text-gray-300" />
              </button>
            </div>

            <div className="space-y-4 overflow-y-auto h-screen">
              <PriceRange />
              <SizeFilter />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShopMain;

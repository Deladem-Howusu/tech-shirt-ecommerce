import { useState } from "react";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export default function SizeFilter() {
  const [selectedSizes, setSelectedSizes] = useState(["S", "M", "L"]);

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const resetSizes = () => {
    setSelectedSizes([]);
  };

  return (
    <div className=" rounded-2xl bg-[#21212145] border border-gray-700 px-4 py-2 mt-2 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-sm font-semibold text-gray-50">Shirt Size</h3>
        <button
          onClick={resetSizes}
          className="text-xs text-gray-400 hover:text-black"
        >
          Reset
        </button>
      </div>

      {/* Sizes list */}
      <div className="space-y-2">
        {SIZES.map((size) => {
          const checked = selectedSizes.includes(size);

          return (
            <label
              key={size}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="flex font-semibold h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-xs text-gray-400">
                  {size}
                </div>
                <span className="text-xs text-gray-300">Size {size}</span>
              </div>

              {/* Checkbox */}
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-md border transition ${
                  checked
                    ? "bg-violet-500 border-violet-500"
                    : "border-gray-300"
                }`}
                onClick={() => toggleSize(size)}
              >
                {checked && (
                  <svg
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </label>
          );
        })}
      </div>

      {/* More sizes */}
      <button className="mt-3 text-xs text-violet-500 hover:underline">
        More Sizes
      </button>
    </div>
  );
}

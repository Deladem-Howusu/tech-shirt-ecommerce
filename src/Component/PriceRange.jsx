import { useState } from "react";

export default function PriceRange() {
  const MIN = 0;
  const MAX = 1500;

  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(1130);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 50);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 50);
    setMaxPrice(value);
  };

  const resetPrices = () => {
    setMinPrice(20);
    setMaxPrice(1130);
  };

  const minPercent = ((minPrice - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxPrice - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="w-full rounded-2xl bg-[#21212145] border border-gray-700 px-4 py-2 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="font-semibold text-sm text-gray-300 py-2">
            Price Range
          </h3>
          <p className="text-xs text-gray-400">The average price is $300</p>
        </div>
        <button
          onClick={resetPrices}
          className="text-xs text-gray-400 hover:text-black"
        >
          Reset
        </button>
      </div>

      {/* Chart background */}
      <div className="relative h-10 ">
        <svg viewBox="0 0 300 80" className="absolute inset-0 w-full h-full">
          <path
            d="M0 60 L30 40 L60 50 L90 25 L120 45 L150 20 L180 35 L210 30 L240 45 L270 25 L300 40 L300 80 L0 80 Z"
            fill="#4c1d95"
          />
        </svg>
      </div>

      {/* Slider */}
      <div className="relative h-10">
        {/* Track */}
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded bg-gray-200" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded bg-violet-500"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        {/* Min input */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minPrice}
          onChange={handleMinChange}
          className="absolute w-full pointer-events-none appearance-none bg-transparent"
        />

        {/* Max input */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full pointer-events-none appearance-none bg-transparent"
        />

        {/* Min label */}
        <div
          className="absolute -top-6 -translate-x-1/2 rounded-full bg-gray-500 px-2 py-0.5 text-xs text-white"
          style={{ left: `${minPercent}%` }}
        >
          ${minPrice}
        </div>

        {/* Max label */}
        <div
          className="absolute -top-6 -translate-x-1/2 rounded-full bg-gray-500 px-2 py-0.5 text-xs text-white"
          style={{ left: `${maxPercent}%` }}
        >
          ${maxPrice}
        </div>
      </div>
    </div>
  );
}

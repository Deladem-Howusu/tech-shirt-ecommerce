import { Heart, ShoppingBag } from "lucide-react";

export default function ProductCard({
  image,
  title,
  price,
  isTopItem = false,
}) {
  return (
    <div className="group w-full lg:w-56 h-fit rounded-2xl border border-neutral-700 bg-[#121212] shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      {/* Image section */}
      <div className="relative flex h-56 items-center justify-center rounded-t-2xl bg-[#959384] p-4">
        {/* Wishlist */}
        <button className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 backdrop-blur transition hover:bg-violet-600">
          <Heart
            size={16}
            className="text-violet-400 transition group-hover:text-white"
          />
        </button>

        {/* Top badge */}
        {isTopItem && (
          <span className="absolute left-2 top-2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
            Top item
          </span>
        )}

        {/* Product image */}
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain transition group-hover:scale-105"
        />
      </div>

      {/* Product info */}
      <div className="px-4 py-3 text-center">
        <h3 className="truncate text-sm font-semibold text-gray-200">
          {title}
        </h3>

        <div className="mt-3 flex justify-center">
          <span className="flex items-center gap-1 rounded-full  bg-violet-500/50 px-3 py-1 text-sm font-medium text-gray-200">
            <ShoppingBag size={14} />${price}
          </span>
        </div>
      </div>
    </div>
  );
}

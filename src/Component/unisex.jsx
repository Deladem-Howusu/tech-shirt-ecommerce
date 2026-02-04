import { Heart } from "lucide-react";

const shirts = [
  {
    id: 1,
    image: "1st-rule-of-programming-navy-blue-t-shirts.jpg",
    name: "Navy Blue T-Shirt",
    description: "First rule of programming. If it works don't touch it.",
  },
  {
    id: 2,
    image: "There-is-no-place-like-127-0-0-1-Home-t-shirt-black-1.jpg",
    name: "Navy Blue T-Shirt",
    description: "First rule of programming. If it works don't touch it.",
  },
  {
    id: 3,
    image: "React-Js-Javascript-t-shirts-navy-blue.jpg",
    name: "Navy Blue T-Shirt",
    description: "First rule of programming. If it works don't touch it.",
  },
  {
    id: 4,
    image: "Android-Developer-pocket-t-shirt-white.jpg",
    name: "Navy Blue T-Shirt",
    description: "First rule of programming. If it works don't touch it.",
  },
  {
    id: 5,
    image: "typing-is-not-a-programming-black-t-shirt.jpg",
    name: "Navy Blue T-Shirt",
    description: "First rule of programming. If it works don't touch it.",
  },
  {
    id: 6,
    image: "Software-Engineer-t-shirt-navy-blue.jpg",
    name: "Navy Blue T-Shirt",
    description: "First rule of programming. If it works don't touch it.",
  },
  {
    id: 7,
    image: "NodeJS-Javascript-t-shirt-navy-blue.jpg",
    name: "Navy Blue T-Shirt",
    description: "First rule of programming. If it works don't touch it.",
  },
  {
    id: 8,
    image: "It-Work-On-My-Machine-golden-yellow-t-shirts.jpg",
    name: "Navy Blue T-Shirt",
    description: "First rule of programming. If it works don't touch it.",
  },
  {
    id: 9,
    image: "1st-rule-of-programming-navy-blue-t-shirts.jpg",
    name: "Navy Blue T-Shirt",
    description: "First rule of programming. If it works don't touch it.",
  },
  {
    id: 10,
    image: "There-is-no-place-like-127-0-0-1-Home-t-shirt-black-1.jpg",
    name: "Navy Blue T-Shirt",
    description: "First rule of programming. If it works don't touch it.",
  },
  {
    id: 11,
    image: "React-Js-Javascript-t-shirts-navy-blue.jpg",
    name: "Navy Blue T-Shirt",
    description: "First rule of programming. If it works don't touch it.",
  },
  {
    id: 12,
    image: "It-Work-On-My-Machine-golden-yellow-t-shirts.jpg",
    name: "Navy Blue T-Shirt",
    description: "First rule of programming. If it works don't touch it.",
  },
];

function Unisex() {
  return (
    <div className="unisex bg-[#f5f5f5]  py-10 w-dvw overflow-x-hidden px-7 lg:px-10">
      <h1 className="text-center text-2xl font-semibold ">Unisex T-Shirt</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4">
        {/* Shirt Cards */}
        {shirts.map((shirt) => (
          <div key={shirt.id} className="relative shirt w-full lg:w-72 ">
            <div className=" w-full h-120 lg:h-100 ">
              <img
                src={shirt.image}
                alt={shirt.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200 rounded-t-2xl"
              />

              <button className=" absolute top-0 right-3 bg-gray-50 p-2 text-sm mt-4 hover:bg-blue-700  rounded-4xl">
                <Heart size={14} className="text-blue-600" />
              </button>
            </div>

            <div className=" rounded-b-2xl shadow-md px-4 py-2 mt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xsm text-gray-700 font-semibold my-2">
                  {shirt.name}
                </h2>

                <span className=" text-sm font-normal bg-red-500 text-white px-3 py-1 rounded-2xl">
                  $55
                </span>
              </div>
              {/* <p className="text-gray-600 text-sm w-60 my-2">
              {shirt.description}
            </p> */}

              {/* <span className="mt-2 line-through font-medium text-gray-500">
                $60
              </span> */}
            </div>
          </div>
        ))}
      </div>

      <button className=" text-gray-900 border-2 border-gray-900 px-10 py-2  mt-20 hover:bg-blue-600 block text-center mx-auto">
        View all
      </button>
    </div>
  );
}

export default Unisex;

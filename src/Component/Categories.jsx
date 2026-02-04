const categories = [
  {
    id: 1,
    name: "Tech and Engineering",
    image: "tech.jpg",
    description:
      "Built for innovators, problem-solvers, and engineers shaping the future.",
  },
  {
    id: 2,
    name: "Arts and Humanities",
    image: "art.jpg",
    description:
      "Created for creatives, thinkers, and professionals in arts, law, and humanities.",
  },
  {
    id: 3,
    name: "Science and Health",
    image: "health.jpg",
    description:
      "Designed for scientists, health workers, and minds driven by discovery.",
  },
  {
    id: 4,
    name: "Business and Economics",
    image: "business.jpg",
    description:
      "Made for strategists, entrepreneurs, and leaders who move the economy.",
  },
];

function Categories() {
  return (
    <div className="category overflow-x-hidden bg-white pb-20 pt-10 px-10">
      <div>
        <h1 className="text-center text-3xl text-gray-800 font-medium ">
          CATEGORIES
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4">
        {/* Category Cards */}
        {categories.map((category) => (
          <div className="bg-white rounded-2xl relative flex flex-col  items-center py-5 px-5 shadow-md hover:translate-y-4 transition-all duration-300">
            <div className="w-25 h-25 my-5">
              <img
                className="w-full h-full object-cover"
                src={category.image}
                alt={category.name}
              />
            </div>

            <div className="pb-10">
              <h2 className="text-center text-xsm text-gray-600 font-semibold my-2">
                {category.name}
              </h2>
              <p className="text-center text-gray-600 my-2 text-sm">
                {category.description}
              </p>
            </div>

            <div className="absolute cursor-pointer bottom-5 text-sm text-white bg-blue-600 px-5 font-medium mt-5 py-1 rounded-2xl  text-center">
              View collection
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

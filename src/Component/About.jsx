const about = [
  {
    id: 1,
    Image: "fast delivery.png",
    head: "Free and Fast Delivery",
    detail: "Free delivery on UCC campus",
  },
  {
    id: 2,
    Image: "secure.png",
    head: "Secure Payment",
    detail: "100% secure payment with SSL encryption",
  },
  {
    id: 3,
    Image: "premium quality.png",
    head: "Premium Quality",
    detail: "High-quality materials for lasting comfort",
  },
];

function About() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 px-5 gap-5 bg-[#f9f9f9] w-dvw overflow-x-hidden">
      {about.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center shadow-md px-4 text-center rounded-lg gap-2 py-5"
        >
          <div className="w-60 h-50">
            <img
              className="w-full h-full object-cover"
              src={item.Image}
              alt={item.head}
            />
          </div>
          <h2 className="text-gray-700 font-semibold text-center">
            {item.head}
          </h2>
          <p>{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

export default About;

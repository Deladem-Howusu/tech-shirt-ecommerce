import ShopMain from "../Component/ShopMain";
import ShopNavbar from "../Component/ShopNavbar";

const shirts = [
  // {
  //   id: 1,
  //   image: "1st-rule-of-programming-navy-blue-t-shirts.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 25.99,
  // },
  // {
  //   id: 2,
  //   image: "There-is-no-place-like-127-0-0-1-Home-t-shirt-black-1.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 19.99,
  // },
  // {
  //   id: 3,
  //   image: "React-Js-Javascript-t-shirts-navy-blue.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 22.5,
  // },
  // {
  //   id: 4,
  //   image: "Android-Developer-pocket-t-shirt-white.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 18.75,
  // },
  // {
  //   id: 5,
  //   image: "typing-is-not-a-programming-black-t-shirt.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 21.0,
  // },
  // {
  //   id: 6,
  //   image: "Software-Engineer-t-shirt-navy-blue.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 24.0,
  // },
  // {
  //   id: 7,
  //   image: "NodeJS-Javascript-t-shirt-navy-blue.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 23.5,
  // },
  // {
  //   id: 8,
  //   image: "It-Work-On-My-Machine-golden-yellow-t-shirts.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 20.5,
  // },
  // {
  //   id: 9,
  //   image: "1st-rule-of-programming-navy-blue-t-shirts.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 25.99,
  // },
  // {
  //   id: 10,
  //   image: "There-is-no-place-like-127-0-0-1-Home-t-shirt-black-1.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 19.99,
  // },
  // {
  //   id: 11,
  //   image: "React-Js-Javascript-t-shirts-navy-blue.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 22.5,
  // },
  // {
  //   id: 12,
  //   image: "It-Work-On-My-Machine-golden-yellow-t-shirts.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 20.5,
  // },
  // {
  //   id: 13,
  //   image: "It-Work-On-My-Machine-golden-yellow-t-shirts.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 20.5,
  // },
  // {
  //   id: 14,
  //   image: "1st-rule-of-programming-navy-blue-t-shirts.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 25.99,
  // },
  // {
  //   id: 15,
  //   image: "There-is-no-place-like-127-0-0-1-Home-t-shirt-black-1.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 19.99,
  // },
  // {
  //   id: 16,
  //   image: "React-Js-Javascript-t-shirts-navy-blue.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 22.5,
  // },
  // {
  //   id: 17,
  //   image: "It-Work-On-My-Machine-golden-yellow-t-shirts.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 20.5,
  // },
  // {
  //   id: 9,
  //   image: "1st-rule-of-programming-navy-blue-t-shirts.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 25.99,
  // },
  // {
  //   id: 10,
  //   image: "There-is-no-place-like-127-0-0-1-Home-t-shirt-black-1.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 19.99,
  // },
  // {
  //   id: 11,
  //   image: "React-Js-Javascript-t-shirts-navy-blue.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 22.5,
  // },
  // {
  //   id: 12,
  //   image: "It-Work-On-My-Machine-golden-yellow-t-shirts.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 20.5,
  // },
  // {
  //   id: 13,
  //   image: "It-Work-On-My-Machine-golden-yellow-t-shirts.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 20.5,
  // },
  // {
  //   id: 14,
  //   image: "1st-rule-of-programming-navy-blue-t-shirts.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 25.99,
  // },
  // {
  //   id: 15,
  //   image: "There-is-no-place-like-127-0-0-1-Home-t-shirt-black-1.jpg",
  //   name: "Navy Blue T-Shirt",
  //   description: "First rule of programming. If it works don't touch it.",
  //   price: 19.99,
  // },
];

function Shop() {
  return (
    <div className="min-h-screen  shop bg-[#121212]">
      <ShopNavbar />
      <ShopMain shirts={shirts} />
    </div>
  );
}

export default Shop;

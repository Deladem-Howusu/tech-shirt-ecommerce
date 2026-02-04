import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Categories from "../Component/Categories";
import Unisex from "../Component/unisex";
import DesignYourOwn from "../Component/Design";
import About from "../Component/About";
import Footer from "../Component/Footer";

function Landingpage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Unisex />
      <DesignYourOwn />
      <About />
      <Footer />
    </>
  );
}

export default Landingpage;

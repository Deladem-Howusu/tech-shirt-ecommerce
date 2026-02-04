import { ShoppingBag, Sparkles } from "lucide-react";
import Button from "./Button";

function Hero() {
  return (
    <div className="h-dvh w-dvw -mt-16 overflow-x-hidden bg-[url('bg.png')] bg-cover bg-center text-white flex flex-col before:absolute before:inset-0 before:bg-linear-to-r before:from-black/20 before:to-black/10 relative">
      <div className="hero absolute inset-0 bg-linear-to-r from-black/20 to-black/10 backdrop-blur-[1px]"></div>

      <div className="flex justify-between py-30 px-2 lg:px-18 mt-10 relative z-10">
        <div className="flex lg:block md:block  flex-col gap-2 items-center lg:items-start md:items-start">
          <div className="flex border rounded-4xl py-2 lg:py-4 px-4  gap-2 items-center max-w-auto w-fit bg-background backdrop-blur supports-backdrop-filter:bg-background/60 text-blue-300 ">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm lg:text-xsm">
              For Every Student, Every Department
            </span>
          </div>
          <h1 className="head text-4xl py-4 lg:py-8 text-gray-300">
            Wear Your Identity
          </h1>
          <p className="w-full lg:text-lg text-gray-300 text-xsm max-w-auto lg:w-150 leading:9 text-center lg:text-left lg:leading-10">
            Express your department, passion, and creativity with
            custom-designed T-shirts made for university students.
          </p>

          <div className="block lg:flex md:flex gap-5">
            <Button
              message={"Shop Collection"}
              icon={<ShoppingBag className="w-3" />}
              radius={true}
            />
            <Button
              message={"Design your own"}
              icon={<ShoppingBag className="w-3" />}
              bgColor="transparent"
              border="white"
              radius={true}
            />
          </div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}

export default Hero;

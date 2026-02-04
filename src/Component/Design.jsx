function DesignYourOwn() {
  return (
    <div className="design h-dvh w-dvw overflow-x-hidden bg-[url('Design.png')] bg-cover lg:bg-contain bg-center text-white flex flex-col items-center justify-center before:absolute before:inset-0 before:bg-linear-to-r before:from-black/40 before:to-black/50 relative">
      <div className="absolute inset-0 bg-linear-to-r from-black/20 to-black/10 backdrop-blur-[1px]"></div>
      <div className="z-10 flex flex-col gap-6 items-center px-10 justify-center">
        <h1 className="text-3xl lg:text-5xl  text-center">
          Have A Design In Mind??
        </h1>

        <p className="text-center mx-auto lg:w-200">
          If you have a design idea, we can bring it to life! Reach out to us
          with your concept, and our team will work with you to create a custom
          T-shirt that matches your vision.{" "}
          <span className="hidden lg:inline">
            {" "}
            Choose from thousands of styles, colors, and sizes to make your
            unique design a reality.
          </span>
        </p>

        <button className="px-8 cursor-pointer py-4 mt-5 border border-white backdrop-blur-sm">
          Design Your Own Shirt
        </button>
      </div>
    </div>
  );
}

export default DesignYourOwn;

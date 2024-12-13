const WhyUs = () => {
  return (
    <div className=" flex flex-col gap-11 items-center justify-center md:items-start  p-4 ">
      <div className=" flex flex-col gap-11">
        <h1 className=" md:text-[10.5vw] text-[50px] font-bold  text-center md:text-start">
          WHY{" "}
          <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
            US?
          </span>
        </h1>
        <p className=" text-center md:text-start">
          What sets us apart is our commitment to user engagement and
          collaboration with turf operators nationwide. We believe in building
          partnerships that not only benefit our users but also support local
          businesses. Our platform is designed not just for booking but for
          creating memorable sporting experiences.
        </p>
      </div>
      <h1 className=" md:text-[5vw] text-[40px] font-bold  text-center md:text-start">
        WHAT WE{" "}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          HAVE?
        </span>
      </h1>
      <div className="flex items-center md:justify-between justify-center gap-5 md:gap-0  w-full flex-wrap">
        <div className="h-[300px] w-[300px] bg-red-400 rounded-3xl"></div>
        <div className="h-[300px] w-[300px] bg-red-400 rounded-full"></div>
        <div className="h-[300px] w-[300px] bg-red-400 rounded-3xl"></div>
        <div className="h-[300px] w-[300px] bg-red-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default WhyUs;

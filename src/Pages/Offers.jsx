const Offers = () => {
  return (
    <div className=" flex flex-col p-4">
      <h1 className=" md:text-[10.5vw] text-[50px] font-bold  text-center md:text-start">
        OUR{" "}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          OFFERS
        </span>
      </h1>

      <div className="flex items-center justify-center flex-wrap gap-5 md:gap-0 md:justify-between">
        <div className="h-[300px] w-[300px] bg-red-400 rounded-full"></div>
        <div className="h-[300px] w-[300px] bg-red-400 rounded-3xl"></div>
        <div className="h-[300px] w-[300px] bg-red-400 rounded-full"></div>
        <div className="h-[300px] w-[300px] bg-red-400 rounded-3xl"></div>
      </div>
      <h1 className=" md:text-[10.5vw] text-[40px] font-bold  text-center md:text-start  bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
        TOURNAMENTS
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-5 md:gap-0 md:justify-between">
        <div className="h-[300px] w-[300px] bg-red-400 rounded-3xl"></div>
        <div className="h-[300px] w-[300px] bg-red-400 rounded-full"></div>
        <div className="h-[300px] w-[300px] bg-red-400 rounded-3xl"></div>
        <div className="h-[300px] w-[300px] bg-red-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Offers;

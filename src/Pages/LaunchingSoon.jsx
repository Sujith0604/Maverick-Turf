const LaunchingSoon = () => {
  return (
    <div className=" h-screen bg-black text-white leading-tight p-4 flex items-center md:gap-0 gap-3 justify-center flex-col">
      {" "}
      <h1 className=" md:text-[13vw] text-[50px] text-center tracking-tighter font-bold fonthe w-full">
        LAUNCHING
      </h1>
      <div className=" flex md:flex-row flex-col items-center gap-5 justify-between w-full">
        <h2 className=" md:text-[11vw] text-[40px] bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text font-bold tracking-tighter">
          SOON
        </h2>
        <div className="hidden md:flex border-2 w-[100px]"></div>

        <h2 className="hidden  md:text-[11vw] text-[60px] bg-gradient-to-b from-orange-500 to-yellow-300 md:inline-block text-transparent bg-clip-text font-bold tracking-tighter">
          JOIN US
        </h2>

        <p className=" md:hidden text-center md:text-start text-xl leading-loose">
          Want to know when we launch? Join Us then!!
        </p>
      </div>
    </div>
  );
};

export default LaunchingSoon;

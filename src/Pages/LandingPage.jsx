const LandingPage = () => {
  return (
    <section id="landing">
      <section className="  bg-black text-white leading-tight  flex items-center  gap-5  justify-center h-screen flex-col">
        {/* <div className=" relative h-[100%] w-[100%]  flex items-center justify-center  ">
          <video autoPlay loop muted className="h-[100%] w-[100%]">
            <source
              src="/images/CR7 IN 30 SECONDS. BEST GOALS AND EPIC MOMENTS..mp4"
              type="video/mp4"
            />
          </video>
          <div className=" top-0 left-0 bg-black mix-blend-multiply flex items-center justify-center  absolute h-[100%] w-[100%]">
            <h1 className=" text-center  md:text-[15vw] text-[50px] tracking-tighter font-bold ">
              MAVERICK TURF
            </h1>
          </div>
        </div> */}

        <h1 className=" md:text-[10vw] text-[50px] text-center tracking-tighter font-bold fonthe w-full">
          MAVERICK{""}{" "}
          <span className="bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text font-bold ">
            {" "}
            TURF
          </span>
        </h1>
        <h2 className=" text-[16px] font-thin ">The best turf in the city.</h2>
        <h3 className=" text-[16px] font-thin">Want to know when we open</h3>

        <a
          href="#joinus"
          aria-label="joinus"
          className=" p-4 border bg-gradient-to-b from-orange-500 to-yellow-300 text-black "
        >
          JOIN OUR WAITING LIST
        </a>
      </section>
    </section>
  );
};

export default LandingPage;

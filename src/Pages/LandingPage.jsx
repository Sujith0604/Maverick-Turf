const LandingPage = () => {
  return (
    <div>
      <section className="  bg-black text-white leading-tight  flex items-center md:gap-0 gap-3 md:items-start justify-center flex-col">
        <div className=" relative h-[100%] w-[100%]  flex items-center justify-center  ">
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
        </div>

        <h2 className="md:hidden md:text-[15vw] text-[60px] bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text font-bold tracking-tighter"></h2>
        <p className="md:hidden">We Connect People with sports.</p>
        <buttom className="md:hidden p-4 border bg-gradient-to-b from-orange-500 to-yellow-300 text-black ">
          JOIN US
        </buttom>
      </section>
    </div>
  );
};

export default LandingPage;

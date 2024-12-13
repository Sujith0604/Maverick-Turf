const LandingPage = () => {
  return (
    <div>
      <section className=" h-screen bg-black text-white leading-tight p-4 flex items-center md:gap-0 gap-3 md:items-start justify-center flex-col">
        <h1 className=" md:text-[20.5vw] text-[70px] tracking-tighter font-bold fonthe">
          MAVERICK{" "}
        </h1>
        <h2 className="md:hidden md:text-[15vw] text-[60px] bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text font-bold tracking-tighter">
          TURF
        </h2>
        <p className="md:hidden">We Connect People with sports.</p>
        <buttom className="md:hidden p-4 border ">Join Us</buttom>

        <div className=" hidden md:flex gap-5 items-center justify-center">
          <div className=" h-[205px] w-[205px] bg-red-400 rounded-full"></div>
          <div className=" h-[205px] w-[205px] bg-red-400 rounded-3xl"></div>
          <h2 className=" md:text-[15vw] text-5xl bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text font-bold tracking-tighter">
            TURF
          </h2>
          <div className=" h-[205px] w-[205px] bg-red-400 rounded-3xl"></div>
          <div className=" h-[205px] w-[205px] bg-red-400 rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

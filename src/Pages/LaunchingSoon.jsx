const LaunchingSoon = () => {
  return (
    <section
      id="launching"
      className=" h-screen bg-black text-white leading-tight p-4 flex flex-col items-center md:gap-0 gap-3 justify-center flex-col"
    >
      {" "}
      <h1 className=" md:text-[11vw] text-[50px] text-center tracking-tighter font-bold fonthe w-full">
        LAUNCHING
      </h1>
      <h2 className=" md:text-[11vw] text-[40px] bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text font-bold tracking-tighter">
        SOON
      </h2>
      <a
        href="#joinus"
        className="inline-flex items-center p-4 text-sm font-medium text-center bg-gradient-to-b from-orange-500 to-yellow-300 text-black   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        JOIN US
      </a>
      <p className=" md:hidden text-center md:text-start text-xl leading-loose">
        Want to know when we launch? Join Us then!!
      </p>
    </section>
  );
};

export default LaunchingSoon;

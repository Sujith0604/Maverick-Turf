const AboutUs = () => {
  return (
    <div className="p-4 flex flex-col gap-11 items-center md:items-start justify-center">
      <h1 className=" md:text-[10.5vw] text-[60px] font-bold">
        OUR{" "}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          STORY
        </span>
      </h1>
      <p className=" text-center md:text-start">
        In today's fast-paced world, finding the perfect venue for sports and
        recreational activities can be a challenge. Our turf booking app was
        born out of a passion for sports and a desire to make it easier for
        athletes, teams, and enthusiasts to access high-quality playing fields.
        We understand that every game counts, and the right environment can make
        all the difference.
      </p>
      <div className=" flex md:flex-row flex-col items-center justify-center    ">
        <div className=" flex  gap-10 md:w-[50%] flex-wrap items-center justify-center  ">
          <div className="h-[300px] w-[300px] bg-red-400 rounded-3xl"></div>
          <div className="h-[300px] w-[300px] bg-red-400 rounded-full"></div>
          <div className="h-[300px] w-[300px] bg-red-400 rounded-full"></div>
          <div className="h-[300px] w-[300px] bg-red-400 rounded-3xl"></div>
        </div>
        <div className=" flex flex-col gap-5  md:w-[50%] items-center ">
          <div className=" flex flex-col gap-2">
            {" "}
            <h1 className=" md:text-[5vw] text-[50px] font-bold text-center md:text-start">
              OUR{" "}
              <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
                VISION
              </span>
            </h1>
            <p className="  text-center md:text-start">
              Our mission is to revolutionize how people book sports facilities.
              We aim to create a seamless experience that connects users with
              local turf operators, allowing them to reserve fields
              effortlessly. Whether you're planning a casual game with friends
              or organizing a competitive match, our app provides the tools you
              need to ensure your event is successful.
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className=" md:text-[5vw] text-[50px] font-bold  text-center md:text-start">
              OUR{" "}
              <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
                MOTIVE
              </span>
            </h1>
            <p className=" text-center md:text-start">
              The motive for developing a turf booking website revolves around
              enhancing convenience, accessibility, and efficiency in reserving
              sports facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

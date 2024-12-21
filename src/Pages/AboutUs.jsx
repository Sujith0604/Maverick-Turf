const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-11 items-center  justify-center  "
    >
      <h1 className=" md:text-[10.5vw] text-[40px] font-bold">
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
      <div className=" flex md:flex-row flex-col gap-5 items-center justify-center h-full">
        <div className=" flex flex-col   md:w-[50%] items-center  h-full ">
          <div className=" flex flex-col gap-2 items-center justify-center p-4 h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            {" "}
            <h1 className=" md:text-[5vw] text-[40px] font-bold text-center md:text-start">
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
        </div>

        <div className=" flex flex-col  md:w-[50%] items-center justify-center  h-full ">
          <div className=" flex flex-col gap-2  items-center justify-center  p-4 h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <h1 className=" md:text-[5vw] text-[40px] font-bold  text-center md:text-start">
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
    </section>
  );
};

export default AboutUs;

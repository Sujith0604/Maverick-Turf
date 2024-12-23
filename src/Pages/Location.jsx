const Location = () => {
  return (
    <section id="location" className=" flex flex-col  ">
      <h1 className=" md:text-[8vw] text-[30px] font-bold text-center ">
        OUR{" "}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          LOCATION
        </span>
      </h1>

      <iframe
        onLoad={() => (
          <div className=" h-full w-full items-center justify-center ">
            <h1> loading</h1>
          </div>
        )}
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.156870321513!2d76.99553947452023!3d11.026854654525641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85982c55d7fbf%3A0x8a6896c23fb4564b!2sTurf%20Tavern%20%7C%20Football%20%26%20Cricket%20Turf!5e0!3m2!1sen!2sin!4v1734075618266!5m2!1sen!2sin"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Location;

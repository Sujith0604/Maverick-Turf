const WaitingList = () => {
  return (
    <div className=" flex flex-col gap-11 items-center justify-center p-4">
      <h1 className=" md:text-[10.5vw] text-[50px] font-bold  text-center ">
        JOIN{" "}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          US
        </span>
      </h1>
      <p className=" text-center">
        Join us at Maverick turf as we work towards making sports more
        accessible and enjoyable for everyone. Whether you're looking to play a
        casual game or organize a competitive match, we’re here to help you get
        on the field quickly and easily.
      </p>
      <form className=" md:h-[500px] flex flex-col items-center justify-center gap-11 p-4 md:w-[500px] border ">
        <h1 className=" md:text-[2vw] text-[40px] font-bold  text-center ">
          WAITING{" "}
          <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
            FORM
          </span>
        </h1>
        <div className=" w-full flex items-center justify-between ">
          <label>Full Name</label>
          <input
            type="text"
            className=" border p-4 "
            placeholder="Enter your full name"
          />
        </div>
        <div className=" w-full flex items-center justify-between">
          <label>Mobile Number</label>
          <input
            type="text"
            className=" border p-4 "
            placeholder="Enter your full Number"
          />
        </div>
        <div className=" w-full flex items-center justify-between">
          <label>Email</label>
          <input
            type="text"
            className=" border p-4 "
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <button className=" w-[200px] h-[60px] border-2 border-orange-500 rounded-full text-white">
            JOIN NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default WaitingList;

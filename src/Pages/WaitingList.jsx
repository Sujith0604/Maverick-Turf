import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const WaitingList = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2h7y7y8", "template_xbpw2b5", form.current, {
        publicKey: "0GL5RKmaU17SDxy6G",
      })
      .then(
        () => {
          toast("Email sent successfully");
          form.current.reset();
        },
        (error) => {
          toast("FAILED...");
          // console.log(error.text);
        }
      );
  };

  return (
    <div
      id="joinus"
      className=" flex flex-col gap-11 items-center justify-center p-4"
    >
      <ToastContainer />
      <h1 className=" md:text-[5vw] text-[40px] font-bold  text-center ">
        JOIN OUR WAITING LIST {""}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          NOW
        </span>
      </h1>
      <p className=" text-center">
        Join us at Maverick turf as we work towards making sports more
        accessible and enjoyable for everyone. Whether you're looking to play a
        casual game or organize a competitive match, we’re here to help you get
        on the field quickly and easily.
      </p>

      <div className=" md:flex w-full">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-b from-orange-500 to-yellow-300 justify-around items-center hidden">
          <div>
            <h1 className="text-black font-bold text-4xl font-sans">
              Maverick Club
            </h1>
            <p className=" text-black mt-1">
              By clicking on join us we will be a part of maverick club.
            </p>
            <button
              type="submit"
              aria-label="submit"
              className="block w-28 bg-black text-white mt-4 py-2  font-bold mb-2"
            >
              JOIN US
            </button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form ref={form} onSubmit={sendEmail} className="bg-white text-black">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              JOIN OUR WAITING LIST
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome to Maverick Club
            </p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="from_name"
                id=""
                placeholder="Full name"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="number"
                id=""
                placeholder="Number"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="user_email"
                id=""
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <textarea
                className="pl-2 outline-none border-none text-black"
                type="text"
                name="message"
                id=""
                placeholder="Enter message"
              />
            </div>

            <button
              type="submit"
              value="Send"
              aria-label="submit"
              className="block w-full  bg-gradient-to-b from-orange-500 to-yellow-300 mt-4 py-2  text-black font-semibold mb-2"
            >
              JOIN NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitingList;

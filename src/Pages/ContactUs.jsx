import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2h7y7y8", "template_r3xqlf4", form.current, {
        publicKey: "0GL5RKmaU17SDxy6G",
      })
      .then(
        () => {
          toast("Email sent successfully");
          form.current.reset();
        },
        (error) => {
          toast("FAILED...");
        }
      );
  };

  return (
    <section id="contact" className="">
      <ToastContainer />
      <h1 className=" md:text-[10.5vw] text-[40px] font-bold  text-center ">
        CONTACT{" "}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          US
        </span>
      </h1>

      <div className="flex justify-center items-center   ">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl text-black"
          >
            <div className="flex">
              <h1 className="font-bold  uppercase text-xl md:text-5xl">
                Send us a <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100  mt-2 p-3  focus:outline-none focus:shadow-outline"
                type="text"
                name="from_name"
                placeholder="Full Name*"
              />

              <input
                className="w-full bg-gray-100  mt-2 p-3  focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100  mt-2 p-3  focus:outline-none focus:shadow-outline"
                type="number"
                name="number"
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                name="message"
                className="w-full h-32 bg-gray-100 text-black mt-2 p-3  focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                type="submit"
                aria-label="submit"
                value="Send"
                className="uppercase text-sm font-bold tracking-wide text-black bg-gradient-to-b from-orange-500 to-yellow-300 p-4  w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-gradient-to-b from-orange-500 to-yellow-300 ">
            <div className="flex flex-col text-black">
              <h1 className="font-bold uppercase text-4xl my-4">
                Drop in our office
              </h1>
              <p className="text-black">
                Our ofiice is located in vadavalli inside our turf and cafe
                facility you can visit any time if you have any query or dout
                about booking and other things.
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Main Office</h2>
                  <p className="text-black">
                    13/2 Vadavalli Coimbatore 641009, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-black">Mob: 9848324849</p>
                  <p className="text-black">Tel: 412-567-891</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

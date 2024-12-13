import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
  return (
    <div className="p-4 ">
      <h1 className=" md:text-[10.5vw] text-[50px] font-bold  text-center md:text-start">
        CONTACT{" "}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          US
        </span>
      </h1>
      <div className=" flex">
        <div className=" md:w-[50%] h-full flex items-center ">
          <div className="flex gap-3 items-center">
            <InstagramIcon className="text-4xl" />
            <FacebookIcon className="text-4xl" />
            <WhatsAppIcon className="text-4xl" />
            <EmailIcon className="text-4xl" />
          </div>
        </div>

        <form className=" md:h-[500px] flex flex-col items-center justify-center gap-11 p-4 md:w-[500px] border ">
          <h1 className=" md:text-[2vw] text-[40px] font-bold  text-center ">
            CONTACT{" "}
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
            <label>Email</label>
            <input
              type="text"
              className=" border p-4 "
              placeholder="Enter your Email"
            />
          </div>
          <div className=" w-full flex items-center justify-between">
            <label>Query</label>
            <textarea
              type="text"
              className=" border p-4 "
              placeholder="Enter your Query"
            />
          </div>
          <div>
            <button className=" w-[200px] h-[60px] border-2 border-orange-500 rounded-full text-white">
              JOIN NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

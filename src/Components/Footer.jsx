import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 justify-center p-4 text-gray-500">
      <div className="  flex md:flex-row flex-col items-center md:gap-0 gap-11 justify-between">
        <div className=" flex gap-2 items-center">
          <img
            src="/images/The Maverick Logo.png"
            className=" rounded-full h-[80px]"
          />
          <h1 className=" text-2xl font-bold">Maverick Turf</h1>
        </div>

        <div>
          <div className="flex gap-3 items-center">
            <InstagramIcon className="text-4xl" />
            <FacebookIcon className="text-4xl" />
            <WhatsAppIcon className="text-4xl" />
            <EmailIcon className="text-4xl" />
          </div>
        </div>

        <div className=" flex items-center justify-between gap-11 ">
          <div className=" flex flex-col gap-3 items-center md:items-start">
            <h3 className=" text-xl font-semibold"> Platforms</h3>
            <ul className="flex gap-4 flex-col items-center md:items-start">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-3 items-center md:items-start">
            <h3 className=" text-xl font-semibold">Company</h3>
            <ul className="flex gap-4 flex-col items-center md:items-start">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <p className=" text-center p-4">
        {" "}
        2024 Maverick Turf. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

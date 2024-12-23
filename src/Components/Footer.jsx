import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 justify-center p-4 text-white">
      <div className="  flex md:flex-row flex-col items-center md:gap-0 gap-11 justify-between">
        <a href="#landing" className=" flex gap-2 items-center">
          <img src="/images/MT-LOGO.png" className=" rounded-full h-[80px]" />
          <h1 className=" text-2xl font-bold">Maverick Turf</h1>
        </a>

        <div>
          <div className="flex gap-3 items-center">
            <a href="whatsapp://send?text=Hello There!&phone=+918838295978">
              {" "}
              <WhatsAppIcon className="text-4xl" />
            </a>

            <a href="mailto:sujithkarthikaiselvan@gmail.com">
              <EmailIcon className="text-4xl" />
            </a>
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

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Header = () => {
  const [open, setOpen] = useState(false);

  const NavComponent = () => {
    return (
      <nav className=" h-[200px] w-[200px] flex md:hidden">
        <ul className=" flex flex-col gap-5 text-xl text-white uppercase ">
          <li>
            <a aria-label="home" href="#landing">
              Home
            </a>
          </li>
          <li>
            <a aria-label="about" href="#about">
              Our Story
            </a>
          </li>
          <li>
            <a aria-label="gallery" href="#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a aria-label="offers" href="#offers">
              Offers
            </a>
          </li>
          <li>
            <a aria-label="join us" href="#joinus">
              Join us
            </a>
          </li>
          <li>
            <a aria-label="contact" href="#contact">
              Contact Us
            </a>
          </li>
          <li>
            <a aria-label="location" href="#location">
              Our Location
            </a>
          </li>
          <li className="flex gap-3 items-center">
            <a
              aria-label="whatsapp"
              href="whatsapp://send?text=Hello There!&phone=+918838295978"
            >
              {" "}
              <WhatsAppIcon className="text-4xl" />
            </a>

            <a aria-label="email" href="mailto:sujithkarthikaiselvan@gmail.com">
              <EmailIcon className="text-4xl" />
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header className=" h-[100px] p-4  flex items-center justify-between fixed w-full z-10 bg-black">
      <img
        src="/images/The Maverick Logo.png"
        className=" rounded-full h-[60px]"
      />

      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-50">
          <div className="flex justify-center items-center w-full h-full">
            <NavComponent />
            <button
              className="absolute top-5 right-5 text-white"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
      {!open ? (
        <button
          className="px-4 py-2 rounded-3xl md:hidden text-white"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      ) : (
        ""
      )}

      <nav className=" hidden md:flex items-center justify-center">
        <ul className="flex gap-6 text-white">
          <li>
            <a aria-label="home" href="#landing">
              Home
            </a>
          </li>
          <li>
            <a aria-label="about" href="#about">
              Our Story
            </a>
          </li>
          <li>
            <a aria-label="gallery" href="#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a aria-label="offers" href="#offers">
              Offers
            </a>
          </li>
          <li>
            <a aria-label="joinus" href="#joinus">
              Join us
            </a>
          </li>
          <li>
            <a aria-label="contact" href="#contact">
              Contact Us
            </a>
          </li>
          <li>
            <a aria-label="location" href="#location">
              Our Location
            </a>
          </li>
        </ul>
      </nav>
      <div className="md:flex hidden gap-3 items-center text-white">
        <a
          aria-label="whatsapp"
          href="whatsapp://send?text=Hello There!&phone=+918838295978"
        >
          {" "}
          <WhatsAppIcon className="text-4xl" />
        </a>

        <a aria-label="email" href="mailto:sujithkarthikaiselvan@gmail.com">
          <EmailIcon className="text-4xl" />
        </a>
      </div>
    </header>
  );
};

export default Header;

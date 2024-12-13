import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [open, setOpen] = useState(false);

  const NavComponent = () => {
    return (
      <nav className=" h-[200px] w-[200px] flex md:hidden">
        <ul className=" flex flex-col gap-5 text-xl text-white uppercase ">
          <li>Home</li>
          <li>Book Now</li>
          <li>Contact Us</li>
          <li>Sign Up</li>
          <li>Download</li>
        </ul>
      </nav>
    );
  };

  return (
    <header className=" h-[100px] p-4  flex items-center justify-between fixed w-full z-10 bg-black">
      <img
        src="/images/The Maverick Logo.png"
        className=" rounded-full h-[80px]"
      />

      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-50">
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
          className="px-4 py-2 rounded-3xl md:hidden"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      ) : (
        ""
      )}

      <nav className=" hidden md:flex">
        <ul className="flex gap-6 text-gray-500">
          <li>Home</li>
          <li>Book Now</li>
          <li>Contact Us</li>
          <li>Sign Up</li>
        </ul>
      </nav>
      <a className=" text-gray-500 hidden md:flex">Download</a>
    </header>
  );
};

export default Header;

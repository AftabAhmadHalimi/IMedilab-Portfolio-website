import React, { useContext } from "react";
import CrossIcon from './../assets/img/svg/cross.svg';
import CreateContext from "../context/CreateContext";

const MinNavbar = () => {
    const {show, resNavbarShow} = useContext(CreateContext)
  return (
    <>
      <div className={`container-fluid overflow-y-auto bg-black/30 p-5 fixed -top-[200%] left-0 w-full h-screen z-50 backdrop-blur-xl transition-all duration-500 ${show ? "top-0" : ""}`}>
        <nav className="bg-white/80 p-5 rounded-2xl h-[50vh] min-h-[400px] shadow-2xl ">
          <ul className="flex flex-col gap-3 relative text-2xl mt-5">
            <span onClick={resNavbarShow} className="absolute right-1 top-1 flex flex-col justify-center items-center bg-gray-100 w-13 h-13 rounded-full hover:bg-gray-300 cursor-pointer">
                <img src={CrossIcon} alt="" />
            </span>
            <li><a href="#home" onClick={resNavbarShow} className="hover:text-[var(--primary)]">Home</a></li>
            <li><a href="#about" onClick={resNavbarShow} className="hover:text-[var(--primary)]">About</a></li>
            <li><a href="#services" onClick={resNavbarShow} className="hover:text-[var(--primary)]">Services</a></li>
            <li><a href="#doctors" onClick={resNavbarShow} className="hover:text-[var(--primary)]">Doctors</a></li>
            <li><a href="#contact" onClick={resNavbarShow} className="hover:text-[var(--primary)]">Dropdown</a></li>
            <li><a href="#contact" onClick={resNavbarShow} className="hover:text-[var(--primary)]">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MinNavbar;

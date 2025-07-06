import React from "react";
const Header = () => {
  return (
    <>
      <header className="bg-[var(--primary)] text-white  p-2 flex justify-center items-center">
        <div className="container flex justify-between items-center max-sm:flex-col">
          <div className="right flex gap-5 max-sm:flex-col max-sm:text-center max-sm:gap-0">
            <p>
              <i className="fa-solid fa-envelope px-1 max-sm:my-1.5"></i>
              contact@example.components
            </p>
            <p>
              <i className="fa-solid fa-mobile-screen px-1 max-sm:my-1.5"></i>
              +1 5589 55488 55
            </p>
          </div>
          <div className="left flex gap-2 max-sm:my-1.5">
            <i className="bi bi-twitter-x opacity-60 cursor-pointer hover:opacity-100"></i>
            <i className="bi bi-facebook  opacity-60 cursor-pointer hover:opacity-100"></i>
            <i className="bi bi-instagram opacity-60 cursor-pointer hover:opacity-100 "></i>
            <i className="bi bi-linkedin  opacity-60 cursor-pointer hover:opacity-100"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

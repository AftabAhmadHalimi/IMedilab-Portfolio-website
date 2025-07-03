import React from "react";

const SocialMedia = () => {
  return (
    <>
      <span className="bg-gray-300 mx-3 mt-5 p-2 cursor-pointer inline-flex items-center justify-center rounded-full h-[35px] w-[35px] hover:bg-[var(--primary)] hover:text-white">  <i className="bi bi-twitter-x  "></i></span>
      <span className="bg-gray-300 mx-3 mt-5 p-2 cursor-pointer inline-flex items-center justify-center rounded-full h-[35px] w-[35px] hover:bg-[var(--primary)] hover:text-white">  <i className="bi bi-facebook  "></i></span>
      <span className="bg-gray-300 mx-3 mt-5 p-2 cursor-pointer inline-flex items-center justify-center rounded-full h-[35px] w-[35px] hover:bg-[var(--primary)] hover:text-white">  <i className="bi bi-instagram  "></i></span>
      <span className="bg-gray-300 mx-3 mt-5 p-2 cursor-pointer inline-flex items-center justify-center rounded-full h-[35px] w-[35px] hover:bg-[var(--primary)] hover:text-white">  <i className="bi bi-linkedin  "></i></span>
    </>
  );
};

export default SocialMedia;

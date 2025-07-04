const Footer = () => {
  return (
    <>
      <div   className="container-fluid mt-16 mx-auto py-10 bg-blue-100 ">
        <div data-aos="fade-up" data-aos-duration="500" className="container  mx-auto grid grid-cols-12 gap-10 max-lg:gap-3 max-lg:text-center">
          <div className="footerAbout col-span-4 flex flex-col gap-4  max-lg:col-span-12 max-lg:border-b max-lg:border-gray-400 max-lg:py-3">
            <h2 className="text-3xl text-[var(--primary)] font-bold">Medilab</h2>
            <p>
              A108 Adam Street
              <br />
              New York, NY 535022
            </p>
            <p>
              <strong>Phone: </strong>
              +1 5589 55488 55
            </p>
            <p>
              <strong>Email: </strong>
              info@example.com
            </p>
            <div className="social">
              <span className="border border-gray-500 mx-1 px-2 cursor-pointer inline-flex items-center justify-center rounded-full h-[35px] w-[35px] hover:border-[var(--primary)] hover:text-[var(--primary)]">
                {" "}
                <i className="bi bi-twitter-x  "></i>
              </span>
              <span className="border border-gray-500 mx-1 p-2 cursor-pointer inline-flex items-center justify-center rounded-full h-[35px] w-[35px] hover:border-[var(--primary)] hover:text-[var(--primary)]">
                {" "}
                <i className="bi bi-facebook  "></i>
              </span>
              <span className="border border-gray-500 mx-1 p-2 cursor-pointer inline-flex items-center justify-center rounded-full h-[35px] w-[35px] hover:border-[var(--primary)] hover:text-[var(--primary)]">
                {" "}
                <i className="bi bi-instagram  "></i>
              </span>
              <span className="border border-gray-500 mx-1 p-2 cursor-pointer inline-flex items-center justify-center rounded-full h-[35px] w-[35px] hover:border-[var(--primary)] hover:text-[var(--primary)]">
                {" "}
                <i className="bi bi-linkedin  "></i>
              </span>
            </div>
          </div>
          {/* Footer Useful links */}
          <div className="footerUseful col-span-2 max-lg:col-span-12 max-lg:border-b max-lg:border-gray-400 max-lg:py-3">
            <ul className="flex flex-col gap-2 ">
              <li className="font-bold text-[var(--secondary)] text-lg">Useful Links </li>
              <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]">Home </li>
              <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]">About us </li>
              <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]">Services </li>
              <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]">Terms of service </li>
              <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]">Privacy policy </li>
            </ul>
          </div>
          {/* Footer  Services */}
          <div className="footerServices col-span-2 max-lg:col-span-12 max-lg:border-b max-lg:border-gray-400 max-lg:py-3">
            <ul className="flex flex-col gap-2 ">

            <li className="font-bold text-[var(--secondary)] text-lg"> Our Services </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Web Design </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Web Development </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Product Management </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Marketing </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Graphic Design </li>
            </ul>
          </div>
          {/* Footer section 4 */}
          <div className="footerAbout col-span-2 max-lg:col-span-12 max-lg:border-b max-lg:border-gray-400 max-lg:py-3">
            <ul className="flex flex-col gap-2 ">

            <li className="font-bold text-[var(--secondary)] text-lg "> Our Services </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Web Design </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Web Development </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Product Management </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Marketing </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Graphic Design </li>
            </ul>
          </div>
          {/* Footer section 5 */}
          <div className="footerAbout col-span-2 max-lg:col-span-12">
            <ul className="flex flex-col gap-2 ">
            <li className="font-bold text-[var(--secondary)] text-lg"> Our Services </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Web Design </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Web Development </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Product Management </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Marketing </li>
            <li className=" hover:underline cursor-pointer hover:text-[var(--primary)]"> Graphic Design </li>
            </ul>
          </div>
        </div>
          {/* Copyrght */}
          <div className="container mx-auto text-center">
          <hr  className="my-5 border-gray-400"/>
          <h2>&copy; Copyright <strong>Medilab</strong> All Rights Reserved</h2>
          <p>Designed by <strong className="text-[var(--primary)]">BootstrapMade</strong> And Recreated by <strong className="text-[var(--primary)]">Aftab_Ahmad_Halimi</strong></p>
          </div>
      </div>
    </>
  );
};

export default Footer;

import Line from "./Line";
import SocialMedia from "./SocialMedia";
import Doctor1 from "./../assets/img/doctors/doctors-1.jpg";
import Doctor2 from "./../assets/img/doctors/doctors-2.jpg";
import Doctor3 from "./../assets/img/doctors/doctors-3.jpg";
import Doctor4 from "./../assets/img/doctors/doctors-4.jpg";

const Doctors = () => {
  return (
    <>
      <div id="doctors" className="container my-16 mx-auto max-sm:px-5">
        <h2 data-aos="fade-up" data-aos-duration="100" className="headers text-center">Doctos</h2>
        <Line />
        <p data-aos="fade-up" data-aos-duration="200" data-aos-delay="200" className="mb-20 text-center">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div className="doctorsCard grid grid-cols-12 grid-rows-2 gap-5 max-md:text-center">
          {/* Card 1 */}
          <div data-aos="fade-right" data-aos-duration="200" data-aos-delay="100"
            className="card1 col-span-6 w-full bg-white p-10 flex items-center justify-center gap-10 transition-transform ease-in-out delay-100 duration-300 transform hover:-translate-y-2 max-lg:col-span-12 max-sm:flex-col max-sm:gap-5"
            style={{ boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={Doctor1} alt="" className="h-36 rounded-full" />
            <div className="cardDetails">
              <h2 className="text-xl text-[var(--secondary)]">Walter White</h2>
              <p>Chief Medical Officer</p>
              <hr className="w-20 my-2 border-gray-200 max-sm:mx-auto max-sm:w-28" />
              <p className="">
                Explicabo voluptatem mollitia et repellat qui dolorum quasi
              </p>
              <div className="social">
                <SocialMedia />
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div data-aos="fade-left" data-aos-duration="200" data-aos-delay="200"
            className="card1 col-span-6 w-full bg-white  p-10 flex items-center justify-center gap-10 transition-all duration-300 transform hover:-translate-y-2  max-lg:col-span-12
            max-sm:flex-col max-sm:gap-5"
            style={{ boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={Doctor2} alt="" className="h-36 rounded-full" />
            <div className="cardDetails">
              <h2 className="text-xl text-[var(--secondary)]">Sarah Jhonson</h2>
              <p>Anesthesiologist</p>
              <hr className="w-20 my-2 border-gray-200 max-sm:mx-auto max-sm:w-28" />
              <p className="">
                Aut maiores voluptates amet et quis praesentium qui senda para
              </p>
              <div className="social">
                <SocialMedia />
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div data-aos="fade-right" data-aos-duration="200" data-aos-delay="300"
            className="card1 col-span-6 w-full bg-white  p-10 flex items-center justify-center gap-10 transition-all duration-300 transform hover:-translate-y-2  max-lg:col-span-12
            max-sm:flex-col max-sm:gap-5"
            style={{ boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={Doctor3} alt="" className="h-36 rounded-full" />
            <div className="cardDetails">
              <h2 className="text-xl text-[var(--secondary)]">William Anderson</h2>
              <p>Cardiology</p>
              <hr className="w-20 my-2 border-gray-200 max-sm:mx-auto max-sm:w-28" />
              <p className="">
                Quisquam facilis cum velit laborum corrupti fuga rerum quia
              </p>
              <div className="social">
                <SocialMedia />
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div data-aos="fade-left" data-aos-duration="200" data-aos-delay="300"
            className="card1 col-span-6 w-full bg-white  p-10 flex items-center justify-center gap-10 transition-all duration-300 transform hover:-translate-y-2  max-lg:col-span-12
            max-sm:flex-col max-sm:gap-5"
            style={{ boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)" }}
          >
            <img src={Doctor4} alt="" className="h-36 rounded-full" />
            <div className="cardDetails">
              <h2 className="text-xl text-[var(--secondary)]">Amanda Jepson</h2>
              <p>Neurosurgeon</p>
              <hr className="w-20 my-2 border-gray-200 max-sm:mx-auto max-sm:w-28" />
              <p className="">
                Dolorum tempora officiis odit laborum officiis et et accusamus
              </p>
              <div className="social">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;

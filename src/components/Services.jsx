import React, { useEffect } from "react";
import Line from "./Line";

const Services = () => {
  return (
    <>
      <div className="container mx-auto my-16 text-center">
        <h2 data-aos="fade-up" className="headers">Services</h2>
        {/* Adding the line in to the style */}
        <Line />

        <div className="servicesCards grid grid-cols-12 grid-rows-2 place-items-center gap-5">
          {/* Card1 */}
          <div data-aos="fade-up" data-aos-duration="200" data-aos-delay="100" className="card relative z-0 col-span-4 border border-gray-300 py-10 px-5 h-full hover:bg-[var(--primary)] hover:text-white group">
            <i
              className="fas fa-heartbeat cardIconStyler"
            ></i>
            <h2 className="py-5 text-2xl text-[var(--primary)] font-bold group-hover:text-white">Nesciunt Mete</h2>
            <p>
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>
          </div>
          {/* Card2 */}
          <div data-aos="fade-up" data-aos-duration="200" data-aos-delay="100" className="card relative z-0 col-span-4 border border-gray-300 py-10 px-5 h-full hover:bg-[var(--primary)] hover:text-white group">
            <i className="fas fa-pills cardIconStyler"></i>
            <h2 className="py-5 text-2xl text-[var(--primary)] font-bold group-hover:text-white">Eosle Commodi</h2>
            <p>
              Ut autem aut autem non a. Sint sint sit facilis nam iusto sinte
              Libero corrupti neque eum hic non nesciunt dolorem,
            </p>
          </div>
          {/* Card3 */}
          <div data-aos="fade-up" data-aos-duration="200" data-aos-delay="300" className="card relative z-0 col-span-4 border border-gray-300 py-10 px-5 h-full hover:bg-[var(--primary)] hover:text-white group">
            <i className="fas fa-hospital-user cardIconStyler"></i>
            <h2 className="py-5 text-2xl text-[var(--primary)] font-bold group-hover:text-white">Ledo Markt</h2>
            <p>
              Ut autem aut autem non a. Sint sint sit facilis nam iusto sinte
              Libero corrupti neque eum hic non nesciunt dolorem,
            </p>
          </div>
          {/* Card4 */}
          <div data-aos="fade-up" data-aos-duration="200" data-aos-delay="500" className="card relative z-0 col-span-4 border border-gray-300 py-10 px-5 h-full hover:bg-[var(--primary)] hover:text-white group">
            <i className="fas fa-dna cardIconStyler"></i>
            <h2 className="py-5 text-2xl text-[var(--primary)] font-bold group-hover:text-white">Asperiores Commodit</h2>
            <p>
              Non et temporibus minus omnis sed dolor esse onsequatur.
              Cupiditate sed error ea fuga sit provident adipisci neque.
            </p>
          </div>
          {/* Card5 */}
          <div data-aos="fade-up" data-aos-duration="200" data-aos-delay="700" className="card relative z-0 col-span-4 border border-gray-300 py-10 px-5 h-full hover:bg-[var(--primary)] hover:text-white group">
            <i className="fas fa-wheelchair cardIconStyler"></i>
            <h2 className="py-5 text-2xl text-[var(--primary)] font-bold group-hover:text-white">Velit Doloremque</h2>
            <p>
              Cumque et suscipit saepe. Est maiores autem enim facilis ut aut
              ipsam corporis aut. Sed animi at autem alias eius labore.
            </p>
          </div>
          {/* Card6 */}
          <div data-aos="fade-up" data-aos-duration="200" data-aos-delay="900" className="card relative z-0 col-span-4 border border-gray-300 py-10 px-5 h-full hover:bg-[var(--primary)] hover:text-white group">
            <i className="fas fa-notes-medical cardIconStyler"></i>
            <h2 className="py-5 text-2xl text-[var(--primary)] font-bold group-hover:text-white">Dolori Architecto</h2>
            <p>
              Hic molestias ea quibusdam eos. Fugiat enim doloremque ut neque
              non et debitis iure. Corrupti recusandae ducimus enim.
            </p>
          </div>
        </div>
      </div>

      {/* Sub Services Appointment */}
        <div className="container mx-auto text-center">
            <h2 data-aos="fade-up" data-aos-duration="300" data-aos-delay="100" className="headers">Appointment</h2>
            <Line />
            <p  data-aos="fade-up" data-aos-duration="300" data-aos-delay="300" className="mb-10">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

            <form  data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className="">
                <div className="grid grid-cols-12 grid-rows-2 gap-8">
                 <input  type="text"  placeholder="Your text" className="col-span-4 w-full  border border-gray-400 focus:outline-[var(--primary)] px-2 rounded h-13"/>
                 <input  type="email"  placeholder="Your email" className="col-span-4 w-full  border border-gray-400 focus:outline-[var(--primary)] px-2 rounded h-13"/>
                 <input  type="number"  placeholder="Your number" className="col-span-4 w-full  border border-gray-400 focus:outline-[var(--primary)] px-2 rounded h-13"/>
                 <input  type="date"  placeholder="Your date"  className="col-span-4 w-full  border border-gray-400 focus:outline-[var(--primary)] px-2 rounded h-13"/>
                <select className="col-span-4 w-full  border border-gray-400 focus:outline-[var(--primary)] px-2 rounded h-13">
                    <option value="">Select Department</option>
                    <option value="">Department 1</option>
                    <option value="">Department 1</option>
                    <option value="">Department 1</option>
                </select>
                <select className="col-span-4 w-full  border border-gray-400 focus:outline-[var(--primary)] px-2 rounded h-13">
                    <option value="">Select Doctor</option>
                    <option value="">Doctor 1</option>
                    <option value="">Doctor 1</option>
                    <option value="">Doctor 1</option>
                </select>
                <textarea name="" id="" rows={"10"} placeholder="Message (Optional)" className="col-span-12 border border-gray-400 focus:outline-[var(--primary)] px-2 rounded">
                </textarea>
                </div>
            </form>
            <button  data-aos="flip-left" data-aos-duration="200"   className='bg-[var(--primary)] px-7 py-3 rounded-full text-white my-5'>Make an Appointment</button>
        </div>

    </>
  );
};

export default Services;

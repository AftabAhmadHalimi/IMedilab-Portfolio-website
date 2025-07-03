import React, { useEffect } from "react";
import Line from "./Line";

const Contact = () => {
  return (
    <>
      <h2
        data-aos="fade-up"
        data-aos-duration="100"
        className="headers text-center my-14"
      >
        Contact
      </h2>
      <Line />
      <p
        data-aos="fade-up"
        data-aos-duration="200"
        data-aos-delay="200"
        className="mb-20 text-center"
      >
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* Adding the Location for contact */}
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        className="container-fluid"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13143.88698575001!2d69.16226141876066!3d34.55427073994312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16e9754cf1933%3A0x66a8db2b39d5c11f!2sQala-e-Fathullah%2C%20Kabul%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1751551918170!5m2!1sen!2s"
          width="100%"
          height="350"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container grid grid-cols-12 gap-10 mx-auto mt-15 max-lg:grid-rows-2">
        {/* Right Side of the contact page */}
        <div
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-delay="200"
          className="left col-span-5 max-lg:col-span-12"
        >
          <ul className="space-y-5">
            <li className="flex gap-5 items-center ">
              <span className="h-14 w-14 bg-[var(--primary)] text-white flex justify-center items-center rounded-full text-2xl">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
              </span>

              <p>
                {" "}
                <strong className="block text-[var(--primary)] text-xl">
                  Location
                </strong>
                A108 Adam Street, New York, Ny 535022
              </p>
            </li>

            <li className="flex gap-5 items-center ">
              <span className="h-14 w-14 bg-[var(--primary)] text-white flex justify-center items-center rounded-full text-2xl">
                <i className="bi bi-telephone flex-shrink-0"></i>
              </span>

              <p>
                <strong className="block text-[var(--primary)] text-xl">
                  Call Us
                </strong>
                +1 5589 55488 55
              </p>
            </li>
            <li className="flex gap-5 items-center ">
              <span className="h-14 w-14 bg-[var(--primary)] text-white flex justify-center items-center rounded-full text-2xl">
                <i className="bi bi-envelope flex-shrink-0"></i>
              </span>
              <p>
                <strong className="block text-[var(--primary)] text-xl">
                  Email Us
                </strong>
                info@example.com
              </p>
            </li>
          </ul>
        </div>
        {/* Left part of the contact page */}
        <div
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-delay="200"
          className="right col-span-7 grid grid-cols-12  gap-5 max-lg:col-span-12"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="col-span-6 w-full p-2  border border-gray-300 focus:outline-[var(--primary)]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="col-span-6 w-full p-2 border border-gray-300 focus:outline-[var(--primary)]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="col-span-12 w-full  p-2 border border-gray-300 focus:outline-[var(--primary)]"
          />
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="col-span-12  p-2 border border-gray-300 focus:outline-[var(--primary)]"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Contact;

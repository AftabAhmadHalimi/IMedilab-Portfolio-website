import React, { useState } from "react";
const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="accordion border border-gray-300 bg-white p-4 my-3 rounded hover:bg-[var(--primary)]  group">
        <h2
          onClick={() => setShow(!show)}
          className="text-xl text-[var(--primary)] font-bold flex justify-between items-center group-hover:text-white cursor-pointer max-sm:text-base"
        >
          {question}
          <i
            className={`bi ${show ? "bi-chevron-right" : "bi-chevron-down"}`}
          ></i>
        </h2>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out
      ${show ? "max-h-0 opacity-0" : "max-h-40 opacity-100"} 
      group-hover:text-white`}
        >
          <p className="text-lg">{answer}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;


{
  /* My Accordion that i have created 

  <div className="accordion border border-gray-300 bg-white p-4 my-3 rounded hover:bg-[var(--primary)] transition-all duration-300  group">
      <h2 onClick={() => setShow(!show)} className='text-xl text-[var(--primary)] font-bold flex justify-between items-center group-hover:text-white'> {question} <i className={bi  ${show ? "bi-chevron-right" : "bi-chevron-down"}}></i> </h2>
         <p className={group-hover:text-white text-lg  ${show ? "hidden" : ""}}>{answer}</p>
    </div>


  */
}
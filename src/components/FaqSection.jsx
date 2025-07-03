import React from 'react';
import Line from './Line';
import AccordionData from './JsonData/AccordionData';
import Accordion from './Accordion';

const FaqSection = () => {
  return (
    <>
      
      <div className="container-fluid bg-[var(--bg-third)] py-10">
        <div className="container mx-auto px-60 max-lg:px-10">
        <h2 data-aos="fade-up" data-aos-duration="300" data-aos-delay="100" className="headers text-center">Frequently Asked Question</h2>
            <Line />
            <p  data-aos="fade-up" data-aos-duration="300" data-aos-delay="300" className="mb-10 text-center">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            {/* Mapping the Accordion data */}
            {
                AccordionData.map((elm) => {
                    const {question, answer, id} = elm;
                    return <Accordion  key={id} question={question} answer={answer}/>
                })
            }


        </div>
      </div>

    </>
  )
}

export default FaqSection

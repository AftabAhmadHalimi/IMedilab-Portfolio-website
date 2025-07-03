import React, { useEffect } from 'react'
import Line from './Line'
import Gallery1 from "./../assets/img/gallery/gallery-1.jpg"
import Gallery2 from './../assets/img/gallery/gallery-2.jpg'
import Gallery3 from './../assets/img/gallery/gallery-3.jpg'
import Gallery4 from './../assets/img/gallery/gallery-4.jpg'
import Gallery5 from './../assets/img/gallery/gallery-5.jpg'
import Gallery6 from './../assets/img/gallery/gallery-6.jpg'
import Gallery7 from './../assets/img/gallery/gallery-7.jpg'
import Gallery8 from './../assets/img/gallery/gallery-8.jpg'

const Gallary = () => {

  return (
    <> ې
    <div className="container-fluid text-center p-2">
    <h2 className='headers'>Gallery</h2>
    <Line/>
    <p className='my-10 text-base'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

        <div className="gallaryImages grid grid-cols-12 grid-rows-2 gap-1">
            <div data-aos="fade-up" data-aos-duration="300" className='col-span-3 overflow-hidden'>
                <img src={Gallery1} alt="Gallery images" className='h-full w-full transition-transform duration-500 transform hover:scale-110' />
            </div>
            <div data-aos="fade-up" data-aos-duration="300" className='col-span-3 overflow-hidden'>
                <img src={Gallery2} alt="Gallery images" className='h-full w-full transition-transform duration-500 transform hover:scale-110' />
            </div>
            <div  data-aos="fade-up" data-aos-duration="300" className='col-span-3 overflow-hidden'>
                <img src={Gallery3} alt="Gallery images" className='h-full w-full transition-transform duration-500 transform hover:scale-110' />
            </div>
            <div data-aos="fade-up" data-aos-duration="300" className='col-span-3 overflow-hidden'>
                <img src={Gallery4} alt="Gallery images" className='h-full w-full transition-transform duration-500 transform hover:scale-110' />
            </div>
            <div data-aos="fade-up" data-aos-duration="300" className='col-span-3 overflow-hidden'>
                <img src={Gallery5} alt="Gallery images" className='h-full w-full transition-transform duration-500 transform hover:scale-110' />
            </div>
            <div data-aos="fade-up" data-aos-duration="300" className='col-span-3 overflow-hidden'>
                <img src={Gallery6} alt="Gallery images" className='h-full w-full transition-transform duration-500 transform hover:scale-110' />
            </div>
            <div data-aos="fade-up" data-aos-duration="300" className='col-span-3 overflow-hidden'>
                <img src={Gallery7} alt="Gallery images" className='h-full w-full transition-transform duration-500 transform hover:scale-110' />
            </div>
            <div data-aos="fade-up" data-aos-duration="300" className='col-span-3 overflow-hidden'>
                <img src={Gallery8} alt="Gallery images" className='h-full w-full transition-transform duration-500 transform hover:scale-110' />
            </div>

        </div>
    </div>
    </>
  )
}

export default Gallary

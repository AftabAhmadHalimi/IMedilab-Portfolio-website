import aboutImg from './../assets/img/about.jpg';
const About = () => {
  return (
    <>
      <div className="container mx-auto my-20 grid grid-cols-12 gap-10  max-lg:gap-2 max-md:gap-5">

        <img data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" src={aboutImg} alt="Doctors Image" className='img-fluid col-span-6 bg-no-repeat bg-cover  w-[100vw] max-lg:col-span-12' />

        <div data-aos="fade-down" className="aboutText col-span-6 max-lg:col-span-12">
          <h2 className='text-6xl text-[var(--primary)]' >About Us</h2>
          <p className='py-4 text-lg text-[var(--secondary)]'>Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
          </p>
          <ul>

            <li className='flex gap-4 items-center my-10'>
              <i className='fa-solid fa-vial-circle-check text-[var(--primary)] text-6xl'></i>
              <div>

                <p className='text-[var(--primary)] text-2xl mb-2'>Ullamco laboris nisi ut aliquip consequat</p>
                <p className='text-lg'>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
              </div>
            </li>
            <li className='flex gap-4 items-center my-10'>
              <i className='fa-solid fa-pump-medical text-[var(--primary)] text-6xl'></i>
              <div>

                <p  className='text-[var(--primary)] text-2xl mb-2'>Magnam soluta odio exercitationem reprehenderi
                </p>
                <p className='text-lg'>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
              </div>
            </li>
            <li className='flex gap-4 items-center my-10'>
              <i className='fa-solid fa-heart-circle-xmark text-[var(--primary)] text-6xl'></i>
              <div>
                <p  className='text-[var(--primary)] text-2xl mb-2'>Voluptatem et qui exercitationem</p>
                <p className='text-lg'>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
      {/* Sub About */}
      <div className="container-fluid flex justify-center items-center bg-blue-100 py-10">
        <div className="container flex justify-center items-center text-center max-lg:flex-col max-lg:space-y-7">
          {/* Card 1 */}
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" className="card1 p-4 relative  bg-white w-full mx-5">
            <span className='h-14 w-14 absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[var(--primary)] p-3 text-xl text-white rounded-full flex justify-center items-center'>
            <i className='fa-solid fa-user-doctor '></i>
            </span>
            <div className='py-6'>
              <p className='font-extrabold text-2xl text-[var(--secondary)]'>85</p>
              <p className='text-2xl'>Doctors</p>
            </div>
            </div>
          {/* Card 2 */}
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className="card2 p-4 relative  bg-white w-full mx-5">

            <span  className='h-14 w-14 absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[var(--primary)] p-3 text-xl text-white rounded-full flex justify-center items-center'>

            <i className='bi bi-hospital'></i>
            </span>

            <div className='py-6'>
              <p className='font-extrabold text-2xl text-[var(--secondary)]'>18</p>
              <p className='text-2xl'>Departments</p>
            </div>
            </div>
          {/* Card 3 */}
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="700" className="card3 p-4 relative  bg-white w-full mx-5">
              <span className=' w-14 h-14 absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[var(--primary)] p-3 text-xl text-white rounded-full flex justify-center items-center'>

            <i className='fas fa-flask '></i>
              </span>
            <div className='py-6'>
              <p className='font-extrabold text-2xl text-[var(--secondary)]'>12</p>
              <p className='text-2xl'>Research Labs</p>
            </div>
            </div>
          {/* Card 4 */}
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="900" className="card4 p-4 relative  bg-white w-full mx-5">
            <span className=' h-14 w-14 absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[var(--primary)] p-3 text-xl text-white rounded-full flex justify-center items-center'>

            <i className='fas fa-award '></i>
            </span>
            <div className='py-6'>
              <p className='font-extrabold text-2xl text-[var(--secondary)]'>150</p>
              <p className='text-2xl'>Awards</p>
            </div>
            </div>

          
        </div>
      </div>
    </>
  )
}

export default About

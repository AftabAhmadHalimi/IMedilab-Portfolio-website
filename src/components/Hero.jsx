import HeroImg from './../assets/img/hero-bg.jpg'

const Hero = () => {
  return (
    <>
    <div  className="hero h-screen bg-no-repeat bg-center bg-cover flex justify-center items-center max-lg:h-fit max-lg:py-10" style={{backgroundImage: `url(${HeroImg})`}}>
      <div className="container max-sm:px-5">
        <h1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='text-[var(--secondary)] font-extrabold text-7xl uppercase max-lg:text-4xl max-sm:text-3xl max-sm:text-center max-sm:my-5'>Welcome to medilab</h1>
        <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" className='my-7 text-2xl max-sm:hidden'>We are team of talented designers making websites with React + TailwindCss</p>
        <div className="HeroCards grid grid-cols-12 items-center gap-7 max-lg:items-start max-sm:gap-3">
          {/* Card1 */}
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className="card1 col-span-3 bg-[var(--primary)] text-white text-left inline-flex flex-col   p-8 rounded max-lg:col-span-4 max-sm:col-span-full">
            <h2 className='text-4xl font-extrabold'>Why Choose Medilab?</h2>
            <p className='py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto optio laudantium, enim temporibus quaerat inventore nulla nemo error beatae! Culpa neque voluptatem ex cum provident dolores itaque blanditiis libero necessitatibus.</p>
            <button className='bg-white/50 text-white px-4 py-2 rounded-full mx-auto  hover:bg-white hover:text-[var(--primary)] transition-all duration-500'>Learn More <i className="fa-sharp fa-solid fa-chevron-right"></i></button>
          </div>
          <div className="rightHeroCard col-span-7 grid grid-cols-12 gap-7  max-lg:gap-2 max-sm:col-span-full">
          {/* Card 2 */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700" className="card2 col-span-4 text-center bg-white px-5 py-6 rounded shadow-2xs max-lg:col-span-12 max-lg:w-full max-sm:col-span-full max-sm:my-2">
          <i className="bi bi-clipboard-data text-6xl text-[var(--primary)]"></i>
          <h1 className='py-5 text-2xl text-[var(--secondary)] font-bold'>
          Corporis voluptates officia eiusmod
          </h1>
          <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
          </div>
          {/* Card 3 */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900" className="card3 col-span-4 text-center bg-white/70 px-5 py-6 rounded shadow-2xs max-lg:col-span-12 max-lg:w-full max-sm:col-span-full max-sm:my-2">
          <i className="bi bi-gem text-6xl text-[var(--primary)]"></i>
          <h1 className='py-5 text-2xl text-[var(--secondary)] font-bold'>Ullamco laboris ladore pan</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
          </div>
          {/* Card 4 */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1100" className="card4 col-span-4 text-center bg-white/50 px-5 py-6 rounded shadow-2xs max-lg:col-span-12 max-lg:w-full max-sm:col-span-full max-sm:my-2 max-sm:mb-5">
          <i className="bi bi-inboxes text-6xl text-[var(--primary)]"></i>
          <h1 className='py-5 text-2xl text-[var(--secondary)] font-bold'>Ullamco laboris ladore pan</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
          </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Hero;

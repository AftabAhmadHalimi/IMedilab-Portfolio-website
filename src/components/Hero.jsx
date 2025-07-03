import HeroImg from './../assets/img/hero-bg.jpg'

const Hero = () => {
  return (
    <>
    <div  className="hero h-screen w-full bg-no-repeat bg-center bg-cover flex justify-center items-center" style={{backgroundImage: `url(${HeroImg})`}}>
      <div className="container">
        <h1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='text-[var(--secondary)] font-extrabold text-7xl uppercase'>Welcome to medilab</h1>
        <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" className='my-7 text-2xl'>We are team of talented designers making websites with React + TailwindCss</p>
        <div className="HeroCards grid grid-cols-12 items-center gap-7 ">
          {/* Card1 */}
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className="card1 col-span-3 bg-[var(--primary)] text-white text-left inline-flex flex-col   p-8 rounded">
            <h2 className='text-4xl font-extrabold'>Why Choose Medilab?</h2>
            <p className='py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto optio laudantium, enim temporibus quaerat inventore nulla nemo error beatae! Culpa neque voluptatem ex cum provident dolores itaque blanditiis libero necessitatibus.</p>
            <button className='bg-white/50 text-white px-4 py-2 rounded-full mx-auto  hover:bg-white hover:text-[var(--primary)] transition-all duration-500'>Learn More <i className="fa-sharp fa-solid fa-chevron-right"></i></button>
          </div>
          <div className="rightHeroCard col-span-7 grid grid-cols-12 gap-7 ">
          {/* Card 2 */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700" className="card2 col-span-4 text-center bg-white px-5 py-6 rounded shadow-2xs">
          <i className="bi bi-clipboard-data text-6xl text-[var(--primary)]"></i>
          <h1 className='py-5 text-2xl text-[var(--secondary)] font-bold'>
          Corporis voluptates officia eiusmod
          </h1>
          <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900" className="card3 col-span-4 text-center bg-white/70 px-5 py-6 rounded shadow-2xs">
          <i className="bi bi-gem text-6xl text-[var(--primary)]"></i>
          <h1 className='py-5 text-2xl text-[var(--secondary)] font-bold'>Ullamco laboris ladore pan</h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1100" className="card4 col-span-4 text-center bg-white/50 px-5 py-6 rounded shadow-2xs">
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

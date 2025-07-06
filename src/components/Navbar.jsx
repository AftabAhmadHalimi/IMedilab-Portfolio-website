import React from 'react'

const Navbar = () => {
  return (
    <>
      {/*Navbar  */}
      <nav className='bg-white flex justify-center items-center p-4 sticky top-0 z-[999]'>
        <div className="container flex justify-between items-center">

        <div className="logo font-bold text-[var(--secondary)] text-4xl">Medilab</div>
        <ul className='flex items-center space-x-10 mr-15 max-xl:hidden'>
            <li className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[var(--primary)] after:transition-all after:duration-300 hover:text-[var(--primary)]"><a href="#">Home</a></li>
            <li className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[var(--primary)] after:transition-all after:duration-300 hover:text-[var(--primary)]"><a href="#">About</a></li>
            <li className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[var(--primary)] after:transition-all after:duration-300 hover:text-[var(--primary)]"><a href="#">Services</a></li>
            <li className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[var(--primary)] after:transition-all after:duration-300 hover:text-[var(--primary)]"><a href="#">Departments</a></li>
            <li className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[var(--primary)] after:transition-all after:duration-300 hover:text-[var(--primary)]"><a href="#">Doctors</a></li>
            {/* When you finished the project create a dropdown */}
            <li className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[var(--primary)] after:transition-all after:duration-300 hover:text-[var(--primary)] group"><a href="#">Dropdown</a>
            
            {/* Creating the DropDwon using tailwindcss classes */}
            <ul className='hidden group-hover:block absolute top-5 -left-2 bg-white shadow-2xl  w-[150px] text-center'>
              <li className='border-b border-gray-300 py-1 hover:bg-[var(--primary)] hover:text-white cursor-pointer'>Dropdown 1</li>
              <li className='border-b border-gray-300 py-1 hover:bg-[var(--primary)] hover:text-white cursor-pointer'>Dropdown 2</li>
              <li className='border-b border-gray-300 py-1 hover:bg-[var(--primary)] hover:text-white cursor-pointer'>Dropdown 3</li>
              <li className='border-b border-gray-300 py-1 hover:bg-[var(--primary)] hover:text-white cursor-pointer'>Dropdown 4</li>
              <li className='py-1 hover:bg-[var(--primary)] hover:text-white cursor-pointer'>Dropdown 5</li>
            </ul>


            </li>

            <li className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[var(--primary)] after:transition-all after:duration-300 hover:text-[var(--primary)]"><a href="#">Contact</a></li>
            <li className='bg-[var(--primary)] p-3 rounded-full text-white'><a href='#'>Make an Appointment</a></li>
        </ul>
        {/* Humburger icon */}
        <div className="hum flex flex-col justify-center items-center gap-1 bg-gray-100 w-13 h-13 rounded-full text-center hover:bg-gray-300 cursor-pointer group xl:hidden">
          <div className="line w-7 h-1.5 border-t transition-w transition-bg duration-500 group-hover:w-5"></div>
          <div className="line w-7 h-1.5 border-t "></div>
          <div className="line w-7 h-1.5 border-t transition-w transition-bg duration-500 group-hover:w-5"></div>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

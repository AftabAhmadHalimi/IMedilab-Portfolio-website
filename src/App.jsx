import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Gallary from "./components/Gallary";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import UserContext from './context/UserContext';

// ّImporting the AOS animation
import AOS from "aos";
import "aos/dist/aos.css";
import MinNavbar from "./components/MinNavbar";

const App = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    AOS.init({ once: true }); // Init AOS (global options)
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  // ++++++++++++++ If you want to add the loader for production so use the below useEffect else the above +++++++++++
  // useEffect(() => {
  //   AOS.init({ once: true });
  //   document.body.classList.add('loading');

  // Wait for full page load (including images, etc.)
  //   const handlePageLoad = () => {
  //     setLoad(false);
  //     document.body.classList.remove('loading');
  //   };

  // Check if page is already loaded (for faster reloads)
  //   if (document.readyState === 'complete') {
  //     handlePageLoad();
  //   } else {
  //     window.addEventListener('load', handlePageLoad);
  //   }

  //   return () => {
  //     window.removeEventListener('load', handlePageLoad);
  //     document.body.classList.remove('loading');
  //   };
  // }, []);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <>
          <div className="overflow-hidden">
        <UserContext>
            <MinNavbar/>
            <Header />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Doctors />
            <FaqSection />
            <Gallary />
            <Contact />
            <Footer />
        </UserContext>
          </div>
        </>
      )}
    </>
  );
};

export default App;

// Note to do
// Add px-15 to all the containers

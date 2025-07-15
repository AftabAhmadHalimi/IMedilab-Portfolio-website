import React, { useContext, useEffect, useState } from "react";
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
import CreateContext from "./context/CreateContext";


// ّImporting the AOS animation
import AOS from "aos";
import "aos/dist/aos.css";
import MinNavbar from "./components/MinNavbar";

const App = () => {
  const [load, setLoad] = useState(true);
  const {show} = useContext(CreateContext);
  useEffect(() => {
    AOS.init({ once: true }); // Init AOS (global options)
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);



  // Code while the popup is open to lock the scrool
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; // stop body scroll
    } else {
      document.body.style.overflow = "auto"; // allow body scroll again
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);


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
          </div>
        </>
      )}
    </>
  );
};

export default App;

// Note to do
// Add px-15 to all the containers

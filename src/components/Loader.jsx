import React from 'react';
import LoaderImg from './../assets/img/loader/loader-1.gif'

const Loader = () => {
  return (
    <>

     <div className="container-fluid overflow-hidden h-[100vh] flex justify-center items-center">
        <img src={LoaderImg} alt="" />
     </div>

    </>
  )
}

export default Loader

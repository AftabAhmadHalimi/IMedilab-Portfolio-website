import React, { useState } from 'react'
import CreateContext from './CreateContext.js'
const UserContext = (props) => {

  const [show, setShow] = useState(false);
  const resNavbarShow = () =>{
    setShow(!show)
  }

  return (
    <>

    <CreateContext.Provider value={{show, resNavbarShow}}>
        {props.children}
    </CreateContext.Provider>
      
    </>
  )
}

export default UserContext

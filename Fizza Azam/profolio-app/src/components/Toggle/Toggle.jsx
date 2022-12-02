import React from 'react'
import DarkMode from '../../DarkMode'
import "./Toggle.css"
// import { FaMoon} from "@react-icons/all-files/fa/FaMoon";
// import Context from './Context';
// import { FaSun} from "@react-icons/all-files/fa/FaSun";

export default function Toggle() {
  return (
    <div className='toggle'>
      <DarkMode/>
        {/* <Context/> */}
        <div className='t-button'></div>
  </div>
  )
}

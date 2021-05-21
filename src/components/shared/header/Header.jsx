import React from "react"
import { Link } from "react-router-dom"
import Hamburger from './Hamburger'
import Band from '../../../assets/images/black-band.png'
import Dylan from '../../../assets/images/dylan.png'
import Manley from '../../../assets/images/manley.png'

import './Header.scss'

function Header(){
  
  function fullName(e) {
    e.target.style.height = 'calc(40px + 5vmin)'}

  return (
    <>
    <div className='header'>
      <div className='h-burg'>
        <Hamburger/>
      </div>
      <div className='full-name'>
        <Link 
            to="/home" 
            className='name-link'> 
          <img onMouseOver={fullName} src={Dylan} alt='Dylan' className='dylan name'></img>
          <img onMouseOver={fullName} src={Manley} alt='Manley' className='manley name'></img>
        </Link>
      </div>
      <div>
        <img src={Band} className='b-band' alt='black band' />
      </div>
    </div>
    </>
  );
}

export default Header;

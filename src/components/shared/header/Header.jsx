import React from "react"
import { Link } from "react-router-dom"
import Hamburger from './Hamburger'
import Band from '../../../assets/images/black-band.png'

import './Header.scss'

function Header(){

  return (
    <>
    <div className='header'>
      <div>
        <Hamburger/>
      </div>
      <div className='name'>
        <Link to="/" className='name-link' > 
          Dylan Manley
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

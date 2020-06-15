import React from "react"
import { Link } from "react-router-dom"
import Hamburger from './Hamburger'
import Band from '../../../assets/images/black-band.png'

import './Footer.scss'

function Footer(){

  return (
    <>
    <div id='footer'>
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

export default Footer;

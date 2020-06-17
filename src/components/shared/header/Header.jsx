import React from "react"
import { Link } from "react-router-dom"
import Hamburger from './Hamburger'
import Band from '../../../assets/images/black-band.png'
import Dylan from '../../../assets/images/dylan.png'
import Manley from '../../../assets/images/manley.png'

import './Header.scss'

function Header(){

  return (
    <>
    <div className='header'>
      <div>
        <Hamburger/>
      </div>
      <div className='full-name'>
        <Link to="/" className='name-link' > 
        <img src={Dylan} alt='Dylan' className='dylan name'></img>
          <img src={Manley} alt='Manley' className='manley name'></img>
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

import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.scss'
import D from '../../../assets/images/D-green.png'
import L from '../../../assets/images/L-green.png'
import N from '../../../assets/images/N-green.png'

function Landing(){

    function mouseLetter(e) {
        e.target.style.transform = 'rotate(-1.2deg)'
        e.target.style.filter= 'brightness(1.2)'
        e.target.style.height= '33vmin'
      }
    
      function clickLogo(e) {
        e.target.style.transform = 'rotate(-90deg)'
        
      }

  return (
    <div className='landing'>
      <div className='letters'>
        <Link to="/home">
          <img  
            src={D} 
            alt='D' 
            onMouseOver={mouseLetter}
            className='dln'
            onClick={clickLogo}
          >
          </img>
          <img  
            src={L} 
            alt='L' 
            onMouseOver={mouseLetter}
            className='dln'
            onClick={clickLogo}
          >
          </img>
          <img  
            src={N} 
            alt='N' 
            onMouseOver={mouseLetter}
            className='dln'
            onClick={clickLogo}
          >
          </img>
        </Link>
      </div>            
    </div>
  );      
}

export default Landing

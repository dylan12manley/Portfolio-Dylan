import React from "react"
import { Link } from "react-router-dom"
import D from '../../../assets/images/D-green'

function Landing(){

    function mouseLogo(e) {
        e.target.style.transform = 'rotate(-.12deg)'
        e.target.style.filter= 'brightness(1.2)'
        e.target.style.height= '72vmin'
      }
    
      function clickLogo(e) {
        e.target.style.transform = 'rotate(-2deg)'
        e.target.style.height= '72vmin'
      }

  return (
    <div className='landing'>
      <div style={{paddingTop: '10vh'}} >
        <Link to="/home">
          <img  
            src={D} 
            alt='D' 
            onMouseOver={mouseLogo}
            onClick={clickLogo}
          >
          </img>
        </Link>
      </div>            
    </div>
  );      
}

export default Landing

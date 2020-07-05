import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.scss'
import D from '../../../assets/images/d-black.png'
import Y from '../../../assets/images/y-black.png'
import L from '../../../assets/images/l-black.png'
import A from '../../../assets/images/a-black.png'
import N from '../../../assets/images/n-black.png'
import M from '../../../assets/images/m-black.png'
import E from '../../../assets/images/e-black.png'

function Landing(){

    function mouseA(e) {e.target.style.transform = 'rotate(-12deg)' 
                        e.target.style.width= '24vw'}
    function mouseB(e) {e.target.style.transform = 'rotate(54deg)'}
    function mouseC(e) {e.target.style.transform = 'rotate(272deg)' 
                        e.target.style.height= '33vmin'}
    function mouseD(e) {e.target.style.transform = 'rotate(3deg)' 
                        e.target.style.height= '19vh'}
    function clickLogo(e) {e.target.style.transform = 'rotate(-90deg)'}

  return (
    <div id='landing'>
      <div className='first-name'>
        <Link to="/home">
          <img src={D} 
            alt='D' 
            onMouseOver={mouseA} 
            className='dylan-imgs' 
            onClick={clickLogo}>
          </img>
          <img src={Y} 
            alt='Y' 
            onMouseOver={mouseB} 
            className='dylan-imgs' 
            onClick={clickLogo}>
          </img>
          <img src={L} 
            alt='L' 
            onMouseOver={mouseA}
            className='dylan-imgs' 
            onClick={clickLogo}>
          </img>
          <img src={A} 
            alt='A' 
            onMouseOver={mouseB}
            className='dylan-imgs' 
            onClick={clickLogo}>
          </img>
          <img src={N} 
            alt='N' 
            onMouseOver={mouseA}
            className='dylan-imgs dylan-n' onClick={clickLogo}></img>
        </Link>
      </div>

      {/* thisa middle of the landing page verticaly ways*/}
      
      <div className='seccond-name'>
        <Link to="/self">
          <img src={M} alt='M' onMouseOver={mouseB} className='manley-img-m' onClick={clickLogo}></img>
          <div class='anley'>
            <img src={A} 
              alt='A' 
              onMouseOver={mouseD} 
              className='manley-img-a' 
              onClick={clickLogo}>
            </img>
            <img src={N} 
              alt='N' 
              onMouseOver={mouseC} 
              className='manley-img-n' 
              onClick={clickLogo}>
            </img>
         
            <img src={L} 
              alt='L' 
              onMouseOver={mouseD} 
              className='manley-img-l'
              onClick={clickLogo}>
            </img>
            <img src={E} 
              alt='E' 
              onMouseOver={mouseC} 
              className='manley-img-e' 
              onClick={clickLogo}>
            </img>
            <img src={Y} 
              alt='Y' 
              onMouseOver={mouseB} 
              className='manley-img-e'
              onClick={clickLogo}>
            </img>
          </div> 
        </Link>
      </div>        
    </div>
  );      
}

export default Landing

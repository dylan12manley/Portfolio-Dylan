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
  function mouseA(e) {e.target.style.transform = 'rotate(-12deg)'}
  function mouseA2(e) {e.target.style.transform = 'rotate(0deg)'}                  
  function mouseB(e) {e.target.style.transform = 'rotate(54deg)'}
  function mouseB2(e) {e.target.style.transform = 'rotate(180deg)'}
  function mouseC(e) {e.target.style.transform = 'rotate(272deg)'
                      e.target.style.transition= '1.5s'}
  function mouseD(e) {e.target.style.transform = 'rotate(133deg)'
                      e.target.style.transition= '1.5s'}
  function mouseM(e) {e.target.style.transform = 'rotate(-123deg)'
                      e.target.style.transition= '1.5s'}
  function mouseN(e) {e.target.style.transition= '5.5s'
                      e.target.style.transform = 'rotate(-93deg)'}
  function mouseO(e) {e.target.style.transition = '2s'
                      e.target.style.transform = 'rotate(-900deg)'}
  return (
    
    <div id='landing'>
      <div className='first-name'>
        <Link to="/home">
          <img src={D} 
            alt='D' 
            onMouseOver={mouseA} 
            onMouseLeave={mouseA2}
            className='dylan-imgs'>
          </img>
          <img src={Y} 
            alt='Y' 
            onMouseOver={mouseB}
            onMouseLeave={mouseA2} 
            className='dylan-imgs'>
          </img>
          <img src={L} 
            alt='L' 
            onMouseOver={mouseA}
            onMouseLeave={mouseA2}
            className='dylan-imgs'>
          </img>
          <img src={A} 
            alt='A' 
            onMouseOver={mouseB}
            onMouseLeave={mouseA2}
            className='dylan-imgs'>
          </img>
          <img src={N} 
            alt='N' 
            onMouseOver={mouseA}
            onMouseLeave={mouseB2}
            className='dylan-imgs dylan-n'>
          </img>
        </Link>
      </div>
      <div className='seccond-name'>
        <Link to="/home">
          <img src={M} 
              alt='M' 
              onMouseOver={mouseM}
              onMouseLeave={mouseA2} 
              className='manley-img-m' >
              </img>
          <div className='anley'>
            <img src={A} 
              alt='A' 
              onMouseOver={mouseN}
              onMouseLeave={mouseA2} 
              className='manley-img-a' >
            </img>
            <img src={N} 
              alt='N' 
              onMouseOver={mouseC}
              onMouseLeave={mouseB2} 
              className='manley-img-n' >
            </img>
            <img src={L} 
              alt='L' 
              onMouseOver={mouseD}
              onMouseLeave={mouseA2} 
              className='manley-img-l'>
            </img>
            <img src={E} 
              alt='E' 
              onMouseOver={mouseC}
              onMouseLeave={mouseA2} 
              className='manley-img-e' >
            </img>
            <img src={Y} 
              alt='Y' 
              onMouseOver={mouseO}
              onMouseLeave={mouseA2} 
              className='manley-img-e'>
            </img>
          </div> 
        </Link>
      </div>        
    </div>
  );      
}

export default Landing
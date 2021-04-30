import React, { useState }  from 'react'
import Header from '../../shared/header/Header'
import Footer from '../../shared/footer/Footer'
import './Art.scss'

import resume from '../../../assets/images/resume.png'

function Art(){
//   const [isShownD, setIsShownD] = useState(false);
//   const [isShownE, setIsShownE] = useState(false);
//   const [isShownF, setIsShownF] = useState(false);
  
  return (
    <div id='art'>
      <Header/>
      <div className='art'>  
        <div className='art-piece'>
        
        </div>      
        <div className='art-piece'>

        </div>
        <div className='art-piece'>

        </div>
        <div className='art-piece'>
        
        </div>      
        <div className='art-piece'>

        </div>
        <div className='art-piece'>

        </div>      
      </div>
      <Footer/>
    </div>
  );      
}

export default Art
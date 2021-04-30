import React, { useState }  from 'react'
import Header from '../../shared/header/Header'
import Footer from '../../shared/footer/Footer'
import './Music.scss'

import resume from '../../../assets/images/resume.png'

function Music(){
//   const [isShownD, setIsShownD] = useState(false);
//   const [isShownE, setIsShownE] = useState(false);
//   const [isShownF, setIsShownF] = useState(false);
  
  return (
    <div id='music'>
      <Header/>
      <div className='music'>  
        <div className='singles'>
        
        </div>      
        <div className='rawwar'>

        </div>
        <div className='all-that-glit'>

        </div>   
      </div>
      <Footer/>
    </div>
  );      
}

export default Music

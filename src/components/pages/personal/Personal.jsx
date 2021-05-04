import React, { useState }  from 'react'
import Header from '../../shared/header/Header'
import Footer from '../../shared/footer/Footer'
import './Personal.scss'
import YouTube from 'react-youtube';

import resume from '../../../assets/images/resume.png'

function Personal(){
//   const [isShownD, setIsShownD] = useState(false);
//   const [isShownE, setIsShownE] = useState(false);
//   const [isShownF, setIsShownF] = useState(false);
  
  return (
    <div id='music'>
      <Header/>
      <div className='music'>  
        <div className='singles'>
          <YouTube
            videoId='YUNDBhpZxYQ'
            />
        
        </div>      
        <div className='rawwar'>
        <YouTube
            videoId='RJZ1Qm7csnM'
            />
        </div>
        <div className='all-that-glit'>

        </div>   
      </div>
      <Footer/>
    </div>
  );      
}

export default Personal
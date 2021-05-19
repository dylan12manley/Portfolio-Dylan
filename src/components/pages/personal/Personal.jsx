import React from 'react'
import Header from '../../shared/header/Header'
import Footer from '../../shared/footer/Footer'
import './Personal.scss'
import YouTube from 'react-youtube'
import Audio from './Audio/Audio.jsx';


function Personal(){
  return (
    <div id='art'>
      <Header/>
      <div className='music'>  
        <div className='videos'>
          <div className='hate-me youtube'>
            <YouTube 
            className='video' 
            videoId='YUNDBhpZxYQ'/>
          </div>      
          <div className='rawwar youtube'>
          <YouTube
            className='video'
            videoId='RJZ1Qm7csnM'/>
          </div>
        </div>
        <div className='audio-player'>
        <Audio
        />
        </div>
      </div>
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

export default Personal
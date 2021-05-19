import React from 'react'
import Header from '../../shared/header/Header'
import Footer from '../../shared/footer/Footer'
import './Personal.scss'
import ReactPlayer from 'react-player'
import YouTube from 'react-youtube'

function Personal(){
  return (
    <div id='art'>
      <Header/>
      <div className='music'> 
        <div className='audio'>
          <div className='soundcloud'>
            <ReactPlayer 
              url='https://soundcloud.com/dln_pdx/imbibe-by-meteor-inthe-cellar'
              width='calc(14vw + 200px)'
              height='calc(11vw + 150px)'
              />
          </div>
          <div className='soundcloud'>
            <ReactPlayer 
              url='https://soundcloud.com/dln_pdx/video-game-variations'
              width='calc(14vw + 200px)'
              height='calc(11vw + 150px)'
            />
          </div>
          <div className='soundcloud'>
            <ReactPlayer 
              url='https://soundcloud.com/dln_pdx/david-higgs-mc-oboy-and-dylan-manley'
              width='calc(14vw + 200px)'
              height='calc(11vw + 150px)'
              />
          </div>
          <div className='soundcloud'>
            <ReactPlayer 
              url='https://soundcloud.com/dln_pdx/can-i-by-michael-simpson-and'
              width='calc(14vw + 200px)'
              height='calc(11vw + 150px)'
            />
          </div>
          <div className='soundcloud'>
            <ReactPlayer 
              url='https://soundcloud.com/dln_pdx/rap-church-yakisobas'
              width='calc(14vw + 200px)'
              height='calc(11vw + 150px)'
            />
          </div>
          <div className='soundcloud'>
            <ReactPlayer 
              url='https://soundcloud.com/dln_pdx/dlns-graybles'
              width='calc(14vw + 200px)'
              height='calc(11vw + 150px)'
            />
          </div>
        </div>
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
          <div className='ddown youtube'>
            <YouTube
              className='video'
              controls='none'
              videoId='Ypc2Y80wXAg'/>
          </div>
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
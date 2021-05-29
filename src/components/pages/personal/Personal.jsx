import React from 'react'
import Header from '../../shared/header/Header'
import Footer from '../../shared/footer/Footer'
import './Personal.scss'
import ReactPlayer from 'react-player'
import YouTube from 'react-youtube'
import boy from './../../../assets/images/boy-man.jpg'
import doodle from './../../../assets/images/doodle.jpg'
import lady from './../../../assets/images/lady.jpg'
import rooster from './../../../assets/images/rooster.jpg'

function Personal(){
  return (
    <div id='art'>
      <Header/>
      <div className='music'> 
        <div className='songs'>
          <h1 className='sec-title st1'>songssongssongssongs</h1>
          <div className='audio'>
            <div className='soundcloud sc1'>
              <ReactPlayer 
              className='song'
                url='https://soundcloud.com/dln_pdx/imbibe-by-meteor-inthe-cellar'
                width='calc(14vw + 200px)'
                height='calc(11vw + 150px)'
                />
            </div>
            <div className='soundcloud'>
              <ReactPlayer
                className='song' 
                url='https://soundcloud.com/dln_pdx/video-game-variations'
                width='calc(14vw + 200px)'
                height='calc(11vw + 150px)'
              />
            </div>
            <div className='soundcloud'>
              <ReactPlayer
                className='song' 
                url='https://soundcloud.com/dln_pdx/david-higgs-mc-oboy-and-dylan-manley'
                width='calc(14vw + 200px)'
                height='calc(11vw + 150px)'
                />
            </div>
            <div className='soundcloud'>
              <ReactPlayer
                className='song' 
                url='https://soundcloud.com/dln_pdx/can-i-by-michael-simpson-and'
                width='calc(14vw + 200px)'
                height='calc(11vw + 150px)'
              />
            </div>
            <div className='soundcloud'>
              <ReactPlayer
                className='song' 
                url='https://soundcloud.com/dln_pdx/rap-church-yakisobas'
                width='calc(14vw + 200px)'
                height='calc(11vw + 150px)'
              />
            </div>
            <div className='soundcloud'>
              <ReactPlayer
                className='song' 
                url='https://soundcloud.com/dln_pdx/dlns-graybles'
                width='calc(14vw + 200px)'
                height='calc(11vw + 150px)'
              />
            </div>
          </div>
        </div>
        <div className='videos'>
          <h1 className='sec-title st2'>videosmusicvideosmusic</h1>
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
      <h1 className='sec-title st3'>paintingspaintingspaintings</h1>
      <div className='art'>  
        <div className='art-piece'>
          <img 
            src={boy} 
            alt='Boy/Man Painting'
            className='painting'>
          </img>
          <h3 className='art-title'>Boy and Man - 2009 - Oil on Canvas</h3>
        </div>      
        <div className='art-piece'>
          <img 
            src={lady} 
            alt='Lady Painting'
            className='painting'>
          </img>
          <h3 className='art-title'>Still Life of a Lady - 2009 - Oil on Canvas</h3>
        </div>
        <div className='art-piece'>
          <img 
            src={rooster} 
            alt='Rooster Painting'
            className='painting'>
          </img>
          <h3 className='art-title'>The Rooster - 2008 - Watercolor on Paper</h3>
        </div>       
        <div className='art-piece'>
          <img 
            src={doodle} 
            alt='Doodle Painting'
            className='painting'>
          </img>
          <h3 className='art-title'>Doodle - 2009 - Mixed Medium</h3>
        </div>
      </div>
      <Footer/>
    </div>
  );      
}

export default Personal
import React from 'react'
import Header from '../../shared/header/Header'
import './Home.scss'
import github from '../../../assets/images/github.png'
import linkedIn from '../../../assets/images/linkedin.png'
import resume from '../../../assets/images/resume.png'

function Home(){


  return (
    <div id='home'>
      <Header/>
      <div id='home-top'>
      </div>
      <div className='home-grid'>  
        <a class='g-itm' href='https://docs.google.com/document/d/e/2PACX-1vSkXF3AJwzjDb-8uZRGe42nQ631_SMA2-4QOzmxm9GkmKcJmkn46sBhWyd_NlTUEQdcg6w_3tQ9pvHR/pub'>
          <img class='resume' src={resume} alt='resume link'></img>  
        </a>     
        <a class='g-itm' href='https://github.com/dylan12manley'>
          <img class='github' src={github} alt='github link'></img>  
        </a>     
        <a class='g-itm' href='https://www.linkedin.com/in/dylan-manley-pdx/'>
          <img class='linkedin' src={linkedIn} alt='linkedin link'></img>  
        </a>     
      </div>
    </div>
  );      
}

export default Home

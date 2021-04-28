import React, { useState }  from 'react'
import Header from '../../shared/header/Header'
import './Home.scss'
import github from '../../../assets/images/github.png'
import programing from '../../../assets/images/programing.png'
import resume from '../../../assets/images/resume.png'

function Home(){
  const [isShownA, setIsShownA] = useState(false);
  const [isShownB, setIsShownB] = useState(false);
  const [isShownC, setIsShownC] = useState(false);
  
  return (
    <div id='home'>
      <Header/>
      <div className='home-grid'>  
        <a id='programing' 
            class='g-itm' 
            href='/code'
            onMouseEnter={() => setIsShownA(true)}
            onMouseLeave={() => setIsShownA(false)}>
          <img class='programing' src={programing} alt='programing link'></img>  
          {isShownA && (
            <div className='reveal'>
              View my programming projects.
            </div>
          )}
        </a>  
        <a id='resume' 
            class='g-itm' 
            href='https://docs.google.com/document/d/e/2PACX-1vSkXF3AJwzjDb-8uZRGe42nQ631_SMA2-4QOzmxm9GkmKcJmkn46sBhWyd_NlTUEQdcg6w_3tQ9pvHR/pub'
            onMouseEnter={() => setIsShownB(true)}
            onMouseLeave={() => setIsShownB(false)}>
          <img class='resume' src={resume} alt='resume link'></img>  
          {isShownB && (
            <div className='reveal'>
              View my resume.
            </div>
          )}
        </a> 
        <a id='github' 
            class='g-itm' 
            href='https://github.com/dylan12manley'
            onMouseEnter={() => setIsShownC(true)}
            onMouseLeave={() => setIsShownC(false)}>
          <img class='github' src={github} alt='github link'></img>
          {isShownC && (
            <div className='reveal'>
              View my Github.
            </div>
          )}  
        </a>          
      </div>
    </div>
  );      
}

export default Home

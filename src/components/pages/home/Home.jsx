import React, { useState }  from 'react'
import Header from '../../shared/header/Header'
import Footer from '../../shared/footer/Footer'
import './Home.scss'
import { Link } from "react-router-dom";
import github from '../../../assets/images/github.png'
import programing from '../../../assets/images/programing.png'
import resume from '../../../assets/images/resume.png'
import man from '../../../assets/images/man.png'

function Home(){
  const [isShownA, setIsShownA] = useState(false);
  const [isShownB, setIsShownB] = useState(false);
  const [isShownC, setIsShownC] = useState(false);
  const [isShownD, setIsShownD] = useState(false);

  return (
    <div id='home'>
      <Header/>
      <div className='home-grid'>  
        <Link id='programing' 
            className='g-itm'  
            to='/code'
            onMouseEnter={() => setIsShownA(true)}
            onMouseLeave={() => setIsShownA(false)}>
          <img className='programing' src={programing} alt='programing link'></img>  
            {isShownA && (
              <div className='reveal'>
                View my programming projects.
              </div>
            )}
        </Link>  
        <Link id='personal' 
            className='g-itm'  
            to='/personal'
            onMouseEnter={() => setIsShownD(true)}
            onMouseLeave={() => setIsShownD(false)}>
          <img className='personal' src={man} alt='personal link'></img>  
            {isShownD && (
              <div className='reveal'>
                View my personal projects.
              </div>
            )}
        </Link> 
        <a id='resume' 
            target="_blank"
            rel='noopener noreferrer'
            className='g-itm' 
            href='https://docs.google.com/document/d/e/2PACX-1vSkXF3AJwzjDb-8uZRGe42nQ631_SMA2-4QOzmxm9GkmKcJmkn46sBhWyd_NlTUEQdcg6w_3tQ9pvHR/pub'
            onMouseEnter={() => setIsShownB(true)}
            onMouseLeave={() => setIsShownB(false)}>
          <img className='resume' src={resume} alt='resume link'></img>  
            {isShownB && (
              <div className='reveal reveal-r'>
                View my resume.
              </div>
            )}
        </a> 
        <a id='github' 
            target="_blank"
            rel='noopener noreferrer'
            className='g-itm' 
            href='https://github.com/dylan12manley'
            onMouseEnter={() => setIsShownC(true)}
            onMouseLeave={() => setIsShownC(false)}>
          <img className='github' src={github} alt='github link'></img>
          {isShownC && (
            <div className='reveal-g reveal'>
              View my Github.
            </div>
          )}  
        </a>      
      </div>
      <Footer/>
    </div>
  );      
}

export default Home

import React from 'react'
import Header from '../../shared/header/Header'
import './Home.scss'
import github from '../../../assets/images/github.png'
import linkedIn from '../../../assets/images/linkedin.png'

function Home(){


  return (
    <div id='home'>
      <Header/>
      <div className='home-body'>  
        <h2>Home Page</h2> 
        <a class='github' href='https://github.com/dylan12manley'>
          <img src={github} alt='github link'></img>  
        </a>     
        <a class='linkedin' href='https://www.linkedin.com/in/dylan-manley-pdx/'>
          <img src={linkedIn} alt='linkedin link'></img>  
        </a>     
      </div>
    </div>
  );      
}

export default Home

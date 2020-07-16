import React from 'react'
import Header from '../../shared/header/Header'
import './Code.scss'
import hillcrest from '../../../assets/images/hillcrest.png'
import goalden from '../../../assets/images/goalden-logo.png'
import futuro from '../../../assets/images/futuro.jpg'

function Code(){


  return (
    <div id='code'>
      <Header/>
      <div className='code-body'>  
        <div id='code-top'>
          <a href='https://futuromagazine-be1ee.web.app/'>
            <img className='top-imgs'
              id='logo-futuro' 
              src={futuro} 
              alt='Futuro'>
            </img>
          </a>
          <br/>
          <a href='https://hillcrestsports.com/'>
            <img className='top-imgs'
              id='logo-hillcrest' 
              src={hillcrest} 
              alt='hillcrest sports'>
            </img>  
          </a>
          <a href='https://goaldenhour.com/'>
            <img className='top-imgs'
              id='logo-goalden' 
              src={goalden} 
              alt='goalden hour'>
            </img>
          </a>
          
        </div>      
      </div>
    </div>
  );      
}

export default Code
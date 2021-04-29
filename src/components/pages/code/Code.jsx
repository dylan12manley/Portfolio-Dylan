import React from 'react'
import Header from '../../shared/header/Header'
import './Code.scss'
import FuturoCard from './Cards/FuturoCard'
import HillcrestCard from './Cards/HillcrestCard'
import GoaldenCard from './Cards/GoaldenHourCard'
import TaproomCard from './Cards/TaproomCard'

function Code(){


  return (
    <div id='code'>
      <Header/>
      <div className='code-body'>
        <div className='card'>  
          <FuturoCard/> 
        </div>
        <div className='card'> 
          <HillcrestCard/>  
        </div>
        <div className='card'>  
          <GoaldenCard/>   
        </div>
        <div className='card'>  
          <TaproomCard/>   
        </div>
      </div>
    </div>
  );      
}

export default Code
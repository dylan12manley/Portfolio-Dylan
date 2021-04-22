import React from 'react'
import Header from '../../shared/header/Header'
import './Code.scss'
import FuturoCard from './Cards/FuturoCard'
import HillcrestCard from './Cards/HillcrestCard'
import GoaldenCard from './Cards/GoaldenHourCard'

function Code(){


  return (
    <div id='code'>
      <Header/>
      <div className='code-body'>  
        <FuturoCard/> 
        <HillcrestCard/>  
        <GoaldenCard/>   
      </div>
    </div>
  );      
}

export default Code
import React from 'react'
import Header from '../../shared/header/Header'
import './Code.scss'

function Code(){


  return (
    <div id='code'>
      <Header/>
      <div className='code-body'>  
        <h2>Code Page</h2>   
        <div>
          <img src=''>
          </img>
        </div>  
        <div class='general-info'>
          <div class='info-top'>
            <h2>
              OUTFIT YOURSELF FOR THE DAY OR THE WHOLE FAMILY FOR THE ENTIRE SEASON!
            </h2>
            <p>
              Hillcrest is conveniently located at the corner of Powell and Burnside at the beginning of Hwy 26. We offer 24 hour rentals. So no rush to get off the slopes and back to town before closing time. Recreational passes available for purchase in-store.
            </p>
          </div>  
          <div class='info-body'>
            <div class='policy'>
              <h3>
                Daily Rentals
              </h3>
              <p>
                All daily rentals are for a full 24 hours! Easy pick up and drop off. We can outfit you or the whole family for as long as you need equipment.
              </p>
            </div>
            <div class='policy'>
              <h3>
                Season Rentals
              </h3>
              <p>
                You can rent gear for the entire season at a fraction of the price of a new ski/snowboard setup - perfect for growing kids!
              </p>
            </div>
            <div class='policy'>
              <h3>
                Location
              </h3>
              <p>
                Hillcrest is conveniently located on the edge Gresham at the beginning of Highway 26. Easy pick-up and drop-off.
              </p>
            </div>
            <div class='policy'>
              <h3>
                Demos
              </h3>
              <p>
                Try before you buy. Hillcrest has a robust snowboard and ski demo fleet with all different types of shapes and profiles.
              </p>
            </div>
            <div class='policy'>
              <h3>
                Cheaper
              </h3>
              <p>
                Our rental packages are less expensive than all the local resorts. Skip the long resort rental lines and pay half the price.
              </p>
            </div>
            <div class='policy'>
              <h3>
                Multi-Day
              </h3>
              <p>
                With our Multi-Day rental program you can save time and money. Multiple days are pro-rated depending on how long you need the gear.
              </p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );      
}

export default Code
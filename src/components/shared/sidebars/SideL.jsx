import React from "react"
import Band from '../../../assets/images/black-band.png'

import './SideL.scss'

function SideL(){

  return (
    <>
    <div id='left-side'>
      <div className='name'>
      </div>
      <div>
        <img src={Band} className='b-band' alt='black band' />
      </div>
    </div>
    </>
  );
}

export default SideL;

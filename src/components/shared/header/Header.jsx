import React from "react"
import { Link } from "react-router-dom"
import { Row, Col } from 'antd'
import Hamburger from './Hamburger'

import './Header.scss'

function Header(){

  return (
    <>
    <div className='header'>
      <Row style={{textAlign: 'center'}}>
        <Col xs={12} sm={12} md={12} lg={12} xl={24}>
          <Link to="/" > 
            DLN
          </Link>
        </Col>
        <Col  lg={8} xl={8}>
          <Hamburger/>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default Header;

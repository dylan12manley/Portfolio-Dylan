import React from "react"
import { Link } from "react-router-dom"
import { Row, Col } from 'antd'
import Hamburger from './Hamburger'

import './Header.scss'

function Header(){

  const mainStyle = {
    position: 'fixed',
    zIndex: '1',
    top: '0',
    backgroundColor: 'black',
    color: '#D2E8CC',
    height: 'calc(120px + 5vmin)',
    paddingTop: '0px',
    width: '100%',
    display: 'inline-flex',
    textAlign: 'center',
  }


  return (
    <>
    <div style={mainStyle}>
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

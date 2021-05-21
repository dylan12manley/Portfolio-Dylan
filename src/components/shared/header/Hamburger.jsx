import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import './Hamburger.scss';

const Drawer = styled.div`
  position: absolute;
  height: 150px; 
  width: 14vw;
  max-width: 100px;
  margin-top: 50px;
  margin-left: calc(20px + 2vmin);
  top: ${props => props.top}vh;
  z-index: 1;
`;

const linkStyle = {
  color: '#003F7A',
  textShadow: '0.6px 0.8px #85C4FF',
}
const linkStyleB = {
  color: '#0054a3',
  textShadow: '0.6px 0.8px #85C4FF',
}
const linkStyleC = {
  color: '#890620',
  textShadow: '0.6px 0.8px #85C4FF',
}
const linkStyleD = {
  color: '#EB0A37',
  textShadow: '0.6px 0.8px #003F7A',
}
class Hamburger extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        toggleState: 0
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.refs.container.classList.toggle('change');
      this.setState({
        toggleState: this.state.toggleState ? 0 : 1
      });
    }
 
  render() {
    return (
      <div id="parent">
        <div id="nav-bar">
          <div className="container" ref="container" onClick={this.handleClick}>
            <div className="bar1"/>
            <div className="bar2"/>
            <div className="bar3"/>
          </div>
        </div>   
        <Motion
          defaultStyle={{ 
            top: -50 }}
          style={{
              top: spring(this.state.toggleState ? 0 : -70, {
                stiffness: 100,
                damping: 10}),
          }}>
          {style => (
            <div className='drawer'>
            <Drawer top={style.top}>
              <h5 className='link-p'>
                <Link 
                  to="/code" 
                  style={linkStyle}
                  className='link code'>
                    CODE
                </Link>
              </h5>
              <h5 className='link-p'>
                <Link 
                  to="/personal" 
                  style={linkStyleB}
                  className='link'>
                  ART
                </Link>
              </h5>
              <h5 className='link-p'>
                <Link 
                  to="/home" 
                  style={linkStyleC}
                  className='link home'>
                    HOME
                </Link>
              </h5>
              <h5 className='link-p'>
                <Link 
                  to="/" 
                  style={linkStyleD}
                  className='link landing'>
                    LANDING
                </Link>
              </h5>
            </Drawer>
            </div>
          )}
        </Motion>
      </div>
    );
  }
}

export default Hamburger;
  
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
  margin-top: 40px;
  margin-left: calc(20px + 2vmin);
  top: ${props => props.top}vh;
  z-index: 1;
`;

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
          defaultStyle={{ top: -40 }}
          style={{
              top: spring(this.state.toggleState ? 0 : -40, {
              stiffness: 210,
              damping: 10
            })
          }}
        >
          {style => (
            <div className='drawer'>
            <Drawer top={style.top}>
              <p className='link-p'><Link to="/self" className='link'>Self</Link></p>
              <p className='link-p'><Link to="/code" className='link'>Code</Link></p>
              <p className='link-p'><Link to="/music" className='link'>Music</Link></p>
              <p className='link-p'><Link to="/home" className='link'>Home</Link></p>
            </Drawer>
            </div>
          )}
        </Motion>
      </div>
    );
  }
}

export default Hamburger;
  
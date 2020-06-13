import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Home from './pages/home/Home'
import Code from './pages/code/Code'
import Music from './pages/music/Music'
import Self from './pages/self/Self'
import { AnimatedSwitch } from 'react-router-transition'
import './App.css'

class App extends React.Component {

  render(){
    return (
      <div id='app=body'>
      <Router>
        <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
          <Route exact path="/" component={Landing}/>
          <Route path="/home" component={Home}/>
          <Route path="/code" component={Code}/>
          <Route path="/music" component={Music}/>
          <Route path="/self" component={Self}/>
        </AnimatedSwitch>
      </Router>
      </div>
    );
  }
}

export default App;

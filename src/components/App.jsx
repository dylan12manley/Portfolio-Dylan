import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Home from './pages/home/Home'
import Code from './pages/code/Code'
import Music from './pages/music/Music'
import './App.css'


class App extends React.Component {

  render(){
    return (
      <div id='app-body'>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/home" component={Home}/>
          <Route path="/code" component={Code}/>
          <Route path="/music" component={Music}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;

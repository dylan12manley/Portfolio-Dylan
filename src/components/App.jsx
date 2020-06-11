import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Landing from './pages/landing/Landing'

class App extends React.Component {

  render(){
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;

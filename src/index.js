import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, hashHistory } from "react-router-dom";


import { About } from './About';
import { Home } from './Home';


export class App extends React.Component{
  render(){
    return(
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Router>
      

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

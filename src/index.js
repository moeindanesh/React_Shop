import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, hashHistory } from "react-router-dom";
import Data from './data';


import { About } from './About';
import { Home } from './Home';
import { Telegram } from './Telegram';
import { Phone } from './Phone';
import { Products } from './Products';


export class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      productData: Data
    }
  }
  render(){
    return(
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/telegram" component={Telegram} />
        <Route path="/phone" component={Phone} />
        <Route path="/products" component={Products} />
      </Router>
      

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

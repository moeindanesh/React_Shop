import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, hashHistory } from "react-router-dom";



import { About } from './About';
import { Home } from './Home';
import { Telegram } from './Telegram';
import App from './App';
import { Message } from './Message';


export class Index extends React.Component{

    constructor(props){
    super(props);

    
  }

  render(){
    return(
      <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/telegram" component={Telegram} />
        <Route path="/message" component={Message} />
        <Route path="/products" component={App}/>
        {/* <Route path="/products" render={ () => <Products productData={this.state.productData} addToCart={this.addToCart} orders={this.state.orders} removeOfCart={this.removeOfCart} />}/> */}
      </Router>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

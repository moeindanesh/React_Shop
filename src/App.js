import React from 'react';
import './App.css';
import Cookies from 'universal-cookie';
import Data from './data';


import { Products } from './Products';
import ButtonCart from './section/ButtonCart';
import { Header } from './section/Header';
import { Welcome } from './section/Welcome';

const cookies = new Cookies();
let newState = [];
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productData: Data,
      orders: (typeof(cookies.get('orders')) == "undefined" ? [] : cookies.get('orders'))
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeOfCart = this.removeOfCart.bind(this);
  }

  addToCart(key){
    [key] = key.split('|');
    if(this.state.productData[key].available){

      newState = this.state.orders;
      newState.push(key);
      this.setState({
        orders: newState
      });
      cookies.set('orders', newState, { path: '/' });
    }
  }

  removeOfCart(key){
    let productKey = key.key;
    let i = this.state.orders.indexOf(productKey);
    if(i != -1){
      newState = this.state.orders;
      newState.splice(i, 1);
      this.setState({
        orders: newState
      })
      cookies.set('orders', newState, { path: '/' });
    }
  }
  render(){
    return(
      <div>
        <Header selectedMenu="products"/>
        <Welcome title="Products"/>
        <Products productData={this.state.productData} addToCart={this.addToCart} orders={this.state.orders}/>
        <ButtonCart productData={this.state.productData} orders={this.state.orders} removeOfCart={this.removeOfCart} />
      </div>
    )
  }
}


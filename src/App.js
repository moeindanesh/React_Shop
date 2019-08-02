import React from 'react';
import './App.css';
import Cookies from 'universal-cookie';
import Data from './data';


import { Products } from './Products';
import ButtonCart from './section/ButtonCart';
import { Header } from './section/Header';
import { Welcome } from './section/Welcome';

const cookies = new Cookies();

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
      this.setState((state) => {
        orders: state.orders.push(key)
      });
      cookies.set('orders', this.state.orders, { path: '/' });
    }
  }

  removeOfCart(key){
    let productKey = key.key;
    let i = this.state.orders.indexOf(this.state.orders[productKey]);
    console.log(i);
    if(i != -1){
      this.setState((state) => {
        orders: state.orders.splice(i, 1)
      })
      cookies.set('orders', this.state.orders, { path: '/' });
    }
  }
  render(){
    return(
      <div>
        <Header selectedMenu="products"/>
        <Welcome title="Products"/>
        <Products productData={this.state.productData} addToCart={this.addToCart} orders={this.state.orders} removeOfCart={this.removeOfCart}/>
        <ButtonCart productData={this.state.productData} orders={this.state.orders} removeOfCart={this.removeOfCart} />
      </div>
    )
  }
}
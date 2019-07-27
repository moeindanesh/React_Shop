import React from 'react';
import './App.css';


import { Header } from './section/Header';
import { Welcome } from './section/Welcome';




export class App extends React.Component{
  render(){
    return(
      <div>
        <Header selectedMenu="home"/>
        <Welcome title="Welcome To My Shop" />
      </div>
      

    )
  }
}
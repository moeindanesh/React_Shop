import React from 'react';
import './App.css';


import { Header } from './section/Header';
import { Welcome } from './section/Welcome';




export class About extends React.Component{
  render(){
    return(
      <div>
        <Header selectedMenu="about"/>
        <Welcome title="About Us" />
      </div>
      

    )
  }
}
import React from 'react';
import './App.css';


import { Header } from './section/Header';
import { Welcome } from './section/Welcome';




export class Phone extends React.Component{
  render(){
    return(
      <div>
        <Header selectedMenu="phone"/>
        <Welcome title="Call Us :P" />
      </div>
    )
  }
}
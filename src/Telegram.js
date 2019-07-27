import React from 'react';
import './App.css';


import { Header } from './section/Header';
import { Welcome } from './section/Welcome';




export class Telegram extends React.Component{
  render(){
    return(
      <div>
        <Header selectedMenu="telegram"/>
        <Welcome title="Message Us at Telegram :))" />
      </div>
    )
  }
}
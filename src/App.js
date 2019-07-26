import React from 'react';
import './App.css';


import { Header } from './Header';




export class App extends React.Component{
  render(){
    return(
      <Row type="flex" justify="center">
        <Col>
          <Header selectedMenu="home"/>
          {/* <Welcome />
          <Products />
          <Footer /> */}
        </Col>
      </Row>
    )
  }
}
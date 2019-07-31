import React from 'react';
import { Row, Col } from 'antd';

import Chunk from './helper';
import './App.css';


import { Header } from './section/Header';
import { Product } from './section/Product';
import { Welcome } from './section/Welcome';


export class Products extends React.Component{
  
  constructor(props){
    super(props)


    this.chunkProduct = Chunk.array_chunk(Object.keys(this.props.productData), 3);

    this.renderRow = this.renderRow.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
  }

  renderProduct(key){
    return(
      <Col key={key} span={4}>
        <Product details={this.props.productData[key]} />
      </Col>
    )
  }
  renderRow(key){
    return(
      <Row key={key} className="products-row" type="flex" justify="center">
        {this.chunkProduct[key].map(this.renderProduct)}
      </Row>
    )
  }

  render(){
    return(
      <div>
        <Header selectedMenu="products"/>
        <Welcome title="Products"/>
        <Row >
          <Col span={24}>
            <Row>
              {Object.keys(this.chunkProduct).map(this.renderRow)}
            </Row>
          </Col>
        </Row>
      </div>
      

    )
  }
}
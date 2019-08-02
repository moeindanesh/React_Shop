import React from 'react';
import { Card, Tag } from 'antd';
const { Meta } = Card;




export class Product extends React.Component{
    render(){
        let details = this.props.details;
        let cartStyle = (details.available) ? { cursor: 'pointer'} : {cursor: 'not-allowed', backgroundColor: '#999'};
        return(
            <Card
                hoverable
                style={{ margin:'auto 15px 10px' }}
                cover={<img alt="example" src={details.image} />}
            >
            <Meta title={details.title} description={details.description} />
            <div style={{ padding: '20px 0px 10px' }}>
                <Tag color="#54d068">${details.price}</Tag>
                <Tag color="#108ee9" style={cartStyle} onClick={() => this.props.addToCart(this.props.index)}>Add To Cart</Tag>
            </div>
            </Card>
        )
    }
}
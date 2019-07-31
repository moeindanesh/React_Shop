import React from 'react';
import { Card, Tag } from 'antd';
const { Meta } = Card;




export class Product extends React.Component{
    render(){
        let details = this.props.details;
        return(
            <Card
                hoverable
                style={{ margin:'auto 15px 10px' }}
                cover={<img alt="example" src={details.image} />}
            >
            <Meta title={details.title} description={details.description} />
            </Card>
        )
    }
}
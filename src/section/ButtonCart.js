import React from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';


// let productOrderNum = [];
export default class ButtonCart extends React.Component{
    constructor(props){
        super(props);

        this.renderMenu = this.renderMenu.bind(this);
    }

    renderMenu(key){
        return <Menu.Item key={key}>{this.props.orders[key]}</Menu.Item>;
        // if(productOrderNum[this.props.orders[key]] == undefined){
        //     productOrderNum[this.props.orders[key]] = 1;
        // }else{
        //     productOrderNum[this.props.orders[key]]++;
        // }
        // if(key == this.props.orders.length -1){
        //     let menus = [];
        //     for(const [product, num] of Object.entries(productOrderNum)){
        //         // console.log(product, num);
        //         menus.push(<Menu.Item key={product}>{product} <span className="cart-num"> ({num})</span> <Icon type="close" className="cart-remove"/></Menu.Item>);
        //     }
        //     return menus;
        // }
    }

    render(){
        let menu = (
            <Menu onClick={(key) => this.props.removeOfCart(key)}>
              {Object.keys(this.props.orders).map(this.renderMenu)}
            </Menu>
          );
        return(
            <Dropdown overlay={menu} placement="topCenter" className="cart-button">
                <Button type="primary">
                 Cart <Icon type="shopping-cart" />
                </Button>
            </Dropdown>
        )
    }
}
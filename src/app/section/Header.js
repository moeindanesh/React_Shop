import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export class Header extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        selectedKey: this.props.selectedMenu
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
      console.log(`clicked`);
      this.setState({
        selectedKey: e.key
      })
    }
    render(){
      return(
        <Row type="flex" justify="center">
            <Col>
                <Menu 
                onClick={this.handleClick}
                mode="horizontal"
                selectedKeys={[this.state.selectedKey]}>
                <Menu.Item key="home">
                    <Icon type="home" />Home
                </Menu.Item>
                <Menu.Item key="products">
                    <Icon type="appstore" /> Products
                </Menu.Item>
                <Menu.Item key="cart">
                <Icon type="shopping-cart" /> cart
                </Menu.Item>
                <SubMenu title={<span><Icon type="mail" /> Contact Us</span>}>
                    <Menu.Item key="telegram"><Icon type="mobile" /> telegram</Menu.Item>
                    <Menu.Item key="phone"><Icon type="phone" /> Phone</Menu.Item>
                </SubMenu>
                <Menu.Item key="about">
                <Icon type="smile" /> About Us
                </Menu.Item>
                </Menu>
            </Col>

        </Row>
      )
    }
  }
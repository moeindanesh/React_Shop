import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

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
                  <Link to="/"> <Icon type="home" />Home</Link>
                </Menu.Item>
                <Menu.Item key="products">
                    <Icon type="appstore" /> Products
                </Menu.Item>
                <Menu.Item key="cart">
                <Icon type="shopping-cart" /> cart
                </Menu.Item>
                <SubMenu title={<span><Icon type="mail" /> Contact Us</span>}>
                    <Menu.Item key="telegram">
                      <Link to="/telegram"><Icon type="mobile" /> telegram</Link>
                    </Menu.Item>
                    <Menu.Item key="phone">
                      <Link to="/phone"><Icon type="phone" /> Phone</Link>
                      {/* <Link to="/about"><Icon type="smile" /> About Us</Link> */}

                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="about">
                  <Link to="/about"><Icon type="smile" /> About Us</Link>
                </Menu.Item>
                </Menu>
            </Col>

        </Row>
      )
    }
  }
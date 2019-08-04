import React from 'react';
import './App.css';
import { Row, Col, Button } from 'antd';



import { Header } from './section/Header';
import { Welcome } from './section/Welcome';


export class Message extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      formBody:{
        name: '',
        email: '',
        messgae: ''
      }
    }
  }

  handleChange(e){
    let newFormBody = this.state.formBody;
    newFormBody[e.target.name] = e.target.value;
    this.setState({
      formBody: newFormBody
    })
  }
  handleSubmit(e){
    e.preventDefault();

    let dataForm = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      message: this.refs.message.value
    }
    console.log(`name: ${dataForm.name} | email: ${dataForm.email} | message: ${dataForm.message}`);
  }
  render(){
    return(
      <div>
        <Header selectedMenu="phone"/>
        <Welcome title="Call Us :P" />
        <Row type="flex" justify="center">
          <Col span={8}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label>Name</label>
                </div>
                <div className="ant-form-item-control">
                  <input type="text" name="name" ref="name" placeholder="Please enter your name" className="ant-input ant-input-lg" value={this.state.formBody.name} onChange={this.handleChange.bind(this)} />
                </div>
              </div>
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label>Email</label>
                </div>
                <div className="ant-form-item-control">
                  <input type="email" name="email" ref="email" placeholder="Please enter your email" className="ant-input ant-input-lg" value={this.state.formBody.email} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label>Message</label>
                </div>
                <div className="ant-form-item-control">
                  <textarea name="message" ref="message" placeholder="Please enter your message" className="ant-input ant-input-lg" onChange={this.handleChange.bind(this)}>{this.state.formBody.message}</textarea>
                </div>
              </div>
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-control">
                  <Button type="primary" htmlType="submit">Send</Button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    )
  }
}
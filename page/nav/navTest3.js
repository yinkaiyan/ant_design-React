import React,{Component} from 'react'

import { Route } from 'react-router-dom'

import { Button,Radio, Icon } from 'antd';
const ButtonGroup = Button.Group;

var style={
  list:{
    margin:"20px",
  }
}

export default class navTest3 extends Component{
  componentWillMount (){
    console.log(this.props)
  }
  Click() {
    console.log("click");
  }
  state = {
    size: 'large',
    loading: false,
    iconLoading: false,
  }
  enterLoading = () => {
    this.setState({ loading: true });
  }
  enterIconLoading = () => {
      this.setState({ iconLoading: true });
  }
  render() {
    return (
      <div>
        嵌套路由navTest03测试<br/>
        003路由内容
      </div>
    );
  }
}


import React, { Component } from 'react'

export class App extends Component {
constructor(props) {
  super(props)
  console.log('loading constructor');
  this.state = {
    count:0,
  }
  }

  componentWillMount(){
    console.log('loading componectwillmount');
  }

  componentDidMount(){
    console.log('loading componectdidmount');
  }

  shouldComponentUpdate(){
    console.log('loading should');
    return true
  }

  render() {
    console.log('loading rander');
    return (
      <>
      <h1>Number is : {this.state.count}</h1>
      <button type='button' onClick={() => this.setState({ count: this.state.count +1})}>count {this.state.count}</button>
      <button type='button' onClick={() => this.setState({count: 0})}>set zero</button>
      </>      
    )
  }
}

export default App
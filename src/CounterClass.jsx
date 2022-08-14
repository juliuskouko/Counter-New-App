import React, { Component } from 'react'

 class CounterClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        // this.handleIncreaseCounter = this.handleIncreaseCounter.bind(this) 
    }
    handleIncreaseCounter=(e)=>{
        e.preventDefault();
        this.setState({count: this.state.count + 1})
    }

    handleDecreaseCounter=(e)=>{
        e.preventDefault();
        this.setState({count: this.state.count - 1})
    }

    handleResetCounter=(e)=>{
        e.preventDefault()
        this.setState({count: this.state.count = 0})
    }
  render() {
    return (
        <>
            <h1>Counter: {this.state.count}</h1>
            <hr/>
            <button onClick={this.handleIncreaseCounter}>Increase</button>
            <button onClick={this.handleDecreaseCounter}>Decrease</button>
            <button onClick={this.handleResetCounter}>Reset</button>
        </>
    )
  }
}
export default CounterClass;

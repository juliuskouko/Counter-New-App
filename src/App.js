import React, { Component } from 'react'
import CounterClass from './CounterClass'
import CounterFunction from './CounterFunction'

export default class App extends Component {
  render() {
    return (
      <>
        {/* <CounterClass/> */}
        <CounterFunction/>
      </>
    )
  }
}

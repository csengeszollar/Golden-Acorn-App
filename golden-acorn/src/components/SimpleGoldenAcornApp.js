import React, { Component } from 'react'
import Button from './Button'
import Display from './Display'

class SimpleGoldenAcornApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        } 
        this.decrement = this.decrement.bind(this)

    }

     increment() {
         this.setState({
             count: this.state.count + 1
         })
     }

     decrement() {
         if (this.state.count > 0) {
         this.setState({
             count: this.state.count - 1
         })
        }
     }
    
    render() {
        return (
            <div>
            <div><Button clicked={() => this.increment()} name= "Buy one"></Button></div>
            <div><Display>{this.state.count}</Display></div>  
            <div><Button clicked={this.decrement} name= "Eat one"></Button></div>
            </div>
        )
    }
}

export default SimpleGoldenAcornApp

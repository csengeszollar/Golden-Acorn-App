import React, { Component } from 'react'
import { connect } from 'react-redux'
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
         this.props.dispatch({ type: 'BUY_ACORN'})
        //  this.setState({
        //      count: this.state.count + 1
        //  })
     }

     decrement() {
         this.props.dispatch({type: 'EAT_ACORN'})
        //  if (this.state.count > 0) {
        //  this.setState({
        //      count: this.state.count - 1
        //  })
        // }
     }
    
    render() {
        return (
            <div>
            <div><Button clicked={() => this.increment()} name= "Buy one"></Button></div>
            <div><Display>{this.props.count}</Display></div>  
            <div><Button clicked={this.decrement} name= "Eat one"></Button></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})
export default connect(mapStateToProps)(SimpleGoldenAcornApp)

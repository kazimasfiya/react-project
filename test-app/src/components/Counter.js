import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
    }

    Change=()=>
    {
        this.setState({counter:this.state.counter+1})
    }
    
    render() {
        return (
            <div>
               <button onClick={this.Change}>Count({this.state.counter})</button> 
            </div>
        )
    }
}

export default Counter

import React, { Component } from 'react'

export class ClassMouse extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            x:0,
            y:0
        }
    }

    logmouseposition= e => {

        this.setState({x:e.clientX,y:e.clientY})
    }

    componentDidMount()
    {
        console.log("hello mahtab");
        window.addEventListener('mousemove',this.logmouseposition)
    }
    
    render() {
        return (
            <div>
                <p>Using Class</p>
                <p>X - {this.state.x} Y - {this.state.y}</p>
            </div>
        )
    }
}

export default ClassMouse

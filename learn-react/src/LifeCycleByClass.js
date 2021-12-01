import React, { Component } from 'react'

class LifeCycleByClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "MAhtab",
            email: "mahtab@test.com",
            count: 0
        }

        console.warn("constructor call")

    }


    componentDidMount() {
        console.warn("component did mount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.warn("component did update")
        console.warn(prevState);
    }

    shouldComponentUpdate()
    {
        console.warn("should component update")
        return true
    }

    render() {

        console.warn("render call")
        console.warn(this.state.email)


        return (
            <div>
                
                <h1>Life Cycle Methods</h1>
                <p>{ this.state.count }</p>

                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Update</button>
            </div>
        )
    }
}

export default LifeCycleByClass

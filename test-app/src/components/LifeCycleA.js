import React, { Component } from 'react'

export class LifeCycleA extends Component {

constructor(props) {
    super(props)

    this.state = {
         
    }

    console.warn("LifeCycleA Constructor")
}


static getDerivedStateFromProps(props,state)
{
    console.warn("LifeCycleA getDerivedStateFromProps");
    return null;
}

componentDidMount()
{
    console.warn("LifeCycleA componentDidMount");
   
}

    render() {

        console.warn("LifeCycleA render")
        return (
            <div>
                LifeCycleA
            </div>
        )
    }
}

export default LifeCycleA


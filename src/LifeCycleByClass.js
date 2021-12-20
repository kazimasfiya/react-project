import React, { Component } from 'react'

class LifeCycleByClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "MAhtab",
            email: "mahtab@test.com",
            count: 0,
            show:true
        }

        console.warn("constructor call")

    }


    componentDidMount() {
        console.warn("component did mount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.warn("component did update")
        //console.warn(prevState);
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

                { this.state.show?<ToggleChild></ToggleChild>:<h1>Child component removed</h1>}
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child</button>

            </div>
        )
    }
}

export default LifeCycleByClass


class ToggleChild extends Component
{
    componentWillUnmount()
    {
        console.warn("component unmount")
    }
   render(){
    return (
        <div>
            <h1>Unmount Example Child Component</h1>
        </div>
   
      )
   }
       
 
}

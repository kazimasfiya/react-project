import React from "react";

class UserClass extends React.Component
{

    constructor()
    {
        super();
        this.state={
            name:"MAhtab",
            count:0
        }

    }

    updateData=()=>{
        this.setState({
            name:"Kazim",
            count:this.state.count+1
        })
    }

    render()
    {
        return (
            <div>
                <h1>This is Class Component</h1>
                <h3>{this.state.name}</h3>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.updateData}>update data</button>
               
            </div>
        )
    }
}

export default UserClass;
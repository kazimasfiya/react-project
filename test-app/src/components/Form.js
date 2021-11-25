import React, { Component } from 'react'

export class Form extends Component {

    constructor(props)
    {
        super(props);

        this.state={
            username:'',
            address:''
        }
    }

    handleUsername=(event)=>{

        this.setState({
            username:event.target.value
        });
    }

    handleAddress=(event)=>{

        this.setState({
            address:event.target.value
        });
    }

    handleSubmit=(event)=>{

        event.preventDefault();
        alert(`${this.state.username} ${this.state.address}`)
        
    }

    render() {
        return (
            <div>

            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsername} />
                </div>
                <div>
                    <label>Address</label>
                    <textarea value={this.state.address} onChange={this.handleAddress}></textarea>
                </div>
                <button >Submit</button>
                
            </form>
                
            </div>
        )
    }
}

export default Form

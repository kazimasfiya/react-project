import React, { Component } from 'react'
import B from './B';
import C from './C';



import { Provider } from './Context';


export class A extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"MAhtab KAZim",
             roll:101
        }
    }

    handleClickContext=()=>{
        this.setState({
            roll:this.state.roll+1
        })
    }
    
    render() {

        const contextValue={
            data:this.state,
            handlecheck:this.handleClickContext
        }
        return (
            <div>
                <h1>Component A</h1>
                <Provider value={contextValue}>
                   <B ></B>
                   <C></C>
                </Provider>
                
            </div>
        )
    }
}

export default A

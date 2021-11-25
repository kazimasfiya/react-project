import React, { Component } from 'react'
import { Consumer } from './Context';

export class B extends Component {

   
    
    render() {
        return (
            <div>
               <h1>Component B</h1> 
               <Consumer>
               {
                   ({data,handlecheck})=>(
                        <div>
                            <h3>{data.roll}</h3>
                            <button onClick={handlecheck}>Change Roll No</button>
                        </div>
                  )
               }
               </Consumer>
               
            </div>
        )
    }
}

export default B

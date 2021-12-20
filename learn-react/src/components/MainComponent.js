import React, { Component } from 'react'
import { CommonContext } from './CommonContext'

export class MainComponent extends Component {
    render() {
        return (
            <div>
                <CommonContext.Consumer>
                  {

                   /* ({color})=>(
                        <div>
                            <h3 style={{backgroundColor:color}}>{color}</h3>
                           
                        </div>
                  )*/

                  ({color})=>{
                        
                        return (
                            <div>
                            <h3 style={{backgroundColor:color}}>Main PAge</h3>
                           
                        </div>
                        )
                  }
                  }
                </CommonContext.Consumer>
            </div>
        )
    }
}

export default MainComponent

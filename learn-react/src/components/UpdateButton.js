import React from 'react'
import { CommonContext } from './CommonContext'

function UpdateButton() {
    return (
        <div>
              <CommonContext.Consumer>
                    {
                        ({updateColor})=>(
                        <div>
                           
                            <button onClick={()=>{updateColor("Yellow")}}>Yellow Color</button>
                            <button onClick={()=>{updateColor("Blue")}}>Blue Color</button>
                        </div>
                  )
                    }
                </CommonContext.Consumer>
        </div>
    )
}

export default UpdateButton


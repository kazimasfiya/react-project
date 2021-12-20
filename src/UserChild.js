import React,{forwardRef} from 'react'

function UserChild(props,ref) {

    var name="MAhtab KAzim"

    return (
        <div>
             <h1>User Function Component</h1>
            
             
             <button onClick={()=>{props.alert(name)}}>Click Me!</button>

             <input type="text" ref={ref}></input>
       
        </div>
    )
}

export default forwardRef(UserChild)

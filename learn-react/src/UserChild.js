import React from 'react'

function UserChild(props) {

    var name="MAhtab KAzim"

    return (
        <div>
             <h1>User Function Component</h1>
            
             <button onClick={()=>{props.alert(name)}}>Click Me!</button>
       
        </div>
    )
}

export default UserChild

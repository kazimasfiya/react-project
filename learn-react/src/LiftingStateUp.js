import React from 'react'
import UserChild from './UserChild'

function parentTest(data)
{
    alert("Hello "+data)
}

function LiftingStateUp() {
    return (
        <div>
            <h1>Send Data from child to parent</h1>
            
            <UserChild alert={parentTest}></UserChild>
        </div>
    )
}

export default LiftingStateUp

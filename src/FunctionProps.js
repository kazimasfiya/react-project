import React from 'react'

function FunctionProps() {

function getData()
{
    alert("Hello from PArent Component")
}

    return (
        <div>
            <h1>Pass function as props</h1>
            <ChildComp data={getData}></ChildComp>
        </div>
    )
}

export default FunctionProps


function ChildComp(props)
{
 return(
    <button onClick={props.data}>Click here</button>
 )
}

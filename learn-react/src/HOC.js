import React,{useState} from 'react'
import { Button } from 'react-bootstrap'

function HOC() {
    return (
        <div>
            <h1>HOC</h1>
            <HOCRed cmp={Counter}></HOCRed>
            <HOCGreen cmp={Counter}></HOCGreen>
            {/*<Counter></Counter>*/}
        </div>
    )
}

function HOCRed(props)
{
    return <h3 style={{color:'red'}}><props.cmp></props.cmp></h3>
}

function HOCGreen(props)
{
    return <h3 style={{color:'green'}}><props.cmp></props.cmp></h3>
}


function Counter()
{
    const [count, setCount] = useState(0)
    return (
    <div>
    <h1>Counter HOC</h1>
    <h3>Count: {count}</h3>
    <Button onClick={()=>{setCount(count+1)}}>Update</Button>
    </div>
    )
}




export default HOC




import React,{useState,useEffect,useRef} from 'react'
import { Button } from 'react-bootstrap';

function PreveiousState() {
    const [count, setCount] = useState(0);

    function updateCounter()
    {
       /*  const rand=Math.floor(Math.random()*10)
        setCount((pre)=>{

            console.warn(pre)
            
            if(pre<5)
            {
                alert("low value")
            }

            return rand;
            
            
        }) */

        for(var i=0;i<5;i++)
        {
            setCount((prev)=>prev+1)
        }
    }
    return (
        <div>
            <h1>Previous State and Props in Functional Component</h1>
            <h3>{count}</h3>
            <button onClick={updateCounter}>Update Counter</button>
            <PrevProp count={count}></PrevProp>
            <Button onClick={()=>{setCount(Math.floor(Math.random()*10))}}>Update Props</Button>
        </div>
    )
}

export default PreveiousState


function PrevProp(props)
{

    const lastref = useRef()

    useEffect(()=>{
        lastref.current=props.count
    })

    const prevVal=lastref.current;
    return(
        <div>
        
        
        <h1>Child</h1>
        <h3>Current Value : {props.count}</h3>
        <h3>Prev Val: {prevVal}</h3>
            
        </div>
    )
}

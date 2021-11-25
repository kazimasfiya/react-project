import React,{useState,useEffect} from 'react';
import Counter from './Counter';

function HookCounter() {
    
    //const channelName=useState("MAhtab KAzim");
    //const name=channelName[0];
    //const setName=channelName[1];
    const [channelName,setName]=useState("MAhtab KAzim");
    const  [counter,setCounter]=useState(0)

    const stateHandler=()=>{
        //channelName[1]("Abydos Tech")
        setName("Abydos Technologies")
    }


    useEffect(()=>{
        console.log("test effect")
    },[channelName]);

    const Increment=()=>{
     
      setCounter(counter + 1)

    }

    const Decrement=()=>{
      
        setCounter(counter - 1)
    }

    return (
        <div>
            {channelName}
            <button onClick={stateHandler}>Click Me</button>
            <Counter></Counter>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <p>Count: {counter}</p>
        </div>
    )
}

export default HookCounter







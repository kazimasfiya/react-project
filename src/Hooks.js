import React,{useState,useEffect} from 'react'

function Hooks(props) {
     const [count, setstate] = useState(0);
     const [data, setdata] = useState(100);

     function update()
     {
         setstate(count+1)
     }

     useEffect(()=>{
         console.warn("useEffect 1 loads");
     },[count]);


     useEffect(()=>{
        console.warn("useEffect 2 loads");
    },[data]);

    useEffect(()=>{
        console.warn("useEffect 3 loads");
    },[props]);

    return (
        <div>
            <h1>Hooks Example</h1>
            <h3>Count: {count}</h3>
            <h3>Counter:{props.counter}</h3>
            <h3>Data:{data}</h3>
            <button onClick={update}>Update</button>
            <button onClick={()=>{setdata(data+1)}}>Update Data</button>
           
        </div>
    )
}

export default Hooks




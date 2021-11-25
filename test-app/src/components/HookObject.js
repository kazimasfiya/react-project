import React,{useEffect,useState} from 'react'

function HookObject() {

const [name,setName]=useState({firstName:"MAhtab",lastName:"Kazim"});

    return (
        <div>
            <form>
                <input type="text" name="fname" value={name.firstName} onChange={ e =>{ setName({...name,firstName:e.target.value}) } } />
                <input type="text" name="lname" value={name.lastName} onChange={ e =>{ setName({...name,lastName:e.target.value}) } } />
            </form>
            <p>{name.firstName} {name.lastName}</p>
          
            {JSON.stringify(name)}
        </div>
    )
}

export default HookObject

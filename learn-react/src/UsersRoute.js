import React from 'react'
import {useParams} from 'react-router-dom'


function UsersRoute() {
    const data = useParams();

    //let { id } = useParams();
    //let { name } = useParams();
    //let { id,name } = useParams();
console.log(useParams())
    
    return (
        <div>
            <h1>Users Component {data.id} - {data.name}</h1>
        </div>
    )
}

export default UsersRoute

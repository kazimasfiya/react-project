import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import UsersRoute from './UsersRoute'

function DynamicRouting() {

    const users = [
        { id: 101, name: "Mahtab", email: "mahtab@test.com", phone: "9876543210" },
        { id: 102, name: "Sameer", email: "sameer@test.com", phone: "0123456789" },
        { id: 103, name: "Nahid", email: "nahid@test.com", phone: "9876543210" },
        { id: 104, name: "Pooja", email: "pooja@test.com", phone: "0123456789" }
    ]


    return (
        <div>
            <h1>Dynamic Routing</h1>

            {
                        users.map((data, i) => {
                            return (
                                //data.id===101?
                                <tr key={i}>
                                    <td > {/*++i*/ data.id }</td>
                                    <td > {data.name}</td>
                                    <td><Link to={'/users/'+data.id+'/'+data.name}>{data.email}</Link> </td>
                                    <td>{data.phone}</td>

                                </tr>//:null




                            )
                        })
                    }

                    <Routes>
                        <Route path='/users/:id/:name' element={<UsersRoute />}></Route>
                    </Routes>
        </div>
    )
}

export default DynamicRouting

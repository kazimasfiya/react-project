import React from 'react'
import {Table,Container, NavItem} from 'react-bootstrap'

function NestedListArray() {
    const users = [
        { id: 101, name: "Mahtab", email: "mahtab@test.com", phone: "9876543210", address:[
            {city:"Delhi",country:"India"},
            {city:"New DElhi",country:"India"},
            {city:"South Delhi",country:"India"}
        ] },
        { id: 102, name: "Sameer", email: "sameer@test.com", phone: "0123456789", address:[
            {city:"Hyderabad",country:"India"},
            {city:"Riyad",country:"KSA"},
            {city:"Jeddah",country:"KSA"}
        ] },
        { id: 103, name: "Nahid", email: "nahid@test.com", phone: "9876543210", address:[
            {city:"Kolkata",country:"India"},
            {city:"New York",country:"USA"},
            
        ] },
        { id: 104, name: "Pooja", email: "pooja@test.com", phone: "0123456789", address:[
            {city:"KArachi",country:"Pakistan"},
          
        ] }
    ]
    return (
        <Container>
            <h1>Bootstrap Nesting Array List Handling</h1>
            <br />
            <Table striped bordered hover responsive>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                    </tr>


                    {
                        users.map((data, i) => {
                            return (
                                //data.id===101?
                                <tr key={i}>
                                    <td > {/*++i*/ data.id }</td>
                                    <td > {data.name}</td>
                                    <td> {data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>
                                    <Table striped bordered hover responsive>
                                    <tbody>
                                    {
                                        data.address.map((item,j)=>{

                                            return (
                                                <tr>
                                                <td > {++j }</td>
                                                <td>{item.city}</td>
                                                <td>{item.country}</td>
                                               </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                    
                                    </Table>
                                    </td>
                                </tr>//:null




                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default NestedListArray

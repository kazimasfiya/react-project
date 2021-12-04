import React from 'react'
import {Table,Container} from 'react-bootstrap'

function BootstrapArrayList() {
    const users = [
        { id: 101, name: "Mahtab", email: "mahtab@test.com", phone: "9876543210" },
        { id: 102, name: "Sameer", email: "sameer@test.com", phone: "0123456789" },
        { id: 103, name: "Nahid", email: "nahid@test.com", phone: "9876543210" },
        { id: 104, name: "Pooja", email: "pooja@test.com", phone: "0123456789" }
    ]
    return (
        <Container>
            <h1>Bootstrap Array List Handling</h1>
            <br />
            <Table striped bordered hover responsive>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
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

                                </tr>//:null




                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default BootstrapArrayList

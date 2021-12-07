import React from 'react'
import ReuseUser from './ReuseUser'

function Reuse() {

    const users = [
        { id: 101, name: "Mahtab", email: "mahtab@test.com", phone: "9876543210" },
        { id: 102, name: "Sameer", email: "sameer@test.com", phone: "0123456789" },
        { id: 103, name: "Nahid", email: "nahid@test.com", phone: "9876543210" },
        { id: 104, name: "Pooja", email: "pooja@test.com", phone: "0123456789" }
    ]

    return (
        <>
            <h1>Reuse Component</h1>
            
            {
                users.map((item,i)=>{
                    return <ReuseUser key={i} data={item}></ReuseUser>
                })
            }

        </>
        
    )
}

export default Reuse

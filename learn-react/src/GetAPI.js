import React, { useState, useEffect } from 'react'
import {Button, Container, Table} from 'react-bootstrap'

function GetAPI() {

    /*fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))*/

    const [data, setData] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((result) => {
                result.json().then((response) => {
                    //console.log("result", response)
                    setData(response)
                })
            })

            
    },[])


    console.warn(data)
    return (
        <div>
        <Container>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>User Id</th>
                <th>Name</th>
               
                </tr>
            </thead>
            <tbody>
                
               
                {
            
            
            data.map((item)=>{
                    
                    return(
                        <tr>
                        <td>{item.id}</td>
                     <td>{item.userId}</td>
                     <td>{item.title}</td>
                    </tr>
                    )
                    
                
            })
        }
            </tbody>
            </Table>
        </Container>
        
        
       
        </div>
    )
}

export default GetAPI

import React,{useState} from 'react'
import { Container, Form, Row, Col, Label, Group, Control, Button, Table } from 'react-bootstrap'

function StatewithObject() {
  
    const [data, setData] = useState({name:"",email:"",mobile:""})

    function saveUser() {
        
    }
    return (
        <div>
            <h1>State with Object</h1>
            <Form>
            
                    <Form.Group as={Row} className="mb-3" controlId="formBasicText" >
                        <Form.Label column sm="2">Name</Form.Label>
                        <Col sm="10">
                            <Form.Control column sm="10" type="text" placeholder="Enter Name" value={data.name} onChange={(e) => { setData({...data,name:e.target.value}) }} />
                        </Col>


                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                        <Form.Label column sm="2">Email</Form.Label>
                        <Col sm="10">
                            <Form.Control column sm="10" type="email" placeholder="Email" value={data.email} onChange={(e) => { setData({...data,email:e.target.value}) }} />
                        </Col>

                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formBasicText">
                        <Form.Label column sm="2">Mobile</Form.Label>
                        <Col sm="10">
                            <Form.Control column sm="10" type="text" placeholder="Mobile" value={data.mobile} onChange={(e) => { setData({...data,mobile:e.target.value})}} />
                        </Col>


                    </Form.Group>

                    <Button variant="primary" type="button" onClick={saveUser} >
                        Update
                    </Button>
                    
            </Form>

            <h3>Name: {data.name}</h3>
            <h3>Email: {data.email} </h3>
            <h3>Mobile: {data.mobile}</h3>
        </div>
    )
}

export default StatewithObject

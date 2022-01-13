import React, { useState, useEffect } from 'react'
import Header from './Header';
import { useNavigate } from 'react-router-dom'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios';



function Login() {

    const navigate = useNavigate();

    const [user_email, setEmail] = useState("")
    const [user_pass, setPass] = useState("")
    const [msg, setMsg] = useState("")



    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/add")
        }
    }, [])


    /*async function login() {
        // e.preventDefault();
        // console.warn("data",user_email,user_pass)

        const data = { user_email, user_pass }
        let result= await fetch("http://localhost/react-api/login.php",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });

       result = await result.json()
       
       if(result.success==1)
       {
          localStorage.setItem("user-info",JSON.stringify(result))
          navigate("/add");
       }
       else{

          setMsg(result.msg)
       }


    }
    */

    function login(e)
    {
        e.preventDefault();
        console.warn("data",user_email,user_pass)

        const data = { user_email, user_pass }

        axios.post('http://localhost/react-api/login.php', data)
          .then(function (response) {
            console.log(response.data);

            if(response.data.success==1)
       {
          localStorage.setItem("user-info",JSON.stringify(response.data))
          navigate("/add");
       }
       else{

          setMsg(response.data.msg)
       }
          })
          .catch(function (error) {
            console.log(error);
          });


    }



    return (
        <div>
            <Header />
            <h1>Login Page</h1>

            <Container>
                <Form>



                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <p>{msg}</p>
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="email@example.com" />
                        </Col>
                    </Form.Group>




                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" onChange={(e) => { setPass(e.target.value) }} placeholder="Password" />
                        </Col>
                    </Form.Group>


                    <Button onClick={login}>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login

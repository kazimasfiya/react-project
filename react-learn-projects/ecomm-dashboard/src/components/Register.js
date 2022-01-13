import React,{useState,useEffect} from 'react'
import { Container, Form,Row,Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Header from './Header';

function Register() {
    
    const [user_name, setName] = useState("")
    const [user_email, setEmail] = useState("")
    const [user_pass, setPass] = useState("")
    const [user_mobile, setMobile] = useState("");

    const navigate=useNavigate();


    function signup()
    {
        let user = {user_name,user_email,user_pass,user_mobile}

        fetch("http://localhost/react-api/add-user.php",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then((result)=>{
            //console.warn("result",result)
            result.json().then((response) => {
              console.log("result", response);
              localStorage.setItem("user-info",JSON.stringify(response))

              navigate("/add");
            
             
          })
            
        })


    }


    useEffect(() => {
       if(localStorage.getItem("user-info"))
       {
            navigate("/add")
       }
      
    })

    return (
        <div>
        <Header />
            <h1>User Signup </h1>
            <Container>
                <Form>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
                        <Form.Label column sm="2">
                            Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" value={user_name} onChange={(e)=>{setName(e.target.value)}}  placeholder='Name' />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" value={user_email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder="email@example.com" />
                        </Col>
                    </Form.Group>


                   

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" value={user_pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Mobile
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number"  value={user_mobile} onChange={(e)=>{setMobile(e.target.value)}} placeholder="8285532559" />
                        </Col>
                    </Form.Group>
                    <Button onClick={signup}>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Register

import React,{useState,useEffect} from 'react'
import { Container, Form, Row, Col, Label, Group, Control, Button,Table } from 'react-bootstrap'

function PostAPI() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const [data, setData] = useState([])

   function saveUser(e)
   {
       e.preventDefault();
       console.warn(name,email,mobile);
       let data={name,email,mobile}

      fetch("http://localhost:3000/posts",{
          method:"POST",
          headers:{
              "Accept":"application/json",
              "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
      }).then((result)=>{
          //console.warn("result",result)
          result.json().then((response) => {
            console.log("result", response)
            getData()
           
        })
          
      })
      
   }

   
   useEffect(() => {

    getData()

        
},[])

   function getData()
   {

    fetch('http://localhost:3000/posts')
        .then((result) => {
            result.json().then((response) => {
                //console.log("result", response)
                setData(response)
            })
        })
   }


   function deleteUser(val)
   {
     fetch(`http://localhost:3000/posts/${val}`,{
         method:"DELETE"
     }).then((result)=>{
        //console.warn("result",result)
        result.json().then((response) => {
          console.log("result", response)
          getData()
         
      })
        
    })
    
   }
        

    
    return (
        <div>
            <h1>Post API</h1>

            <Container>
                <Form >
                    <Form.Group as={Row} className="mb-3" controlId="formBasicText" >
                        <Form.Label column sm="2">Name</Form.Label>
                        <Col sm="10">
                         <Form.Control column sm="10" type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                         </Col>
                       
                        
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                        <Form.Label column sm="2">Email</Form.Label>
                        <Col sm="10">
                        <Form.Control column sm="10" type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </Col>
                        
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formBasicText">
                        <Form.Label column sm="2">Mobile</Form.Label>
                        <Col sm="10">
                        <Form.Control column sm="10" type="text" placeholder="Mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} />
                        </Col>
                       
                        
                    </Form.Group>
                    
                    <Button variant="primary" type="button" onClick={saveUser} >
                        Submit
                    </Button>
                </Form>
<br/><br />
                <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Action</th>
               
                </tr>
            </thead>
            <tbody>
                
               
                {
            
            
            data.map((item)=>{
                    
                    return(
                        <tr>
                        <td>{item.id}</td>
                     <td>{item.name}</td>
                     <td>{item.email}</td>
                     <td>{item.mobile}</td>
                     <td><Button onClick={()=>{deleteUser(item.id)}}>Delete</Button> | <Button variant="secondary" size="sm">
      Edit
    </Button></td>
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

export default PostAPI

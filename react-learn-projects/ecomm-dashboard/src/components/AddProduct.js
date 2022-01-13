import React,{useState,useEffect} from 'react'
import { Container, Form,Row,Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import axios, { Axios } from 'axios';

function AddProduct() {

const [prod_name, setName] = useState("");
const [prod_desc, setDesc] = useState("");
const [prod_price, setPrice] = useState("");
const [prod_img, setImage] = useState("");

const navigate=useNavigate();




function saveProduct()
{
    
    console.warn({prod_name,prod_price,prod_desc,prod_img})

    const formData= new FormData();

    formData.append("prod_img",prod_img);
    formData.append("prod_name",prod_name);
    formData.append("prod_price",prod_price);
    formData.append("prod_desc",prod_desc);

    const data={prod_name,prod_price,prod_desc,prod_img}

    axios.post('http://localhost/react-api/add-product.php', formData)
    .then(function (response) {
        //console.log(response)
        if(response.data.success==1)
       {
          navigate("/product-list");
       }

    }).catch(function (error) {
        console.log(error);
      });

      

}




    return (
        <div>
        <Header />
            <h1>Add Product</h1>

            <Container>
                <Form>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
                        <Form.Label column sm="2">
                            Product Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" value={prod_name}   placeholder='Name' onChange={(e)=>{setName(e.target.value)}} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Product Description
                        </Form.Label>
                        <Col sm="10">
                           <Form.Control as="textarea" value={prod_desc} rows={3} placeholder="Description" onChange={(e)=>{setDesc(e.target.value)}} />
                        </Col>
                    </Form.Group>


                   

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Price
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" value={prod_price}  placeholder="Price" onChange={(e)=>{setPrice(e.target.value)}} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Image
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="file"  onChange={(e)=>{setImage(e.target.files[0])}}    />
                        </Col>
                    </Form.Group>
                    <Button onClick={saveProduct}>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default AddProduct

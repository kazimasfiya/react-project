import React,{useState,useEffect} from 'react'
import { Container, Form,Row,Col, Button,Image } from 'react-bootstrap'
import { useNavigate,useParams } from 'react-router-dom'
import Header from './Header';
import axios, { Axios } from 'axios';

function UpdateProduct(props) {

const [prod_name, setName] = useState("");
const [prod_desc, setDesc] = useState("");
const [prod_price, setPrice] = useState("");
const [prod_img, setImage] = useState("");



const navigate=useNavigate();

let params = useParams();

const path="http://localhost/react-api/uploads/";

//console.warn(params)

function saveProduct()
{
    
    console.warn({prod_name,prod_price,prod_desc,prod_img})

    var img_val=document.getElementById("imgVal").value;

    const formData= new FormData();

    formData.append("prod_img",prod_img);
    formData.append("prod_name",prod_name);
    formData.append("prod_price",prod_price);
    formData.append("prod_desc",prod_desc);
    formData.append("img_val",img_val);
    formData.append("id",params.id);

    //const data={prod_name,prod_price,prod_desc,prod_img}

    axios.post('http://localhost/react-api/update-product.php', formData)
    .then(function (response) {
        //console.log(response)
        if(response.data.success==1)
       {
          navigate("/product-list");
         // console.warn(response.data.msg)
       }

    }).catch(function (error) {
        console.log(error);
      });

      

}

useEffect(() => {
    axios.post('http://localhost/react-api/edit-product.php', params)
    .then(function (response) {
      console.log(response.data.product[0]);
      setName(response.data.product[0].product_title)
      setDesc(response.data.product[0].product_short_description)
      setPrice(response.data.product[0].product_price)
      setImage(response.data.product[0].product_image)

    })
    .catch(function (error) {
      console.log(error);
    });
}, [])

    
    return (
        <div>
        <Header />
            <h1>Update Product</h1>

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
                            <Form.Control type="file" defaultValue={prod_img}  onChange={(e)=>{setImage(e.target.files[0])}}    />
                            <br/>
                            <Image src={path+prod_img}  thumbnail className='img-responsive col-md-1'></Image>
                            <input type="hidden" id="imgVal" value={prod_img} />
                        </Col>
                    </Form.Group>
                    <Button onClick={saveProduct}>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default UpdateProduct

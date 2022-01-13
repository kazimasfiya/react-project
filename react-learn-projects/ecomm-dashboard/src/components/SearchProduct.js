import React,{useState,useEffect} from 'react';
import { Container, Form,Row,Col, Button, Table, Image } from 'react-bootstrap'
import Header from './Header';
import axios, { Axios } from 'axios';


function SearchProduct() {

  const [data, setData] = useState([]);
  const [isValid,setValid]=useState(false);
  const path="http://localhost/react-api/uploads/";

function searchData(val)
{

    var params={name:val}
    axios.post('http://localhost/react-api/search-product.php', params)
    .then(function (response) {

        if(response.data.success==1)
        {
            console.log(response.data.products);
            setValid(true)
            setData(response.data.products)
        }
        else{
            //setData(response.data.msg)
            setValid(false)
        }

        console.log(data)
      

    })
    .catch(function (error) {
      console.log(error);
    });
}


    return (
        <div>
            <Header />
            <h1>Search Product</h1>

            <Container>
                <Form>
                <br />
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
                      
                <Col sm="3"></Col>
                        <Col sm="6">
                            <Form.Control type="text" onChange={(e)=>{searchData(e.target.value)}}    placeholder='Search Product'  />
                        </Col>
                        <Col sm="3"></Col>
                    </Form.Group>
                </Form>
            </Container>

            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                    {
                        
                        isValid==true ? 
                        data.map((item,i)=>{

                            return (
                                <tr>
                            <td>{++i}</td>
                            <td>{item.product_title}</td>
                            <td>{item.product_short_description}</td>
                            <td>{item.product_price}</td>
                            <td><Image src={ path+item.product_image } thumbnail className='img-responsive' /></td>
                            
                        </tr>
                            )
                        })
                        : <tr><td colspan="5">No record found</td></tr>



                        
                    }
                        
                        
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default SearchProduct

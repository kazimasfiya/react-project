import React,{useState,useEffect} from 'react';
import Header from './Header';
import { Button, Container, Table, Image } from 'react-bootstrap'
import axios from 'axios';
import {Link} from 'react-router-dom'

function ProductList() {

    const [data, setData] = useState([]);

    const path="http://localhost/react-api/uploads/";

    useEffect(() => {
       
        getData()



    }, [])

    function deleteUser(val) {

        const data={"id":val};
        fetch('http://localhost/react-api/delete-product.php', {
            method: "DELETE",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
       

        }).then((result) => {
            //console.warn("result",result)
            result.json().then((response) => {
                console.log("result", response)
                getData()

            })

        })

    }


    function getData() {

        axios.get("http://localhost/react-api/product-list.php").then(function (response) {

        console.log(response)
        if(response.data.success==1)
        {
            setData(response.data.products)
        }
        }).catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <Header />
            <h1> Product List</h1>

            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        data.map((item,i)=>{

                            return (
                                <tr>
                            <td>{++i}</td>
                            <td>{item.product_title}</td>
                            <td>{item.product_short_description}</td>
                            <td>{item.product_price}</td>
                            <td><Image src={ path+item.product_image } thumbnail className='img-responsive' /></td>
                            <td>
                            <Button size="sm" ariant="danger" onClick={() => { deleteUser(item.product_id) }} >Delete</Button> 
                            {/* | <Button variant="secondary" size="sm" onClick={() => { selectUser(item.id) }}> Edit</Button>*/}
                            <Link to={"/edit/"+item.product_id} className='btn btn-success btn-sm'>Update Product</Link>
                            </td>
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

export default ProductList

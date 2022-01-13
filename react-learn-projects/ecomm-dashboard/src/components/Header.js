import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Routes, Route , useNavigate } from 'react-router-dom'

import React from 'react'
import AddProduct from './AddProduct'
import Login from './Login'

function Header() {

    const user=JSON.parse(localStorage.getItem("user-info"))

    const navigate=useNavigate();

function logout()
{
    localStorage.clear();
    navigate("/register")

}


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">

                        {
                            localStorage.getItem("user-info") ?
                                <>
                                    <Link to='/add'>Add Product</Link>
                                    <Link to='/edit'>Update Product</Link>
                                    <Link to='/product-list'>Product List</Link>
                                    <Link to='/search'>Search Product</Link>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                        }



                    </Nav>
                    {
                        localStorage.getItem("user-info") ? 
                    <Nav>
                        <NavDropdown title={user && user.name}>
                           <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                           <NavDropdown.Item>Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    : null
                    }
                </Container>
            </Navbar>


        </div>
    )
}

export default Header

import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';
import ProductList from './ProductList';
import SearchProduct from './SearchProduct';


export default function RouterPage() {
    return (
        <div>
             <Router>
        
        <Routes>

                <Route path="/" element={<Login />}></Route>
                <Route path='/add' element={<Protected Cmp={AddProduct} />} >
                   
                </Route>
                <Route path='/edit/:id'  element={<Protected Cmp={UpdateProduct} />}>
                 
                </Route>
                <Route path='/product-list'  element={<Protected Cmp={ProductList} />}></Route>

                <Route path='/search' element={<Protected Cmp={SearchProduct} />}></Route>

                <Route path='/login' element={<Login />}>
                 
                </Route>
                <Route path='/register' element={<Register />}>
                
                </Route>
                 <Route path='*' element={<Login />}> </Route>
            </Routes>
      </Router>

        </div>
    )
}

import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Contact from './Contact'




function RouterPage() {
    
    return (
        <>
           
          
          

          <Router>
              <Header></Header>
               <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path='/contact' element={<Contact />} />
               </Routes>
               <Footer></Footer>
           </Router>


        </>
    )
}

export default RouterPage

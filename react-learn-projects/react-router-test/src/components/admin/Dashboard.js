import React from 'react'
import { Link, NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Employee from './Employee'
import Student from './Student'

function Dashboard() {

  
    
    return (
        <div>
            <h1>Dashboard Page of Admin</h1>
            <Link to='../dashboard/student'>Student</Link> |  <Link to='../dashboard/employee'>Employee</Link>

            <Routes>
                <Route path="/student" element={<Student />}></Route>
                <Route path="/employee" element={<Employee />} ></Route>
            </Routes>
            
        </div>
    )
}

export default Dashboard

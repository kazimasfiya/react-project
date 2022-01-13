import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Backend() {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Backend

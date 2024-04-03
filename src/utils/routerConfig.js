import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/index'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import NotFound from '../pages/Error/NotFound'
import Profile from '../pages/Profile'
import UserManagement from '../pages/admin/usermanagement'

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/usermanagement" element={<UserManagement />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes
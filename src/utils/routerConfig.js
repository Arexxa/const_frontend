import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/index'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import NotFound from '../pages/Error/NotFound'
import Profile from '../pages/Profile'
import UserManagement from '../pages/admin/usermanagement'
import Landing from '../pages/Landing'
import Consultant from '../pages/consultant/userlist'
import RegisterConsultant from '../pages/Auth/RegisterConsultant'
import ProtectedRoute from '../pages/Auth/Role/ProtectedRoute';
import UnauthorizedPage from '../pages/Error/UnauthorizedPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/register-consultant" element={<RegisterConsultant />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/usermanagement" element={<UserManagement />} />
            <Route exact path="/consultant" element={<Consultant />} />
            <Route path="*" element={<NotFound />} />
            <Route exact path="/unauthorized" element={<UnauthorizedPage />} />
        </Routes>
    )
}

export default AppRoutes

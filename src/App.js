import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginProvider } from './pages/Auth/Login/contexts/LoginContext'

import './App.css'
import NotFound from './pages/Error/NotFound'
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register/index.js'
import { RegisterProvider } from './pages/Auth/Register/contexts/RegisterContext.js'

function App() {
    return (
        <div className="App">
            <LoginProvider>
                <RegisterProvider>
                    <Routes>
                        <Route exact path="/" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </RegisterProvider>
            </LoginProvider>
        </div>
    )
}

export default App

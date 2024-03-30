import React from 'react'
import { LoginProvider } from '../Auth/Login/contexts/LoginContext'
import { RegisterProvider } from '../Auth/Register/contexts/RegisterContext'

const AppContextProviders = ({ children }) => {
    return (
        <LoginProvider>
            <RegisterProvider>{children}</RegisterProvider>
        </LoginProvider>
    )
}

export default AppContextProviders

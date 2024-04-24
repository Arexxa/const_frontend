import React from 'react'
import { LoginProvider } from '../Auth/Login/contexts/LoginContext'
import { RegisterProvider } from '../Auth/Register/contexts/RegisterContext'
import { UserManagementProvider } from '../admin/usermanagement/contexts/UserManagementContext'

const AppContextProviders = ({ children }) => {
    return (
        <LoginProvider>
            <RegisterProvider>
                <UserManagementProvider>{children}</UserManagementProvider>
            </RegisterProvider>
        </LoginProvider>
    )
}

export default AppContextProviders

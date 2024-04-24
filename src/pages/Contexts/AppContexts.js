import React from 'react'
import { LoginProvider } from '../Auth/Login/contexts/LoginContext'
import { RegisterProvider } from '../Auth/Register/contexts/RegisterContext'
import { UserManagementProvider } from '../admin/usermanagement/contexts/UserManagementContext'
import { ProfileProvider } from '../Profile/contexts/ProfileContexts'

const AppContextProviders = ({ children }) => {
    return (
        <LoginProvider>
            <RegisterProvider>
                <ProfileProvider>
                    <UserManagementProvider>{children}</UserManagementProvider>
                </ProfileProvider>
            </RegisterProvider>
        </LoginProvider>
    )
}

export default AppContextProviders

import React from 'react'
import { LoginProvider } from '../Auth/Login/contexts/LoginContext'
import { RegisterProvider } from '../Auth/Register/contexts/RegisterContext'
import { UserManagementProvider } from '../admin/usermanagement/contexts/UserManagementContext'
import { ProfileProvider } from '../Profile/contexts/ProfileContexts'
import { RegisterConsultantProvider } from '../Auth/RegisterConsultant/contexts/RegisterConsultantContext'

const AppContextProviders = ({ children }) => {
    return (
        <LoginProvider>
            <RegisterProvider>
                <RegisterConsultantProvider>
                    <ProfileProvider>
                        <UserManagementProvider>{children}</UserManagementProvider>
                    </ProfileProvider>
                </RegisterConsultantProvider>
            </RegisterProvider>
        </LoginProvider>
    )
}

export default AppContextProviders

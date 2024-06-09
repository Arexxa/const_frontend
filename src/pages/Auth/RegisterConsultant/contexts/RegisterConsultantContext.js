import React, { createContext, useState, useContext } from 'react'
import baseUrl from '../../../../utils/api'

const RegisterConsultantContext = createContext()

export const useRegisterConsultant = () => {
    return useContext(RegisterConsultantContext)
}

export const RegisterConsultantProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null)

    const register = async (name, email, password) => {
        try {
            const response = await baseUrl.post('/register/consultant', {
                name,
                email,
                password,
            })
            console.log('Register successful', response)
            console.log('Registered', response.data.userRegister.userId)
            // setUser(response.data.transaction.message)
            localStorage.setItem('userid', response.data.userRegister.userId)
            localStorage.setItem('userData', JSON.stringify(response.data.userRegister));
            console.log('user-id', localStorage.getItem('userid'))
            setUser('Success')
        } catch (error) {
            console.error('Register failed!', error)
            setError('Failed')
        }
    }

    const updateRegisterUser = async (
        userId,
        contactNo,
        address,
        city,
        state,
        country,
        // profileDescription,
        // portfolio,
        // website
    ) => {
        try {
            const response = await baseUrl.put('/register/consultant/update', {
                userId,
                contactNo,
                address,
                city,
                state,
                country,
                // profileDescription,
                // portfolio,
                // website,
            })
            // Handle successful response
            console.log('Profile updated:', response.data)
            // localStorage.setItem('userData', JSON.stringify(userData));
            setUser('Success')
        } catch (error) {
            setError(error.response.data.error || 'Internal Server Error')
            // Handle error
            console.error('Error updating profile:', error)
        }
    }

    const registerCompany = async (
        userId,
        company,
        jobTitle,
        description,
    ) => {
        try {
            const response = await baseUrl.post('/company/detail/add', {
                userId,
                company,
                jobTitle,
                description,
            })
            // Handle successful response
            console.log('Company details registered:', response.data)
        } catch (error) {
            setError(
                error.response.data.transaction.detail ||
                    'Internal Server Error'
            )
            // Handle error
            console.error('Error company details:', error)
        }
    }

    return (
        <RegisterConsultantContext.Provider
            value={{
                user,
                error,
                register,
                updateRegisterUser,
                registerCompany,
            }}
        >
            {children}
        </RegisterConsultantContext.Provider>
    )
}

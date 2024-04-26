import React, { createContext, useState, useContext } from 'react'
import baseUrl from '../../../../utils/api'

const RegisterContext = createContext()

export const useRegister = () => {
    return useContext(RegisterContext)
}

export const RegisterProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const register = async (name, email, password) => {
        try {
            const response = await baseUrl.post('/register', {
                name,
                email,
                password,
            })
            console.log('Register successful', response)
            console.log('Registered', response.data.userRegister.userId)
            // setUser(response.data.transaction.message)
            localStorage.setItem('userid', response.data.userRegister.userId)
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
        profileDescription,
        portfolio,
        website
    ) => {
        try {
            const response = await baseUrl.put('/register/update', {
                userId,
                contactNo,
                address,
                city,
                state,
                country,
                profileDescription,
                portfolio,
                website,
            })
            // Handle successful response
            console.log('Profile updated:', response.data)
            setUser('Success')
        } catch (error) {
            setError(error.response.data.error || 'Internal Server Error')
            // Handle error
            console.error('Error updating profile:', error)
        }
    }

    const registerWorkExperience = async (userId, workExperiences) => {
        try {
            const response = await baseUrl.post('/experience/detail/add', {
                userId,
                workExperiences,
            })
            console.log('Work experiences registered successfully:', response)
        } catch (error) {
            setError(error || 'Internal Server Error')
            console.error('Error registering work experiences:', error)
        }
    }

    const registerEducation = async (
        userId,
        university,
        course,
        startDate,
        endDate
    ) => {
        try {
            const response = await baseUrl.post('/education/detail/add', {
                userId,
                university,
                course,
                startDate,
                endDate,
            })
            // Handle successful response
            console.log('Education registered:', response.data)
        } catch (error) {
            setError(
                error.response.data.transaction.detail ||
                    'Internal Server Error'
            )
            // Handle error
            console.error('Error registering education:', error)
        }
    }

    const registerApplication = async (userId, applications) => {
        try {
            const response = await baseUrl.post('/application/detail/add', {
                userId,
                applications,
            })
            // Handle successful response
            console.log('Application registered:', response.data)
        } catch (error) {
            setError(
                error.response.data.transaction.detail ||
                    'Internal Server Error'
            )
            // Handle error
            console.error('Error registering application:', error)
        }
    }

    return (
        <RegisterContext.Provider
            value={{
                user,
                error,
                register,
                updateRegisterUser,
                registerWorkExperience,
                registerEducation,
                registerApplication,
            }}
        >
            {children}
        </RegisterContext.Provider>
    )
}

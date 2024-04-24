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
            // setUser(response.data.transaction.message)
            setUser('Success')
        } catch (error) {
            console.error('Register failed!', error)
            setError('Failed')
        }
    }

    const registerUserWorkExperienceEducation = async (
        // name,
        // email,
        // password,
        address,
        contactNo,
        city,
        state,
        country,
        profileDescription,
        workExperience,
        education,
        application
    ) => {
        try {
            const response = await baseUrl.post('/register', {
                // name,
                // email,
                // password,
                address,
                contactNo,
                city,
                state,
                country,
                profileDescription,
                workExperience,
                education,
                application,
            })
            console.log(
                'Register with work experience and education successful',
                response
            )
            setUser('Success')
        } catch (error) {
            console.error(
                'Register with work experience and education failed!',
                error
            )
            setError('Failed')
        }
    }

    return (
        <RegisterContext.Provider
            value={{
                user,
                error,
                register,
                registerUserWorkExperienceEducation,
            }}
        >
            {children}
        </RegisterContext.Provider>
    )
}

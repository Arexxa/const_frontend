import React, { createContext, useState, useContext } from 'react'
import baseUrl from '../../../../utils/api'

const LoginContext = createContext()

export const useLogin = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const login = async (email, password) => {
        try {
            const response = await baseUrl.post('/login', {
                email,
                password,
            })
            console.log('Login successful', response)
            setUser('Success')
        } catch (error) {
            console.error('Login failed!', error)
            setError('Failed')
        }
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <LoginContext.Provider value={{ user, error, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}

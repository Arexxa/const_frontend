import React, { createContext, useState, useContext } from 'react'
import baseUrl from '../../../../utils/api'

const LoginContext = createContext()

export const useLogin = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const login = async (username, password) => {
        try {
            const response = await baseUrl.post('/login', {
                username,
                password,
            })
            console.log('Login successful', response.data)
            setUser(response.data.user)
        } catch (error) {
            console.error('Login failed', error.response.data)
            setError(error.response.data)
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

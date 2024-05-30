import React, { createContext, useState, useEffect, useContext } from 'react';
import baseUrl from '../../../../utils/api';

const LoginContext = createContext();

export const useLogin = () => {
    return useContext(LoginContext);
}

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    // Check if user data exists in local storage on component mount
    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
            setUser('Success'); // Assuming user is logged in if userData is present
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await baseUrl.post('/login', {
                email,
                password,
            });
            console.log('Login successful', response);
            const userData = response.data.user;
            setUserData(userData);
            setUser('Success');
            // Store userData in local storage
            localStorage.setItem('userData', JSON.stringify(userData));
        } catch (error) {
            console.error('Login failed!', error);
            setError('Failed');
        }
    };

    const logout = () => {
        setUser(null);
        setUserData(null);
        // Clear userData from local storage on logout
        localStorage.removeItem('userData');
        localStorage.removeItem('userid')
    };

    return (
        <LoginContext.Provider value={{ user, userData, error, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};

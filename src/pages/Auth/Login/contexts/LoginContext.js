import React, { createContext, useState, useEffect, useContext } from 'react';
import baseUrl from '../../../../utils/api';
import { useCustomToast } from '../../../../components/Toast/toast';

const LoginContext = createContext();

export const useLogin = () => {
    return useContext(LoginContext);
}

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const { showToast } = useCustomToast();

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
            console.log(userData);
            // Check if user data contains roleId before setting user state
            if (userData && userData.roleId) {
                setUserData(userData);
                setUser(userData); // Set user state with userData
                // Store userData in local storage
                localStorage.setItem('userid', userData.userId);
                localStorage.setItem('roleId', userData.roleId);
                localStorage.setItem('userData', JSON.stringify(userData));
                showToast('success', 'Login successful'); // Show success toast
                return 'Success'; // Return 'Success' upon successful login
            } else {
                // Handle case where roleId is missing in userData
                setError('Role ID missing in user data');
                showToast('error', 'Role ID missing in user data'); // Show error toast
                return 'Error'; // Return 'Error' if roleId is missing
            }
        } catch (error) {
            console.error('Login failed!', error);
            // Use error response from the backend if available
            if (error.response && error.response.data && error.response.data.transaction) {
                setError(error.response.data.transaction.detail);
                showToast('error', error.response.data.transaction.detail); // Show error toast
            } else {
                setError('Failed to login');
                showToast('error', 'Failed to login'); // Show error toast
            }
            return 'Error'; // Return 'Error' upon login failure
        }
    };

    const logout = () => {
        setUser(null);
        setUserData(null);
        showToast('success', 'You have been signed out');
        // Clear userData from local storage on logout
        localStorage.removeItem('userData');
        localStorage.removeItem('userid');
        localStorage.removeItem('roleId');
    };

    return (
        <LoginContext.Provider value={{ user, userData, error, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};

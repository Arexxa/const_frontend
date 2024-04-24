import React, { createContext, useState, useContext } from 'react';
import baseUrl from '../../../utils/api';

const ProfileContext = createContext();

export const useProfile = () => {
    return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState(null);

    const fetchUserProfile = async (userId) => {
        try {
            const response = await baseUrl.get(`/user/profile?userId=${userId}`);
            const userData = response.data.result; // Access 'result' property
            setUserProfile(userData);
            console.log('test userData', userData);
            return userData;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw new Error('Failed to fetch user data');
        }
    };

    const updateUserProfile = async (updatedData) => {
        try {
            const response = await baseUrl.put('/user/profile/update', updatedData);
            setUserProfile(response.data.result);
        } catch (error) {
            console.error('Error updating user profile:', error);
            setError('Failed to update user profile');
        }
    };

    return (
        <ProfileContext.Provider value={{ userProfile, error, fetchUserProfile, updateUserProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};

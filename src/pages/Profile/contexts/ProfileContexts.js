import React, { createContext, useState, useContext } from 'react';
import baseUrl from '../../../utils/api';

const ProfileContext = createContext();

export const useProfile = () => {
    return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState(null);
    const [roles, setRoles] = useState(null);
    const [universities, setUniversities] = useState(null);

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

    const getRoles = async (roleId, role_name) => {
        try {
            const response = await baseUrl.get('/list/roles', {
                params: {
                    roleId,
                    role_name,
                },
            });
            console.log('Roles fetched successfully:', response.data);
            setRoles(response.data.result); // Assuming response.data contains the roles array
        } catch (error) {
            console.error('Failed to fetch roles:', error);
            setError(error);
        }
    };

    const getUniversity = async (name = '', country = 'malaysia') => {
        try {
            // Construct the API URL with the provided parameters
            const apiUrl = `http://universities.hipolabs.com/search?name=${name}&country=${country}`;
            
            // Make the API call
            const response = await fetch(apiUrl);
            
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to fetch university data');
            }
        
            // Parse the response JSON
            const data = await response.json();
            setUniversities(data);

            console.log('University data fetched successfully:', data);
            return data; // Return the fetched university data
        } catch (error) {
            console.error('Failed to fetch university data:', error);
            throw error; // Rethrow the error to handle it at a higher level
        }
    };

    const updateWorkExperience = async (userId, workExperienceId,updatedWorkExperience) => {
        try {
            const response = await baseUrl.put(`/application/detail/update?userId=${userId}&workExperienceId=${workExperienceId}`, updatedWorkExperience)
            console.log(response)
            setUserProfile(response)
        } catch (error) {
            console.error('Error updating user work experience:', error);
            setError('Failed to update user work experience');
        }
    }

    return (
        <ProfileContext.Provider value={{ userProfile, error, fetchUserProfile, updateUserProfile, roles, getRoles, universities, getUniversity, updateWorkExperience }}>
            {children}
        </ProfileContext.Provider>
    );
};

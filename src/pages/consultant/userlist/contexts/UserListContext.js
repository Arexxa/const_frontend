import React, { createContext, useState, useContext } from 'react';
import baseUrl from '../../../../utils/api';
const { useCustomToast } = require('../../../../components/Toast/toast');

const UserContext = createContext();

export const useProfile = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [userList, setUserList] = useState(null);
    const [error, setError] = useState(null);
    const { showToast } = useCustomToast();

    const fetchUserList = async () => {
        try {
            const response = await baseUrl.get(`/consultant/detail`);
            const userList = response.data.result; // Access 'result' property
            setUserList(userList);
            // console.log('test userList', userList);
            return userList;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw new Error('Failed to fetch user data');
        }
    };

    const fetchUserPDF = async (documentId) => {
        try {
            const response = await baseUrl.get(`/pdf/${documentId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching PDF data:', error);
            throw new Error('Failed to fetch PDF data');
        }
    };

    const updateNote = async (userId, noteId, updatedNote) => {
        try {
            const response = await baseUrl.post(`/consultant/detail/notes`, { userId, noteId, ...updatedNote });
            console.log(response);
            const updatedUserList = response.data.result;
            setUserList(updatedUserList);
            showToast('success', 'Note updated successfully'); // Show success toast
        } catch (error) {
            console.error('Error updating user note:', error);
            setError('Failed to update user note');
            showToast('error', error.response?.data?.error || 'Failed to update user note'); // Show error toast with backend error message if available, otherwise generic message
        }
    };
    
    const updateUserStatus = async (userId, newStatus) => {
        try {
            const response = await baseUrl.post(`/consultant/detail/status`, { userId, status: newStatus });
            const updatedUserList = response.data.result;
            setUserList(updatedUserList);
            showToast('success', 'User status updated successfully'); // Show success toast
        } catch (error) {
            console.error('Error updating user status:', error);
            setError('Failed to update user status');
            showToast('error', error.response?.data?.error || 'Failed to update user status'); // Show error toast with backend error message if available, otherwise generic message
        }
    };

    return (
        <UserContext.Provider value={{ userList, error, fetchUserList, fetchUserPDF, updateNote, updateUserStatus }}>
            {children}
        </UserContext.Provider>
    );
};

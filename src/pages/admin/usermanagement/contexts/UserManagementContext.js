import React, { createContext, useState, useContext } from 'react';
import baseUrl from '../../../../utils/api';

const UserManagementContext = createContext();

export const useProfile = () => {
    return useContext(UserManagementContext);
};

export const UserManagementProvider = ({ children }) => {
    const [userList, setUserList] = useState(null);
    const [error, setError] = useState(null);

    const fetchUserList = async () => {
        try {
            const response = await baseUrl.get(`/admin/detail`);
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
        } catch (error) {
            console.error('Error updating user note:', error);
            setError('Failed to update user note');
        }
    };

    const updateUserStatus = async (userId, newStatus) => {
        try {
          const response = await baseUrl.post(`/consultant/detail/status`, { userId, status: newStatus });
          const updatedUserList = response.data.result;
          setUserList(updatedUserList);
        } catch (error) {
          console.error('Error updating user status:', error);
          setError('Failed to update user status');
        }
    };

    return (
        <UserManagementContext.Provider value={{ userList, error, fetchUserList, fetchUserPDF, updateNote, updateUserStatus }}>
            {children}
        </UserManagementContext.Provider>
    );
};

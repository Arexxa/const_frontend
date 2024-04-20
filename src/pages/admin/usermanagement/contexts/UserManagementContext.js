import React, { createContext, useState, useContext, useEffect } from 'react';
import baseUrl from '../../../../utils/api';

const UserManagementContext = createContext();

export const useRoleId = () => {
    return useContext(UserManagementContext);
};

export const UserManagementProvider = ({ children }) => {
    const [roles, setRoles] = useState(null);
    const [error, setError] = useState(null);

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

    return (
        <UserManagementContext.Provider value={{ roles, getRoles, error }}>
            {children}
        </UserManagementContext.Provider>
    );
};

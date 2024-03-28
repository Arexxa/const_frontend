import axiosInstance from './axios';

const api = {
  // Create operation
  create: async (resource, data) => {
    try {
      const response = await axiosInstance.post(`/${resource}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Read operation
  read: async (resource, id) => {
    try {
      const response = await axiosInstance.get(`/${resource}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update operation
  update: async (resource, id, data) => {
    try {
      const response = await axiosInstance.put(`/${resource}/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete operation
  delete: async (resource, id) => {
    try {
      const response = await axiosInstance.delete(`/${resource}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;

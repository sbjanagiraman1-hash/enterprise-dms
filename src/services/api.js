import axios from 'axios';

// Create an Axios instance with default config
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Check for auth token here, e.g.:
    // const token = localStorage.getItem('authToken');
    // if (token) { config.headers.Authorization = `Bearer ${token}`; }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle global errors, like 401 Unauthorized
    if (error.response && error.response.status === 401) {
      // Redirect to login or refresh token logic
      console.error('Unauthorized access - potentially clear token and redirect');
    }
    return Promise.reject(error);
  }
);

// API Service Functions
export const UserAPI = {
  getUsers: () => apiClient.get('/users'),
  getUserById: (id) => apiClient.get(`/users/${id}`),
  createUser: (userData) => apiClient.post('/users', userData),
  updateUser: (id, userData) => apiClient.put(`/users/${id}`, userData),
  deleteUser: (id) => apiClient.delete(`/users/${id}`),
};

export default apiClient;

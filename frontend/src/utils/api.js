import axios from 'axios';

const api = {
    refreshService: async (serviceUrl) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/refresh?url=${encodeURIComponent(serviceUrl)}`);
            return response;
        } catch (error) {
            throw error;
        }
    },
};

export default api;
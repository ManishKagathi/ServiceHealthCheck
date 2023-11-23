const axios = require('axios');

// Controller logic for handling service requests
exports.refreshService = async (req, res) => {
    try {
        // Logic to refresh a specific service using axios
        const response = await axios.get(decodeURIComponent(req.query.url));

        // Perform operations with the response
        return res.json({ message: 'Service refreshed successfully', data: response.data });
    } catch (error) {
        const { response } = error
        const status = response?.status || 500
        return res.status(status).json({ message: 'Error refreshing service', error: error.message, status });
    }
};

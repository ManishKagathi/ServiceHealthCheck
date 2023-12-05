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

exports.refreshServiceCard = async (req, res) => {
    let failedRequestsCount = 0;
    try {
        const urls = JSON.parse(decodeURIComponent(req.query.url));
        const requests = urls.map(url => axios.get(url))
        const results = await Promise.allSettled(requests);
        results.forEach((result, index) => {
            if (result.status !== 'fulfilled') {
                failedRequestsCount += 1;
            }
        })

        if (failedRequestsCount > 0) {
            return res.status(500).json({
                message: 'Error occured',
                failedRequestsCount: failedRequestsCount
            })
        }
        return res.json({
            message: 'Service refreshed successfully',
            failedRequestsCount: failedRequestsCount
        });

    } catch (error) {
        const { response } = error
        const status = response?.status || 500
        return res.status(status).json({
            message: 'Error refreshing service',
            error: error.message,
            status: status,
            failedRequestsCount: failedRequestsCount
        });
    }
}

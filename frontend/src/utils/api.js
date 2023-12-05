import axios from 'axios';

const api = {
    refreshService: async (serviceUrl) => {

        try {
            const response = await axios.get(`http://localhost:8000/api/refresh?url=${encodeURIComponent(serviceUrl)}`)
            return response;
        } catch (error) {
            console.log(error, "ErrorTest");
            throw error;
        }
    },
    refreshServiceStatus: async (serviceUrl) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/service-status?url=${encodeURIComponent(serviceUrl)}`)
            // .then(res => { console.log(res); return res }).catch(err => {
            //     console.log(err);
            //     return {
            //         data: { failedRequestsCount: 1 }
            //     }
            // });
            console.log(response, "ResponseTest");
            return response;
        } catch (error) {
            throw error;
        }
    }
};

export default api;
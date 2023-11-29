import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import moment from "moment";
import '../Styles/CardStyle.css';

const ServiceCard = ({ serviceName, serviceUrl, autoRefreshEnabled, toggleRefreshAll, handleClick = () => { }, apiHandler = api.refreshService }) => {
    const [lastRefreshTime, setLastRefreshTime] = useState('');
    const [serviceStatus, setServiceStatus] = useState('');
    const [errorCode, setErrorCode] = useState('');


    const refreshService = async () => {
        try {
            const response = await apiHandler(serviceUrl);
            if (response.status === 200) {
                setServiceStatus('up');
            } else {
                setServiceStatus('down');
                setErrorCode(response.status);
            }
        } catch (error) {
            const { response: { status = 500 } = {} } = error
            console.error(error);
            setServiceStatus('down');
            setErrorCode(status);
        } finally {
            const currentTime = moment(new Date()).format("DD/MM/YYYY hh:mm");
            setLastRefreshTime(`Last Updated at ${currentTime}`);
        }
    };

    useEffect(() => {
        let refreshFn = null;
        if (autoRefreshEnabled) {
            refreshFn = setInterval(() => {
                refreshService();
            }, 5000);
        }
        else {
            clearInterval(refreshFn);
        }
        return () => {
            clearInterval(refreshFn);
        };
    }, [autoRefreshEnabled]);

    useEffect(() => {
        refreshService();
    }, [toggleRefreshAll]);

    return (
        <div className={`bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 rounded-lg shadow-lg
         p-8 max-w-md mx-auto border-4 animate-blink z-8
         ${serviceStatus === 'up' ? 'border-green-600' : 'border-red-600'}`}
            onClick={handleClick}
        >
            <div h2 className={`text-2xl font-bold mb-4 ${serviceStatus === 'up' ? 'text-green-600' : 'text-red-600'}`
            }> {serviceName}</div>

            <div div className="flex items-center mb-6" >
                <div className={`w-4 h-4 rounded-full mr-2 status-dot ${serviceStatus === 'up' ? 'bg-green-600' : 'bg-red-600'}`}></div>
                <p className={`text-ll font-bold ${serviceStatus === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {serviceStatus === 'up' ? `Running... 200 OK` : `Down... ${errorCode}`}</p>
            </div>

            <p className="text-sm font-semibold text-gray-600 mb-6">{lastRefreshTime}</p>
            <button onClick={refreshService}
                className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 float-right hover:bg-blue-600
                 active:translate-y-1 z-9">
                Refresh
            </button>
        </div>
    );
};

export default ServiceCard;

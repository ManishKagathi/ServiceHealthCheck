import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import moment from "moment";
import '../Styles/CardStyle.css';
import { getServiceCardColor } from '../utils';

const ServiceCard = ({ serviceName, serviceUrl, autoRefreshEnabled, toggleRefreshAll, handleClick = () => { }, apiHandler = api.refreshServiceStatus }) => {
    const [lastRefreshTime, setLastRefreshTime] = useState('');
    const [serviceStatus, setServiceStatus] = useState('');
    const [errorCode, setErrorCode] = useState('');
    const [failedRequestsCount, setFailedRequestsCount] = useState(-1);

    const urls = JSON.parse(serviceUrl);


    const refreshService = async () => {
        try {
            const response = await apiHandler(serviceUrl);
            setServiceStatus('up');
            setFailedRequestsCount(0);
        } catch (error) {
            const { response: { status = 500, data = {} } = {} } = error
            setFailedRequestsCount(data?.failedRequestsCount || 0)
            setServiceStatus('down');
            setErrorCode(status);
        } finally {
            const currentTime = moment(new Date()).format("DD/MM/YYYY hh:mm");
            setLastRefreshTime(`Last Updated at ${currentTime}`);
        }
    };

    const handleRefreshServiseClick = (e) => {
        e.stopPropagation();
        refreshService();
    }

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

    if (serviceName === 'Onboarding') {
        console.log(failedRequestsCount, ((urls.length) / 2), getServiceCardColor(failedRequestsCount, urls, "border"));
    }

    return (
        <div className={`bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 rounded-lg shadow-lg
        p-8 m-1 max-w-md mx-auto border-4 animate-blink z-0 w-full 
         ${getServiceCardColor(failedRequestsCount, urls, "border")}
         `}
            onClick={handleClick}
        >
            <div h2 className={`text-2xl font-bold mb-4
              ${getServiceCardColor(failedRequestsCount, urls, "text")}
             `}>
                {serviceName}
            </div>

            <div div className="flex items-center mb-6" >

                <div className={`w-4 h-4 rounded-full mr-2 status-dot
                 ${getServiceCardColor(failedRequestsCount, urls, "bg")}
                 `}></div>

                <p className={`text-ll font-bold
              ${getServiceCardColor(failedRequestsCount, urls, "text")}
                 `}>
                    {serviceStatus === 'up' ? `Running... 200 OK` : 'Down...'}</p>
            </div>

            <p className="text-sm font-semibold text-gray-600 mb-6">{lastRefreshTime}</p>
            <button onClick={handleRefreshServiseClick}
                className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 float-right hover:bg-blue-600
                 active:translate-y-1 z-10">
                Refresh
            </button>
        </div>
    );
};

export default ServiceCard;


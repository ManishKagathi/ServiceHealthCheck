import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import RefreshAllButton from '../components/RefreshAllButton';
import AutoRefreshToggle from '../components/AutoRefreshToggle';
import { services } from '../utils/ConfigParams';
import { useNavigate } from 'react-router';
import api from '../utils/api';



const Home = () => {
    const navigate = useNavigate();
    const [refreshAllEnabled, setrefreshAllEnabled] = useState(false);
    const toggleRefreshAll = () => {
        setrefreshAllEnabled(!refreshAllEnabled);
    }

    const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(false);
    const toggleAutoRefresh = () => {
        setAutoRefreshEnabled(!autoRefreshEnabled);
    };

    const handleClick = (service) => {
        navigate(`/services/${service}`)
    }

    return (
        <div className="relative container mx-auto py-20">
            <h1 className="text-3xl font-bold mb-4">Services Status</h1>
            <div className='flex items-center justify-between mb-4'>
                <AutoRefreshToggle
                    toggleAutoRefresh={toggleAutoRefresh}
                    autoRefreshEnabled={autoRefreshEnabled}
                />
                <RefreshAllButton toggleRefreshAll={toggleRefreshAll} />
            </div>
            <div className="grid grid-cols-4 gap-1 cursor-pointer">
                {Object.entries(services).map(([key, value], index) => (
                    <ServiceCard
                        key={index}
                        serviceName={key}
                        serviceUrl={JSON.stringify(Object.values(value))}
                        autoRefreshEnabled={autoRefreshEnabled}
                        handleClick={() => handleClick(key)}
                        apiHandler={api.refreshServiceStatus}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;

import React, { useState } from 'react';
import { useParams } from 'react-router';
import ServiceCard from '../components/ServiceCard';
import RefreshAllButton from '../components/RefreshAllButton';
import AutoRefreshToggle from '../components/AutoRefreshToggle';
import { services } from '../utils/ConfigParams';


function ServiceApis() {
  const { serviceName } = useParams();
  const serviceUrls = services[serviceName];


  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(false);
  const toggleAutoRefresh = () => {
    setAutoRefreshEnabled(!autoRefreshEnabled);
  };

  const [refreshAllEnabled, setRefreshAllEnabled] = useState(false);
  const toggleRefreshAll = () => {
    setRefreshAllEnabled(!refreshAllEnabled)
  };

  return (
    <div className="  relative container mx-auto py-20">

      <div className='flex justify-between items-center py-5'>
        <AutoRefreshToggle
          autoRefreshEnabled={autoRefreshEnabled}
          toggleAutoRefresh={toggleAutoRefresh}
        />
        <RefreshAllButton toggleRefreshAll={toggleRefreshAll} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Object.entries(serviceUrls).map(([key, value], index) => (
          <ServiceCard
            key={index}
            serviceName={key}
            serviceUrl={value}
            toggleRefreshAll={refreshAllEnabled}
            autoRefreshEnabled={autoRefreshEnabled}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceApis;
import React, { useState } from 'react';
import { useParams } from 'react-router';
import APIServiceCard from '../components/APIServiceCard';
import RefreshAllButton from '../components/RefreshAllButton';
import AutoRefreshToggle from '../components/AutoRefreshToggle';
import { services } from '../utils/ConfigParams';


function ServiceApis() {
  const { serviceName } = useParams();
  const serviceUrls = services[serviceName];

  const pmlServices = serviceUrls['PMLService'] || {};
  const thirdPartyServices = serviceUrls['ThirdPartyService'] || {};


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

      <h2 className="text-2xl font-bold text-gray-800 py-4 border-b-4 border-gray-300 mb-4">
        PML Services
      </h2>

      <div>
        {/* PMLService Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Object.entries(pmlServices).map(([serviceName, serviceUrl], index) => (
            <APIServiceCard
              key={`PML-${index}`}
              serviceName={serviceName}
              serviceUrl={serviceUrl}
              toggleRefreshAll={refreshAllEnabled}
              autoRefreshEnabled={autoRefreshEnabled}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 py-4 border-b-4 border-gray-300 my-4">
          ThirdPartyService
        </h2>

        {/* ThirdPartyService Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Object.entries(thirdPartyServices).map(([serviceName, serviceUrl], index) => (
            <APIServiceCard
              key={`ThirdParty-${index}`}
              serviceName={serviceName}
              serviceUrl={serviceUrl}
              toggleRefreshAll={refreshAllEnabled}
              autoRefreshEnabled={autoRefreshEnabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceApis;
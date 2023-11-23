import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import RefreshAllButton from '../components/RefreshAllButton';
import AutoRefreshToggle from '../components/AutoRefreshToggle';



const Home = () => {

    const [refreshAllEnabled, setrefreshAllEnabled] = useState(false);
    const toggleRefreshAll = () => {
        setrefreshAllEnabled(!refreshAllEnabled);
    }

    const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(false);
    const toggleAutoRefresh = () => {
        setAutoRefreshEnabled(!autoRefreshEnabled);
    };


    return (
        <div className="relative container mx-auto py-20">
            <h1 className="text-3xl font-bold mb-4">Services Status</h1>
            <div className='flex items-center justify-between mb-2'>
                <AutoRefreshToggle
                    toggleAutoRefresh={toggleAutoRefresh}
                    autoRefreshEnabled={autoRefreshEnabled}
                />
                <RefreshAllButton toggleRefreshAll={toggleRefreshAll} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                <ServiceCard
                    serviceName="pf-crm"
                    serviceUrl="https://pf-stg.paytmmoney.com/pf-crm/status"
                    toggleRefreshAll={refreshAllEnabled}
                    autoRefreshEnabled={autoRefreshEnabled}
                />
                <ServiceCard
                    serviceName="pf-dms"
                    serviceUrl="https://pf-stg.paytmmoney.com/pf-dms/v1/status"
                    toggleRefreshAll={refreshAllEnabled}
                    autoRefreshEnabled={autoRefreshEnabled}
                />
                <ServiceCard
                    serviceName="pf-kyc"
                    serviceUrl="https://pf-stg.paytmmoney.com/pf-kyc/status"
                    toggleRefreshAll={refreshAllEnabled}
                    autoRefreshEnabled={autoRefreshEnabled}
                />
                <ServiceCard
                    serviceName="pf-apollo"
                    serviceUrl="https://pf-stg.paytmmoney.com/pf-apollo/health-check"
                    toggleRefreshAll={refreshAllEnabled}
                    autoRefreshEnabled={autoRefreshEnabled}
                />
                <ServiceCard
                    serviceName="pf-kyc_kra"
                    serviceUrl="https://pf-stg.paytmmoney.com/pf_kyc_kra/status"
                    toggleRefreshAll={refreshAllEnabled}
                    autoRefreshEnabled={autoRefreshEnabled}
                />
                <ServiceCard
                    serviceName="pf-masterdata"
                    serviceUrl="https://pf-stg.paytmmoney.com/pf-masterdata/status"
                    toggleRefreshAll={refreshAllEnabled}
                    autoRefreshEnabled={autoRefreshEnabled}
                />
                <ServiceCard
                    serviceName="old kyc"
                    serviceUrl="https://api-staging.paytmmoney.com/kyc/v2/master/relation"
                    toggleRefreshAll={refreshAllEnabled}
                    autoRefreshEnabled={autoRefreshEnabled}
                />

            </div>
        </div>
    );
};

export default Home;

import React from 'react';

const AutoRefreshToggle = ({ autoRefreshEnabled, toggleAutoRefresh }) => {
    return (
        <div className='flex items-center gap-2 mb-2'>
            <button
                onClick={toggleAutoRefresh}
                className={`relative inline-flex flex-shrink-0 h-6 w-11 rounded-full border-2
                 ${autoRefreshEnabled ? 'bg-indigo-500' : 'bg-gray-400'} focus:outline-none transition-colors ease-in-out duration-200`}
            >
                <span
                    className={`absolute translate-x-0 inline-block h-5 w-5 rounded-full bg-white border-2
                     border-gray-200 ${autoRefreshEnabled ? 'transform translate-x-full' : ''
                        } transition-transform ease-in-out duration-200`}
                ></span>
            </button>
            <span >Toggle auto refresh</span>
        </div>
    );
};

export default AutoRefreshToggle;
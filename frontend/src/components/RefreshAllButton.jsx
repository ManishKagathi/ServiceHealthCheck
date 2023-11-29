import React from 'react';

const RefreshAllButton = ({ toggleRefreshAll }) => {
    return (
        <button onClick={toggleRefreshAll}
            className="bg-green-500 text-white px-4 py-2 rounded-md z-20 hover:bg-green-600 active:translate-y-1">
            Refresh All
        </button>
    );
};

export default RefreshAllButton;

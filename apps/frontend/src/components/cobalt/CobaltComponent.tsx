'use client';

import React from 'react';

const CobaltComponent = () => {
    return (
        <div className="w-full h-screen">
            <iframe
                src="https://cobalt.tools/"
                className="w-full h-full border-none"
                title="Cobalt Tools"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default CobaltComponent;
'use client';

import React from 'react';

const GraphiteComponent = () => {
    return (
        <div className="w-full h-screen">
            <iframe
                src="https://editor.graphite.rs/"
                className="w-full h-full border-none"
                title="Graphite Tools"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default GraphiteComponent;
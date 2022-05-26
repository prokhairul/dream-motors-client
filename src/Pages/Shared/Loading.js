import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center mt-10 mb-10">
                <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;
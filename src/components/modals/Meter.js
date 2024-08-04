import React from 'react';

const Meter = ({ data, onClose }) => {
    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-4 rounded-lg w-1/2'>
                <h2 className='text-xl font-semibold mb-2'>MQTT Data</h2>
                <p><strong>Topic:</strong> {data.topic}</p>
                <p><strong>Message:</strong> {data.message}</p>
                <button
                    className='mt-4 bg-blue-500 text-white py-2 px-4 rounded'
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Meter;

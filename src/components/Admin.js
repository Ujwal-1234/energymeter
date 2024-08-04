import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import { fetchData, setAuthToken } from '../service/apiservice'; // Adjust the import path as necessary
import Meter from './modals/Meter';
import ExpandableOptions from './ExpandableOptions';

export default function Admin() {
    const [isAdmin, setAdmin] = useState(false);
    const [data, setData] = useState([]);
    const [mqttClient, setMqttClient] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [selectedTopic, setSelectedTopic] = useState('');

    const mqttOptions = {
        port: process.env.REACT_APP_MQTT_PORT || 9001,
        username: process.env.REACT_APP_MQTT_USERNAME,
        password: process.env.REACT_APP_MQTT_PASSWORD,
        protocol: 'ws',
    };

    useEffect(() => {
        const fetchDataFromServer = async () => {
            try {
                setAuthToken(localStorage.getItem('token'));
                const response = await fetchData('/api/daily_updates/meterlist'); // Replace with your actual endpoint
                if (response.data.token === "VALIDADMIN") {
                    setAdmin(true);
                    setData(response.data.data);
                }
            } catch (error) {
                if (error.response.data.token === "NAADM") {
                    alert(error.response.data.message);
                } else {
                    alert('UNKNOWN ERROR. READ THE LOG', error);
                    console.error('Error fetching data:', error.response.data.message);
                }
            }
        };

        fetchDataFromServer();
    }, []);

    useEffect(() => {
        const client = mqtt.connect(`ws://${process.env.REACT_APP_MQTT_HOST}:${process.env.REACT_APP_MQTT_PORT}`, mqttOptions);
        setMqttClient(client);

        client.on('connect', () => {
            console.log('Connected to MQTT broker');
        });

        client.on('message', (topic, message) => {
            if (topic === selectedTopic) {
                setModalData({ topic, message: message.toString() });
                // Optionally, you can keep the modal open for the most recent message
            }
        });

        return () => {
            if (client) {
                client.end();
            }
        };
    }, [selectedTopic]); // Reconnect when selectedTopic changes

    const handleMeterClick = (topic) => {
        if (mqttClient) {
            mqttClient.subscribe(topic, (err) => {
                if (err) {
                    console.error(`Error subscribing to topic ${topic}:`, err);
                } else {
                    console.log(`Subscribed to topic ${topic}`);
                    setSelectedTopic(topic);
                    setModalData({ topic, message: 'No message received yet.' }); // Default message if none received
                    setShowModal(true); // Open modal immediately on click
                }
            });
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedTopic('');
    };
    const options = ['ADD', 'REMOVE', 'EDIT'];
    return (
        <div className='bg-slate-300 overflow-auto w-full h-full'>
            <div className='mt-4 w-full sticky top-0 flex bg-slate-200 p-2'>
                <ExpandableOptions title="CONTROLS" options={options} />
            </div>
            {isAdmin ?
                <>
                    <div className='flex flex-wrap items-start justify-start'>
                        <ul className='flex flex-wrap justify-between'>
                            {data.map((item, index) => (
                                <li
                                    key={index}
                                    className={`${item.meterstatus === 'ACTIVE' ? 'bg-green-500' : 'bg-red-500 border border-red'} rounded-lg p-2 hover:border hover:border-white cursor-pointer w-32 text-center md:m-2 m-1`}
                                    title={`Meter Number: ${item.meterno}`}
                                    onClick={() => handleMeterClick(item.mqttTopic)}
                                >
                                    {item.meterno.length > 5 ? (item.meterno.slice(0, 5) + " ....") : item.meterno}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {showModal && <Meter data={modalData} onClose={closeModal} />}
                </>
                :
                <>Admin Access Not Available for the Current User</>}
        </div>
    );
}

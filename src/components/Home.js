import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import Graphs from './Graphs'
import MqttComponent from './MqttComponent'

export default function Home() {
  const port = 8083
  const hostname = "techpradnya.xyz"
  const username = "techpradnya"
  const password = "techpradnya"
  const [client, setClient] = useState(null);
  const [connectStatus, setConnectStatus] = useState('Disconnected');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const mqttOptions = {
      port: port || 9001, // Default WebSocket port
      username: username,
      password: password,
      protocol: 'ws', // Use 'wss' for secure WebSocket connections
    };

    const mqttClient = mqtt.connect(`ws://${hostname}:${port}`, mqttOptions);
    setClient(mqttClient);

    mqttClient.on('connect', () => {
      setConnectStatus('Connected');
      console.log('Connected to MQTT broker');

      // Example subscription
      mqttClient.subscribe('test/topic', (err) => {
        if (err) {
          console.error('Subscribe error:', err);
        }
      });
    });

    mqttClient.on('message', (topic, message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { topic, message: message.toString() },
      ]);
    });

    mqttClient.on('error', (err) => {
      console.error('Connection error:', err);
      setConnectStatus('Disconnected');
      mqttClient.end();
    });

    mqttClient.on('reconnect', () => {
      setConnectStatus('Reconnecting');
    });

    return () => {
      mqttClient.end();
    };
  }, [hostname, port, username, password]);

  return (
    <div>
        <div className=' bg-slate-600 text-white text-2xl p-2 rounded-lg mb-2 flex justify-between'>
            <span className='w-1/4 '>Ujwal Kumar Mahato</span>
            <span className='w-1/4 text-center text-blue-300'>Meter Number : 4562</span>
            <span className='w-1/4 text-center text-red-300'>Sanction Load : 452 KW</span>
            <span className=' w-1/4 text-right font-bold text-green-200'>Nashik</span>
        </div>
        <div className=' lg:w-1/2 h-1/2 text-white p-4 rounded-lg bg-slate-900'>
            <h2 className=' bg-white bg-opacity-10 p-2 rounded-lg text-2xl'>Parameters</h2>
            <p className=' flex justify-between'>
                <span className=' w-1/2 p-2 text-2xl'>Voltage</span>
                <span className=' w-1/2 p-2 text-2xl'>220.4 V</span>
            </p>
            
            <p className=' flex justify-between'>
                <span className=' w-1/2 p-2 text-2xl'>Current</span>
                <span className=' w-1/2 p-2 text-2xl'>00 A</span>
            </p>

            
            <p className=' flex justify-between'>
                <span className=' w-1/2 p-2 text-2xl'>Unit</span>
                <span className=' w-1/2 p-2 text-2xl'>2204 KW</span>
            </p>

        </div>
        {/* <MqttComponent/> */}
        <div>
            <Graphs />
        </div>
      
    </div>
  )
}

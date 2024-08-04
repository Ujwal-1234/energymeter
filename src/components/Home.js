import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import Graphs from './Graphs';
import { fetchData, setAuthToken } from '../service/apiservice';
import { handleLogout } from './LogoutHelper';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [client, setClient] = useState(null);
  const [connectStatus, setConnectStatus] = useState('Disconnected');
  const [token, setToken] = useState(localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_KEY));
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const logout = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState("Not Logged In");
  const [mno, setMNO] = useState("---");
  const [sload, setSload] = useState("---");
  const [area, setArea] = useState("---");

  const [volt, setVolt] = useState("--");
  const [load, setLoad] = useState("--");
  const [curr, setCurr] = useState("--");

  const [data, setData] = useState([]);

  useEffect(() => {
    const mqttOptions = {
      port: process.env.REACT_APP_MQTT_PORT || 9001, // Default WebSocket port
      username: process.env.REACT_APP_MQTT_USERNAME,
      password: process.env.REACT_APP_MQTT_PASSWORD,
      protocol: 'ws', // Use 'wss' for secure WebSocket connections
    };

    const mqttClient = mqtt.connect(`ws://${process.env.REACT_APP_MQTT_HOST}:${process.env.REACT_APP_MQTT_PORT}`, mqttOptions);
    setClient(mqttClient);

    mqttClient.on('connect', () => {
      setConnectStatus('Connected');
      console.log('Connected to MQTT broker');

      // Example subscription
      mqttClient.subscribe(`meter/${mno}/data`, (err) => {
        if (err) {
          console.error('Subscribe error:', err);
        }
      });
    });

    mqttClient.on('message', (topic, message) => {
      const [voltage, load, current] = message.toString().split(',');
      console.log(voltage, load, current);
      setVolt(voltage);
      setLoad(load);
      setCurr(current);
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
  }, []);

  const sendMessage = (topic, message) => {
    if (client) {
      client.publish(topic, message, (err) => {
        if (err) {
          console.error('Publish error:', err);
        } else {
          console.log('Message sent:', message);
        }
      });
    } else {
      console.error('Client is not connected');
    }
  };

  useEffect(() => {
    setAuthToken(localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_KEY));
    const getData = async () => {
      console.log('Get data');
      try {
        const response = await fetchData(process.env.REACT_APP_API_STATIC_DATA_ENDPOINT);
        console.log(response.data);
        setData(response.data);
        setUser(response.data.username);
        setMNO(response.data.mno);
        setSload(response.data.sload);
        setArea(response.data.area);

        // Send message to MQTT broker after successfully fetching data
        if (client && connectStatus === 'Connected') {
          sendMessage(`meter/${response.data.mno}/control`, JSON.stringify({token: localStorage.getItem(`${process.env.REACT_APP_AUTH_TOKEN_KEY}`), data: 1}));

          // Subscribe to meter data topic after sending the control message
          client.subscribe(`meter/${response.data.mno}/data`, (err) => {
            if (err) {
              console.error('Subscribe error:', err);
            }
          });
        }
      } catch (error) {
        console.log(error);
        if (error.response.data.token === "EXPTKN" || error.response.data.token === "BLKTKN") {
          handleLogout(logout, navigate);
        }
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      getData();
    }
  }, [client, connectStatus, logout, navigate, token]);

  return (
    <div className='overflow-auto h-full'>
      <div className='bg-slate-600 flex-wrap text-white text-2xl p-2 rounded-lg mb-2 flex justify-between'>
        <span className='w-1/4'>{user}</span>
        <span className='w-1/4 text-center text-blue-300'>Meter Number : {mno}</span>
        <span className='w-1/4 text-center text-red-300'>Sanction Load : {sload} KW</span>
        <span className='w-1/4 text-right font-bold text-green-200'>{area}</span>
      </div>
      <div className='lg:w-1/2 h-52 text-white p-4 rounded-lg bg-slate-900'>
        <h2 className='bg-white bg-opacity-10 p-2 rounded-lg text-2xl'>Parameters</h2>
        <p className='flex justify-between'>
          <span className='w-1/2 p-2 text-2xl'>Voltage</span>
          <span className='w-1/2 p-2 text-2xl'>{volt} V</span>
        </p>
        
        <p className='flex justify-between'>
          <span className='w-1/2 p-2 text-2xl'>Current</span>
          <span className='w-1/2 p-2 text-2xl'>{curr} A</span>
        </p>

        <p className='flex justify-between'>
          <span className='w-1/2 p-2 text-2xl'>Unit</span>
          <span className='w-1/2 p-2 text-2xl'>{load} KW</span>
        </p>
      </div>
      <div>
        <Graphs />
      </div>
    </div>
  );
}

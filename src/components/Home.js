import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import Graphs from './Graphs'
import MqttComponent from './MqttComponent'
import { fetchData, postData, updateData, deleteData, setAuthToken } from '../service/apiservice';
import { handleLogout } from './LogoutHelper';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const port = 8083
  const hostname = "techpradnya.xyz"
  const username = "techpradnya"
  const password = "techpradnya"
  const [client, setClient] = useState(null);
  const [connectStatus, setConnectStatus] = useState('Disconnected');
  const [messages, setMessages] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const logout=useAuth()
  const navigate = useNavigate()

  const [user, setUser] = useState("Not Logged In");
  const [mno, setMNO] = useState("---");
  const [sload, setSload] = useState("---");
  const [area, setArea] = useState("---");

  const [volt, setVolt] = useState("--")
  const [load, setLoad] = useState("--")
  const [curr, setCurr] = useState("--")

  const [data, setData] = useState([]);
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
      mqttClient.subscribe('msg', (err) => {
        if (err) {
          console.error('Subscribe error:', err);
        }
      });
    });

    mqttClient.on('message', (topic, message) => {
      // setMessages((prevMessages) => [
      //   ...prevMessages,
      //   { topic, message: message.toString() },
      // ]);
      // console.log(message.toString())
      setVolt(message.toString().split(',')[0])
      setLoad(message.toString().split(',')[1])
      setCurr(message.toString().split(',')[2])
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

  useEffect(() => {
    setAuthToken(localStorage.getItem('token'));
    const getData = async () => {
      console.log('Get data')
      try {
        const response = await fetchData();
        console.log(response.data);
        setData(response.data);
        setUser(response.data.user);
        setMNO(response.data.mno);
        setSload(response.data.sload);
        setArea(response.data.area);
      } catch (error) {
        console.log(error);
        console.log(error.response.data.token)
        if(error.response.data.token == "EXPTKN" || error.response.data.token == "BLKTKN"){
          handleLogout(logout, navigate)
        } 
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div>
        <div className=' bg-slate-600 text-white text-2xl p-2 rounded-lg mb-2 flex justify-between'>
            <span className='w-1/4 '>{user}</span>
            <span className='w-1/4 text-center text-blue-300'>Meter Number : {mno}</span>
            <span className='w-1/4 text-center text-red-300'>Sanction Load : {sload} KW</span>
            <span className=' w-1/4 text-right font-bold text-green-200'>{area}</span>
        </div>
        <div className=' lg:w-1/2 h-1/2 text-white p-4 rounded-lg bg-slate-900'>
            <h2 className=' bg-white bg-opacity-10 p-2 rounded-lg text-2xl'>Parameters</h2>
            <p className=' flex justify-between'>
                <span className=' w-1/2 p-2 text-2xl'>Voltage</span>
                <span className=' w-1/2 p-2 text-2xl'>{volt} V</span>
            </p>
            
            <p className=' flex justify-between'>
                <span className=' w-1/2 p-2 text-2xl'>Current</span>
                <span className=' w-1/2 p-2 text-2xl'>{curr} A</span>
            </p>

            
            <p className=' flex justify-between'>
                <span className=' w-1/2 p-2 text-2xl'>Unit</span>
                <span className=' w-1/2 p-2 text-2xl'>{load} KW</span>
            </p>

        </div>
        {/* <MqttComponent/> */}
        <div>
            <Graphs />
        </div>
      
    </div>
  )
}

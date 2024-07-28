import React, { useState, useEffect } from "react";
import { Chart, BarElement,CategoryScale, LinearScale, Legend, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import dummyData from './dummy.json'

Chart.register(BarElement,CategoryScale, LinearScale, Legend, Tooltip);

function BarChart(props) {

  let datesorting=[];
  const [data, setData] = useState([]);
  const [datatype, setdatatype] = useState(props.data1);
  const [gy, setGy] = useState([]);
  const [gx, setGx] = useState([]);

  useEffect(() => {
    console.log("Line 16 ",props.data1)
    setData(dummyData);
    if(props.from=="" || props.to=="")
    {
      load_data(props.data1)
    }
    else{
      datesorting = sorting();
      load_data_1(props.from,props.to,props.data1)
    }
  }, [data,props.data1,props.from,props.to]);

  const load_data = (data_type) => {
    const updatedGx = [];
    const updatedGy = [];
    for (let i = 0; i < data.length; i++) {
      updatedGx.push(data[i].date.slice(0, 10));
      updatedGy.push(Number(data[i][data_type]).toFixed(2));
    }
    setdatatype(props.data1);
    setGx(updatedGx.slice(-5));
    setGy(updatedGy.slice(-5));
  };

  const graphFunc = (xAxis, yAxis, graphType) => {
    const graph = {
      labels: xAxis,
      datasets: [{
        label: `${graphType}`,
        data: yAxis,
        backgroundColor: "aqua", // Bar color
        borderColor: "white", // Border color of bars
        borderWidth: 1,
        barThickness: 100,
      }]
    };
    return graph;
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white' // Set legend label color to white
        }
      },
    },
    scales: {
      x: {
        grid: {
          color: "gray", // Set the color of the grid lines for the x-axis
        },
        ticks: {
          color: 'white' // Set x-axis tick text color to white
        }
      },
      y: {
        grid: {
          color: "gray", // Set the color of the grid lines for the y-axis
        },
        ticks: {
          color: 'white' // Set y-axis tick text color to white
        }
      }
    }
  };

  const graphPlotter = (xAxis, yAxis, graphType) => {
    return (
      data.length > 0 &&
      <Bar data={graphFunc(xAxis, yAxis, graphType)} options={options} />
    );
  };

  let sorting=()=>{
    const sortedData = data.sort((a, b) =>new Date(a.date) - new Date(b.date) );
    console.log(sortedData);
    return sortedData
  }
  
  const load_data_1=(date1,date2,datatype)=>{
    let updatedGx=[];
    let updatedGy=[];
    for(let i=0;i<data.length;i++)
  {
    if(data[i].date>=date1 && data[i].date<=date2)
      {
        updatedGx.push(data[i].date.slice(0,10))
        updatedGy.push(data[i][datatype])
      } 
  }
  setGx(updatedGx);
  setGy(updatedGy);
  }

  return (
    <>
    
      {data.length > 0 && (
        <div className='w-full h-full items-baseline justify-start bg-blue-950'>
          {graphPlotter(gx, gy, datatype)}<br />
        </div>
      )}
    </>
  );
}

export default BarChart;
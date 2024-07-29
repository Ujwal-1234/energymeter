import React from 'react';
import { Chart, BarElement, CategoryScale, LinearScale, Legend, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary chart.js components
Chart.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const BarChart = ({ data }) => {
  // Default chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  // Prepare data for the bar chart
  const chartData = {
    labels: data.labels || [], // X-axis labels
    datasets: [
      {
        label: 'Voltage',
        data: data.values || [], // Data values
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1, // Border width
      },
    ],
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;

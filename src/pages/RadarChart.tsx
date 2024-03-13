import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import '../assets/styles/pages/RadarChart.css';

interface Metrics {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
}

const initialMetrics: Metrics = {
  A: 50,
  B: 50,
  C: 50,
  D: 50,
  E: 50,
  F: 50,
};

const RadarChartPage: React.FC = (): JSX.Element => {
  const [metrics, setMetrics] = useState<Metrics>(initialMetrics);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMetrics((prevMetrics) => ({
      ...prevMetrics,
      [name]: parseInt(value, 10),
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the metrics data
    console.log('Submitted Metrics:', metrics);
  };

  const data = {
    labels: Object.keys(metrics),
    datasets: [
      {
        label: 'Customizable Radar Chart',
        data: Object.values(metrics),
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <>
      <h1>Radar Chart Page</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(metrics).map((key) => (
          <div key={key}>
            <label htmlFor={key}>{key}:</label>
            <input
              type="number"
              id={key}
              name={key}
              value={metrics[key as keyof Metrics]}
              onChange={handleChange}
              min={0}
              max={100}
            />
          </div>
        ))}
        <button type="submit">Update Chart</button>
      </form>
      <div style={{ width: '400px', height: '400px' }}>
        <Radar data={data} options={options} />
      </div>
    </>
  );
};

export default RadarChartPage;

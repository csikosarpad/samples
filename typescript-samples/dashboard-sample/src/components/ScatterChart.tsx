import React from 'react';
import { Scatter } from 'react-chartjs-2';

const ScatterChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Scatter
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: '',
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
export default ScatterChart;

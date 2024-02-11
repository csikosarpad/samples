//Bubble
import React from 'react';
import { Bubble } from 'react-chartjs-2';

const BubbleChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Bubble
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

export default BubbleChart;

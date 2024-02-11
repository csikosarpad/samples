import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/dataSlice.ts';
import BarChart from '../components/BarChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartPage = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state);
  const [dataLoading, setDataLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    switch (status) {
      case 'failed':
        setFetchError(error);
        break;
      case 'loading':
        setDataLoading(true);
        break;
      case 'succeeded':
        setDataLoaded(true);
        break;
    }
  }, [status]);

  const wordsLength = (respData) => {
    const workData = Array.isArray(respData)
      ? respData
      : Object.values(respData);
    return workData.map((item) => item.body.trim().split(/\s+/).length);
  };

  const bubblePoints = (barData) => {
    const i = wordsLength(barData);
    return i.map((item, index) => {
      return {
        x: 2 * index + 20,
        y: 2 * index + 30,
        r: item,
      };
    });
  };

  const barPoints = (barData) => {
    const i = wordsLength(barData);
    return i.map((item, index) => {
      return {
        x: 2 * index + 20,
        y: 2 * index + 30,
        r: item,
      };
    });
  };

  useEffect(() => {
    const Data = Object.values(Object.groupBy(data, ({ postId }) => postId));
    Data.length = 5;
    const defaultOps = {
      backgroundColor: ['#fff', '#ff5', '#f5f', '#5ff', , '#f55'],
      grouped: true,
    };
    const chartLabels: string[] = [];

    const dSets = Data.map((item, index) => {
      const lineLabel = `Id: ${index + 1}`;
      const line = { label: lineLabel, data: wordsLength(item) };
      chartLabels.push(`Post id: ${index + 1}`);
      //return line;
      return { ...line, ...defaultOps };
    });

    const restData = {
      datasets: dSets,
      labels: chartLabels,
    };
    setChartData(restData);
  }, [data]);

  return (
    <main>
      {dataLoading && !dataLoaded && (
        <div className="loading-content">
          <p>Please wait, data is being retrieved</p>
          <div className="loader"></div>
        </div>
      )}
      {dataLoaded && (
        <>
          <h2>Chart</h2>
          <BarChart chartData={chartData} />
        </>
      )}
      {fetchError && <div>{JSON.stringify(fetchError, null, 2)}</div>}
    </main>
  );
};

export default ChartPage;

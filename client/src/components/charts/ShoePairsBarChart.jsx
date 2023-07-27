/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import { Bar } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

function ShoePairsBarChart({ filteredData }) {
  const pairsCount = [...filteredData].reduce((data, val) => {
    data[val.numOfShoes] = (data[val.numOfShoes] || 0) + 1;

    return data;
  }, {});

  const config = {
    labels: [
      'Under 5 pairs',
      'Between 5 - 15 pairs',
      'Between 15 - 25 pairs',
      'Between 25 - 35 pairs',
      'Between 35 - 50 pairs',
      'over 50+ pairs',
    ],
    datasets: [
      {
        label: '# of Participants',
        data: pairsCount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <p className="description">Average Pairs Of Shoes Owned</p>
      <Bar data={config} options={options} />
    </div>
  );
}

export default ShoePairsBarChart;

/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import { Bar } from 'react-chartjs-2';

function SpendingBarChart({ filteredData }) {
  const spendingCount = [...filteredData].reduce((data, val) => {
    data[val.maxPay] = (data[val.maxPay] || 0) + 1;
    return data;
  }, {});

  const config = {
    labels: [
      'Under $100 CAD',
      'Between $100 - $200 CAD',
      'Between $200 - $400 CAD',
      'Between $400 - $600 CAD',
      'Between $600 - $800 CAD',
      'Over $800+ CAD',
    ],
    datasets: [
      {
        label: '# of Participants',
        data: spendingCount,

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
      <p className="description">Average Amount Spent On A Pair Of Shoes</p>
      <Bar data={config} options={options} />
    </div>
  );
}
export default SpendingBarChart;

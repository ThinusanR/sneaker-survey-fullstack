/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import { Bar } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

function ShoePairsBarChart({ filteredData }) {
  console.log('data', filteredData);
  const labels = {
    numShoeRange1: 'Under 5 pairs',
    numShoeRange2: 'Between 5 - 15 pairs',
    numShoeRange3: 'Between 15 - 25 pairs',
    numShoeRange4: 'Between 25 - 35 pairs',
    numShoeRange5: 'Between 35 - 50 pairs',
    numShoeRange6: 'over 50+ pairs',
  };
  let pairsCount = [...filteredData].map((data) => (data.numOfShoes
    ? (data.numOfShoes = labels[data.numOfShoes])
    : (data.numOfShoes = 'Under 5 pairs')));
  console.log('pairs-', pairsCount);

  pairsCount = [...filteredData].reduce((data, val) => {
    data[val.numOfShoes] = (data[val.numOfShoes] || 0) + 1;

    return data;
  }, {});

  // return ();
  console.log('pairs--', pairsCount);
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

// numOfShoes

// numShoeRange1
// numShoeRange2
// numShoeRange3
// numShoeRange4
// numShoeRange5
// numShoeRange6

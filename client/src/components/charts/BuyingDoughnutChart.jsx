/* eslint-disable react/prop-types */
import { Doughnut } from 'react-chartjs-2';

function BuyingDoughnutChart({ filteredData }) {
  const buyingPrefCount = [...filteredData].reduce((data, val) => {
    data[val.buyingPreference] = (data[val.buyingPreference] || 0) + 1;

    return data;
  }, {});
  console.log('pairs-', buyingPrefCount);
  const config = {
    labels: ['Online', 'In-Store', 'Both'],
    datasets: [
      {
        label: '# of Participants',
        data: [
          buyingPrefCount.ONLINE,
          buyingPrefCount.INSTORE,
          buyingPrefCount.BOTH,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <p className="description">Buying Preference</p>
      <Doughnut data={config} />
    </div>
  );
}

export default BuyingDoughnutChart;

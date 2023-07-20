/* eslint-disable react/prop-types */
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale } from "chart.js";
import { Bar } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend, LinearScale);

function SizeBarChart({ filteredData }) {
  const sizeCount = [...filteredData].reduce((data, val) => {
    data[val.shoeSize] = (data[val.shoeSize] || 0) + 1;

    return data;
  }, {});
  // const nameCount = arr.reduce((a, v) => (v.shoesize === val ? a + 1 : a), 0);

  const labels = [
    'US M 3.5 / W 5',
    'US M 4 / W 5.5',
    'US M 4.5 / W 6',
    'US M 5 / W 6.5',
    'US M 5.5 / W 7',
    'US M 6 / W 7.5',
    'US M 6.5 /W 8',
    'US M 7 / W 8.5',
    'US M 7.5 / W 9',
    'US M 8 / W 9.5',
    'US M 8.5 / W 10',
    'US M 9 / W 10.5',
    'US M 9.5 / W 11',
    'US M 10 / W 11.5',
    'US M 10.5 / W 12',
    'US M 11 / W 12.5',
    'US M 11.5 / W 13',
    'US M 12 / W 13.5',
    'US M 12.5 / W 14',
    'US M 13 / W 14.5',
    'US M 13.5 / W 15',
    'US M 14 / W 15.5',
    'US M 14.5 / W 16',
    'US M 15 / W 16.5',
  ];
  // console.log("size", sizeCount);
  const config = {
    labels,
    datasets: [
      {
        label: '# of Participants',
        data: sizeCount,
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

  return (
    <div className="chart-container">
      <p className="description">Shoe Sizes</p>
      <Bar data={config} />
    </div>
  );
}
export default SizeBarChart;

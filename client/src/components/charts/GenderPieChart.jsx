// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

function GenderPieChart({filteredData}){
  // console.log("yeeeee",[...filteredData].map(item => item.gender));
 const nameCount = [...filteredData].reduce((acc, val) => {
  acc[val.gender] = (acc[val.gender] || 0) + 1;
  return acc;
}, {});
// console.log("count",nameCount)
  let config = {
  labels: ['Male','Female','Other'],
  datasets:[
    {
      label: '# of Votes',
      data: [nameCount.MALE,nameCount.FEMALE,nameCount.OTHER],
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

    }
  ]
 }
 return (
  <div>
    <Pie data={config}/>
  </div>
 )
}
export default GenderPieChart;
import { PolarArea } from "react-chartjs-2";

function AgePolarAreaChart({filteredData}){

  const labels = {
    "ageRange1": "Under 10 years old",
    "ageRange2": "Between 10 - 20 years old",
    "ageRange3": "Between 20 - 30 years old",
    "ageRange4": "Between 30 - 45 years old",
    "ageRange5": "Between 45 - 60 years old",
    "ageRange6": "60 years and older",
  }
  // let ageCount = [...filteredData].map((data) => (data.age ? data.age = labels[data.age] : data.age = "Between 10 - 20 years old"))
  

  let ageCount = [...filteredData].reduce((data, val)=> {
    data[val.age] = (data[val.age] || 0) + 1;

    return data;
  }, {})

  console.log("age", ageCount)
  let config= {
    labels : Object.values(labels),
    datasets: [{
      label: 'My First Dataset',
      data: [ageCount.ageRange1,ageCount.ageRange2,ageCount.ageRange3,ageCount.ageRange4,ageCount.ageRange5,ageCount.ageRange6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <div>
      <PolarArea data={config} />
    </div>
  )
}
export default AgePolarAreaChart;
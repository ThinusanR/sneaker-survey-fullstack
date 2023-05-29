
import { Radar } from "react-chartjs-2";



function BrandsRadarChart({filteredData}) {
  const labels = ['Adidas', 'Converse', 'Puma', 'Vans', 'Air Jordan', 'Reebok', 'New Balance', 'Asics', 'Yeezy', 'Designer'];
  let counts = {}
  const favBrands = [...filteredData].map(survey => survey.favouriteBrands)
  for(const array of favBrands){
    

    for(const j of array){
      counts[j] = (counts[j] || 0 ) + 1
    }

  }
  console.log("brands", favBrands);
  console.log(counts,"cou")
  console.log("counts", labels.map(label => (counts[label])));
  const config = {
    labels: labels,
    datasets: [
      {
        label: "# of Participants",
        data: labels.map((label) => counts[label]),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        fill: true,
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
    // options: {
    //   scale: {
       
    //     angleLines: {
    //       color: 'rgb(54, 162, 235)',
    //     },
      
    //   },
    // },
  };
  const options = {
    scale: {
      gridLines: {
        color: 'rgb(54, 162, 235)', // Change the color of the grid lines
        lineWidth: 1, // Adjust the width of the grid lines
      },
      angleLines: {
        color: 'rgb(54, 162, 235)', // Change the color of the angle lines
        lineWidth: 1, // Adjust the width of the angle lines
      },
    },
  };
  return (
    <div className="chart-container">
      <p className="description">Favourite Shoe Brands</p>
      <Radar data={config} options={options}/>
    </div>
  );
}

export default BrandsRadarChart
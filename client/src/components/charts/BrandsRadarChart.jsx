
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
  let config= {
    labels : labels,
    datasets: [{
      label: 'My First Dataset',
      data: labels.map(label => (counts[label])),
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
      <Radar data={config} />
    </div>
  );
}

export default BrandsRadarChart
import { Doughnut } from "react-chartjs-2";
function ShoppingDoughnutChart({filteredData}){
  let counts = {}
  const shoppingStores = [...filteredData].map(survey => survey.shoppingPreference)
  for(const array of shoppingStores ){
    for(const j of array){
      counts[j] = (counts[j] || 0 ) + 1
    }
  }
  console.log("shop", shoppingStores)
  console.log("countsss", counts)
  let config = {
    labels: [
      'Online Reselling Market (ex. Stockx, Goat, Ebay & Grailed)',
      'Directly from the retail brand store (ex. Nike, Addidas, Puma, Reebok etc.)',
      'Footwear Retailer (ex. Footlocker, Sportchek & Champs)',
      'Online Classifieds (ex. Kijiji, Facebook Marketplace, Craiglist)',
      'Sneaker Boutique/Consignment Stores (ex. Capsule, NRML, Livestock)',
      'Sneaker events(ex. sneaker conventions, swaps, tradeshows etc)'
    ],
    datasets:[
      {
        label: '# of Particpants',
        data: [
          counts['online-resell-market'] || 0,
          counts['direct-brand'] || 0,
          counts['footwear-retailer'] || 0,
          counts['online-classifieds'] || 0,
          counts['boutique-consignment'] || 0,
          counts['sneaker-event'] || 0,

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
  
      }
    ]
   }
  return (
    <div>
      <Doughnut data={config}/>
    </div>
  )
}
export default ShoppingDoughnutChart;
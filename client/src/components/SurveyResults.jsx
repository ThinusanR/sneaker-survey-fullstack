

import { useState, useEffect } from "react";
import {cleanData} from "../helper" // remove
import GenderPieChart from "./charts/GenderPieChart";
import SizeBarChart from "./charts/SizeBarChart";
import SpendingBarChart from "./charts/SpendingBarChart";
import ShoePairsChart from "./charts/ShoePairsBarChart";
import BuyingDoughnutChart from "./charts/BuyingDoughnutChart";
import AgePolarAreaChart from "./charts/AgePolarAreaChart";
import BrandsRadarChart from "./charts/BrandsRadarChart";
import ShoppingDoughnutChart from "./charts/ShoppingDoughnutChart";

function SurveyResults({data}){
  
  const [filteredData,setFilData] = useState('');
 useEffect(()=> { 
  async function cleanData(data) {
    // receive data
    console.log("data cleanData",data)
    // remove all null values 
    let cleanedData = data.map(survey => (
      // console.log(survey.maxPay)
      {
      age:survey.age,
      buyingPreference:survey.buyingPreference,
      createdAt:survey.createdAt,
      favouriteBrands:survey.favouriteBrands,
      favouriteSneaker: survey.favouriteSneaker,
      gender:survey.gender,
      maxPay:survey.maxPay || "oo", // add defaults
      numOfShoes:survey.numOfShoes,
      shoeSize:survey.shoeSize,
      shoppingPreference:survey.shoppingPreference,
    }
    ));
    console.log("new",cleanedData)
    setFilData(cleanedData)
    
    };
    if(!filteredData){
      cleanData(data);
    }

 
},[]);

  return (
    <div className="survey-container">
      <p className="description">Here are the survey poll results</p>
     
      <GenderPieChart filteredData={filteredData}/>
      <SizeBarChart filteredData={filteredData}/>
      <SpendingBarChart filteredData={filteredData}/>
      <ShoePairsChart filteredData={filteredData} />
      <BuyingDoughnutChart filteredData={filteredData} />
      <AgePolarAreaChart filteredData={filteredData} />
      <BrandsRadarChart filteredData={filteredData} />
      <ShoppingDoughnutChart filteredData={filteredData} />
    </div>
  )

};

export default SurveyResults;
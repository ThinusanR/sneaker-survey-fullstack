/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

import {
  GenderPieChart,
  SizeBarChart,
  SpendingBarChart,
  ShoePairsBarChart,
  BuyingDoughnutChart,
  AgePolarAreaChart,
  BrandsRadarChart,
  ShoppingDoughnutChart,
} from './charts';

function SurveyResults({ data }) {
  const [filteredData, setFilData] = useState('');
  useEffect(() => {
    async function cleanData(data) {
      // receive data
      console.log('data cleanData', data);
      // remove all null values
      const cleanedData = data.map((survey) =>
        // console.log(survey.maxPay)
        ({
          age: survey.age,
          buyingPreference: survey.buyingPreference,
          createdAt: survey.createdAt,
          favouriteBrands: survey.favouriteBrands,
          favouriteSneaker: survey.favouriteSneaker,
          gender: survey.gender,
          maxPay: survey.maxPay || 'oo', // TODO: add defaults
          numOfShoes: survey.numOfShoes,
          shoeSize: survey.shoeSize,
          shoppingPreference: survey.shoppingPreference,
        }));
      console.log('new', cleanedData);
      setFilData(cleanedData);
    }
    if (!filteredData) {
      cleanData(data);
    }
  }, []);

  return (
    <div className="survey-container">
      <p className="description">Here are the survey poll results</p>

      <GenderPieChart filteredData={filteredData} />
      <SizeBarChart filteredData={filteredData} />
      <SpendingBarChart filteredData={filteredData} />
      <ShoePairsBarChart filteredData={filteredData} />
      <BuyingDoughnutChart filteredData={filteredData} />
      <AgePolarAreaChart filteredData={filteredData} />
      <BrandsRadarChart filteredData={filteredData} />
      <ShoppingDoughnutChart filteredData={filteredData} />
    </div>
  );
}

export default SurveyResults;

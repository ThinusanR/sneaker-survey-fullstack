import { cleanData } from '../helper';
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

// eslint-disable-next-line react/prop-types
function SurveyResults({ data }) {
  data = cleanData(data);
  return (
    <div className="survey-container">
      <p className="description">Here are the survey poll results</p>

      <GenderPieChart filteredData={data} />
      <SizeBarChart filteredData={data} />
      <SpendingBarChart filteredData={data} />
      <ShoePairsBarChart filteredData={data} />
      <BuyingDoughnutChart filteredData={data} />
      <AgePolarAreaChart filteredData={data} />
      <BrandsRadarChart filteredData={data} />
      <ShoppingDoughnutChart filteredData={data} />
    </div>
  );
}

export default SurveyResults;

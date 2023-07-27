/* eslint-disable no-return-assign */
const cleanData = (surveyData) => {
  // remove all null values
  const numShoesLabels = {
    numShoeRange1: 'Under 5 pairs',
    numShoeRange2: 'Between 5 - 15 pairs',
    numShoeRange3: 'Between 15 - 25 pairs',
    numShoeRange4: 'Between 25 - 35 pairs',
    numShoeRange5: 'Between 35 - 50 pairs',
    numShoeRange6: 'over 50+ pairs',
  };
  const payLabel = {
    payRange1: 'Under $100 CAD',
    payRange2: 'Between $100 - $200 CAD',
    payRange3: 'Between $200 - $400 CAD',
    payRange4: 'Between $400 - $600 CAD',
    payRange5: 'Between $600 - $800 CAD',
    payRange6: 'Over $800+ CAD',
  };
  const filteredData = surveyData.map((survey) => ({
    age: survey.age,
    buyingPreference: survey.buyingPreference,
    createdAt: survey.createdAt,
    favouriteBrands: survey.favouriteBrands,
    favouriteSneaker: survey.favouriteSneaker,
    gender: survey.gender,
    maxPay: survey.maxPay ? payLabel[survey.maxPay] : null,
    numOfShoes: survey.numOfShoes
      ? numShoesLabels[survey.numOfShoes]
      : (survey.numOfShoes = 'Under 5 pairs'),
    shoeSize: survey.shoeSize,
    shoppingPreference: survey.shoppingPreference,
  }));

  return filteredData;
};

// eslint-disable-next-line import/prefer-default-export
export { cleanData };

const cleanData = async(surveyData) => {
// receive data
// remove all null values 
let filteredData = surveyData.map(survey => ({
  age:survey.age,
  buyingPreference:survey.buyingPreference,
  createdAt:survey.createdAt,
  favouriteBrands:survey.favouriteBrands,
  favouriteSneaker: survey.favouriteSneaker,
  gender:survey.gender,
  maxPay:survey.maxPay,
  numOfShoes:survey.numOfShoes,
  shoeSize:survey.shoeSize,
  shoppingPreference:survey.shoppingPreference,
}));
console.log("new",filteredData)
return filteredData

};

export {
  cleanData,
}
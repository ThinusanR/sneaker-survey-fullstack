import { useState, useEffect } from "react";
import SurveyForm from "./components/SurveyForm";
import SurveyResults from "./components/SurveyResults";
import {Chart, registerables} from "chart.js"

import "./App.css";

function App() {
  const [didSubmit, setSubmit] = useState(true); //false
  const [viewResults,setViewResults] = useState(false);
  const [surveyData, setData] = useState('');
  Chart.register(...registerables);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
      
    };
    
    fetch('http://localhost:8080/api/v1/surveys/data', requestOptions)
      .then((response) => {
        if (response.ok && response.status === 200) {
          // setData(response);
          return response.json()
        }
       
      })
      .then((result)=> {
        console.log("1--",result)
        if(!surveyData) {
          setData(result)
        }
        
      })
      .catch(console.error);

    
  },[])


  return (
    <div className="App">
     
      <header>
        <h1>Sneaker Survey</h1>
        {didSubmit ? <p /> : <p>Please fill out the survey form</p>}
      </header>
      <main className="container">
        {didSubmit === false && <SurveyForm setSubmit={setSubmit}/>}
        {didSubmit && (
        <div className="survey-container">
            <p className="description">Thank you for completing the survey.</p>
            <div className="row">
              <div className="column">
                <button 
                className="input-btn" 
                type="button"
                onClick={() =>{setSubmit(false)}}
                >
                  Return to survey
                </button>
              </div>
              <div className="column">
                <button 
                className="input-btn"
                type="button"
                onClick={() =>{
                  setViewResults(true)
                  
                  }}>
                  View survey results
                </button>
              </div>
            </div>
          </div>)}
          {viewResults && <SurveyResults data={surveyData}/> }
        {/* {didSubmit ? (
          <div className="survey-form">
            <p id="description">Thank you for completing the survey.</p>
            <div className="row">
              <div className="column">
                <button 
                className="input-btn" 
                type="button"
                onClick={() =>{setSubmit(false)}}
                >
                  Return to survey
                </button>
              </div>
              <div className="column">
                <button 
                className="input-btn" 
                type="button">
                  View survey results
                </button>
              </div>
            </div>
          </div>
        ) : (
          <SurveyForm setSubmit={setSubmit} />
        )} */}
        {/* <SurveyForm setSubmit={setSubmit} /> */}
      </main>
    </div>
  );
}

export default App;

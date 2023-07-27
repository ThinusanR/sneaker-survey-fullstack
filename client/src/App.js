import { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import SurveyForm from './components/SurveyForm';
import SurveyResults from './components/SurveyResults';

import './App.css';

function App() {
  const [didSubmit, setSubmit] = useState(false); // false
  const [viewResults, setViewResults] = useState(false);
  const [surveyData, setData] = useState([]);

  Chart.register(...registerables);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-type': 'application/json' },
        };
        const response = await fetch('http://localhost:8080/api/v1/surveys/data', requestOptions);
        if (!response.ok || response.status !== 200) {
          throw new Error('Unable to fetch survey data');
        }
        const result = await response.json();

        setData(result);
      } catch (err) {
        console.error('API Fetch Error:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Sneaker Survey</h1>
        {didSubmit ? <p /> : <p>Please fill out the survey form</p>}
      </header>
      <main className="container">
        {didSubmit === false && <SurveyForm setSubmit={setSubmit} />}
        {didSubmit && (
          <div className="survey-container">
            <p className="description">Thank you for completing the survey.</p>
            <div className="row">
              <div className="column">
                <button
                  className="input-btn"
                  type="button"
                  onClick={() => {
                    setSubmit(false);
                  }}
                >
                  Return to survey
                </button>
              </div>
              <div className="column">
                <button
                  className="input-btn"
                  type="button"
                  onClick={() => {
                    setViewResults(true);
                  }}
                >
                  View survey results
                </button>
              </div>
            </div>
          </div>
        )}
        {viewResults && <SurveyResults data={surveyData} />}
      </main>
    </div>
  );
}

export default App;

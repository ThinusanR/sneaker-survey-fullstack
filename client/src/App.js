import { useState } from 'react';
import SurveyForm from './components/SurveyForm';

import './App.css';

function App() {
  const [didSubmit, setSubmit] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>Sneaker Survey</h1>
        {didSubmit
          ? <p />
          : <p>Please fill out the survey form</p>}
      </header>
      <main className="container">
        {didSubmit
          ? <div className="survey-form"><p id="description">Thank you for completing the survey.</p></div>
          : <SurveyForm setSubmit={setSubmit} />}
        {/* <SurveyForm setSubmit={setSubmit} /> */}
      </main>
    </div>
  );
}

export default App;

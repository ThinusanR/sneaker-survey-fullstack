// import logo from './logo.svg';
import SurveyForm from './components/SurveyForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sneaker Survey</h1>
        <p id="description">Thank you for taking the time to complete this survey.</p>
      </header>
      <main className="container">
        <SurveyForm />
      </main>
    </div>
  );
}

export default App;

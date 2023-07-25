import React from 'react';
import './App.css';
import TopMenu from './components/molecules/TopMenu';
import CalculatorForm from './components/organisms/CalculatorForm/CalculatorForm';

function App() {
  return (
    <>
      <TopMenu companyName='Health Overview'/>
      <div className="app-container">
        <CalculatorForm/>
      </div>
    </>
  );
}

export default App;

import React from 'react'
import TopMenu from './components/molecules/TopMenu';
import CalculatorForm from './components/organisms/CalculatorForm/CalculatorForm';
import './App.css';

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

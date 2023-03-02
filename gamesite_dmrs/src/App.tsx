import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RockPaperScissors from './components/RockPaperScissors/RockPaperScissors';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RockPaperScissors/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

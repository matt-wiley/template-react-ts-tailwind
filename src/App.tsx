import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

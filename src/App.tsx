import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Dev from './pages/Dev';
import Buttons from './pages/Components/Buttons';
import Components from './pages/Components';
import LayoutOne from './layouts/LayoutOne';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LayoutOne /> }>
          <Route path="dev" element={<Dev /> } />
          <Route path="components" element={<Components /> } />
          <Route path="components/buttons" element={<Buttons /> } />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PayslipList from './components/screens/PayslipList';
import PayslipDetails from './components/screens/PayslipDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PayslipList />} />
        <Route path="/payslip/:id" element={<PayslipDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

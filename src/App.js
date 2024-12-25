import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';  // Correct path to SignIn.js
import Newpage from './Components/Newpage/Newpage';  // Correct path to Newpage.js

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/github-sign-in" element={<Newpage />} />
      </Routes>
    </Router>
  );
};

export default App;

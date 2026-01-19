import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { UpsellPage } from './components/UpsellPage';
import BackRedirectFC26 from './components/BackRedirectFC26';
import BackRedirectFC25 from './components/BackRedirectFC25';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/upsell" element={<UpsellPage />} />
      <Route path="/back-fc26" element={<BackRedirectFC26 />} />
      <Route path="/back-fc25" element={<BackRedirectFC25 />} />
    </Routes>
  );
}

export default App;
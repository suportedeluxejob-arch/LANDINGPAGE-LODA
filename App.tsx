import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { UpsellPage } from './components/UpsellPage';
import { DownsellPage } from './components/DownsellPage';
import BackRedirectFC26 from './components/BackRedirectFC26';
import BackRedirectFC25 from './components/BackRedirectFC25';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/copa2026" element={<UpsellPage />} />
      <Route path="/ultimachance" element={<DownsellPage />} />
      <Route path="/upsell" element={<UpsellPage />} /> {/* Mantido por compatibilidade */}
      <Route path="/back-fc26" element={<BackRedirectFC26 />} />
      <Route path="/back26" element={<BackRedirectFC26 />} />
      <Route path="/back-fc25" element={<BackRedirectFC25 />} />
      <Route path="/back25" element={<BackRedirectFC25 />} />
    </Routes>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TechPage from './Components/TechPage';
import MainPage from './Components/MainPage/MainPage';
import NewPage from './Components/NewPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/new" element={<NewPage />} />
      </Routes>
    </BrowserRouter>

  );
}

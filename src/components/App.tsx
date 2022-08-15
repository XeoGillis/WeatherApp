import React from 'react';
import { Route, Routes } from 'react-router';
import WeatherProvider from '../contexts/WeatherProvider';
import Forecast from '../page/forecast/Forecast';
import Main from '../page/main/Main';

function App() {
  return (
    <WeatherProvider>
      <Routes>
        <Route index element={
          <Main />
        } />
        <Route path='/forecast' element={
          <Forecast />
        } />
      </Routes>
    </WeatherProvider>
  );
}

export default App;

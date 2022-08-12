import React from 'react';
import { Route, Routes } from 'react-router';
import WeatherProvider from '../contexts/WeatherProvider';
import Main from '../page/main/Main';

function App() {
  return (
    <WeatherProvider>
      <Routes>
        <Route index element={
          <Main />
        } />
      </Routes>
    </WeatherProvider>
  );
}

export default App;

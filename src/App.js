import React from 'react';

import MainLayout from './components/layout/MainLayout/MainLayout';
import WeatherContainer from './components/layout/WeatherContainer/WeatherContainer';
import WeeklyForecast from './components/features/WeeklyForecast/WeeklyForecast';
import WeatherSearch from './components/features/WeatherSearch/WeatherSearch';

function App() {
  return (
    <MainLayout>
      <WeatherContainer>
        <WeatherSearch defaultCity='Chorzów' />
        <WeeklyForecast />
      </WeatherContainer>
    </MainLayout>
  );
}

export default App;

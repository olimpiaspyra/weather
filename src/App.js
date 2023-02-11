import React from 'react';

import MainLayout from './components/layout/MainLayout/MainLayout';
import WeatherContainer from './components/layout/WeatherContainer/WeatherContainer';
import DailyForecast from './components/features/DailyForecast/DailyForecast';
import WeeklyForecast from './components/features/WeeklyForecast/WeeklyForecast';

function App() {
  return (
    <MainLayout>
      <WeatherContainer>
        <DailyForecast defaultCity='Chorzów' />
        <WeeklyForecast />
      </WeatherContainer>
    </MainLayout>
  );
}

export default App;

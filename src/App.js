import React from 'react';

import MainLayout from './components/layout/MainLayout/MainLayout';
import WeatherContainer from './components/layout/WeatherContainer/WeatherContainer';
import WeatherSearch from './components/features/WeatherSearch/WeatherSearch';
import DailyForecast from './components/features/DailyForecast/DailyForecast';
import WeeklyForecast from './components/features/WeeklyForecast/WeeklyForecast';

function App() {
  return (
    <MainLayout>
      <WeatherContainer>
        <WeatherSearch />
        <DailyForecast />
        <WeeklyForecast />
      </WeatherContainer>
    </MainLayout>
  );
}

export default App;

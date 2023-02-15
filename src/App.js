import React from 'react';

import MainLayout from './components/layout/MainLayout/MainLayout';
import WeatherContainer from './components/layout/WeatherContainer/WeatherContainer';
import WeatherSearch from './components/features/WeatherSearch/WeatherSearch';

function App() {
  return (
    <MainLayout>
      <WeatherContainer>
        <WeatherSearch defaultCity='Chorzów' />
      </WeatherContainer>
    </MainLayout>
  );
}

export default App;

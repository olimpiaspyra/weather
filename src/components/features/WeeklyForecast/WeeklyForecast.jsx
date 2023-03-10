import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import ForecastByDay from '../ForecastByDay/ForecastByDay';

import './WeeklyForecast.scss';

const WeeklyForecast = ({coordinates}) => {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  const handleResponse = res => {
    setForecast(res.data.daily);
    setLoaded(true);
    console.log(res);
  };

  useEffect(() => {
    setLoaded(false);
    return () => {
      setForecast(null);
    };
  }, [coordinates]);

  if (loaded) {
    return (
      <div className='weather__weekly'>
        <div className='weather__weekly row justify-content-md-center'>
          {forecast.map((forecast, index) => {
            if (index > 0 && index < 7) {
              return <ForecastByDay key={index} data={forecast} />;
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = 'a99376dd5e5450ec95352ece5cc2404d';
    let lat = coordinates.lat;
    let lon = coordinates.lon;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  }
};

WeeklyForecast.propTypes = {
  coordinates: PropTypes.object,
};

export default WeeklyForecast;

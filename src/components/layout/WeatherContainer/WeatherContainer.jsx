import React from 'react';
import PropTypes from 'prop-types';

import './WeatherContainer.scss';

const WeatherContainer = ({children}) => {
  return <div className='weather__container'>{children}</div>;
};

WeatherContainer.propTypes = {
  children: PropTypes.node,
};

export default WeatherContainer;

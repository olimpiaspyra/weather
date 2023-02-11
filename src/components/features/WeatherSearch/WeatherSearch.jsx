import React from 'react';
import PropTypes from 'prop-types';

import './WeatherSearch.scss';

const WeatherSearch = ({handleSubmit, handleCityChange, city}) => {
  return (
    <div className='weather__search row justify-content-center align-items-center'>
      <div className='weather__search__bar col-8'>
        <form action='' className='weather__search__form' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter a city...'
            className='weather__search__input'
            value={city}
            onChange={handleCityChange}
          />
          <button type='submit' className='weather__search__button buttons'></button>
        </form>
      </div>
      <div className='weather__location col-2 d-flex justify-content-center'>
        <button className='weather__location__button buttons'></button>
      </div>
    </div>
  );
};

WeatherSearch.propTypes = {
  handleSubmit: PropTypes.func,
  handleCityChange: PropTypes.func,
  city: PropTypes.string,
};

export default WeatherSearch;

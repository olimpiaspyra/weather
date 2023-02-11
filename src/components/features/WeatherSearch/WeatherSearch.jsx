import React from 'react';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearchengin} from '@fortawesome/free-brands-svg-icons';

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
          <button type='submit' className='weather__search__button buttons'>
            <FontAwesomeIcon icon={faSearchengin} className='weather__search__icon' />
          </button>
        </form>
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

import React from 'react';

import './WeatherSearch.scss';

const WeatherSearch = () => {
  return (
    <div className='weather__search row justify-content-center align-items-center'>
      <div className='weather__search__bar col-8'>
        <form action='' className='weather__search__form '>
          <input
            type='text'
            placeholder='Enter a city...'
            className='weather__search__input'
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

export default WeatherSearch;

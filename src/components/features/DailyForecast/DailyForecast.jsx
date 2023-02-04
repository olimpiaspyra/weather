import React from 'react';

import './DailyForecast.scss';

const DailyForecast = () => {
  return (
    <div className='weather__daily'>
      <h1 className='weather__daily__city'>Warsaw</h1>
      <div className='weather__daily__content row justify-content-md-center'>
        <div className='weather__daily__content__left col-6'>
          <h2 className='weather__daily__content__left__date'>Monday 17:56</h2>
          <h3 className='weather__daily__content__left__temperature'>14°</h3>
        </div>
        <div className='weather__daily__content__right col-6'>
          <img src='' alt='image' />
        </div>
        <div className='weather__daily__content__main row mt-4 mx-0'>
          <ul className='weather__daily__content__main__list col-6'>
            <li className='weather__daily__content__main__list__item conditions'>
              <div className='weather__daily__content__main__list__item__icons col-3'>
                <img src='' alt='weather icon' className='icons' />
              </div>
              <div className='weather__daily__content__main__list__item__text col-9'>
                Conditions
              </div>
            </li>
            <li className='weather__daily__content__main__list__item__icons__humidity'>
              <div className='weather__daily__content__main__list__item__icons col-3'>
                <img src='' alt='humidity icon' className='icons' />
              </div>
              <div className='weather__daily__content__main__list__item__text col-9'>
                %
              </div>
            </li>
            <li className='weather__daily__content__main__list__item__icons__wind'>
              <div className='weather__daily__content__main__list__item__icons col-3'>
                <img src='' alt='wind icon' className='icons' />
              </div>
              <div className='weather__daily__content__main__list__item__text col-9'>
                km/h
              </div>
            </li>
          </ul>
          <ul className='weather__daily__content__main__list col-4'>
            <li className='weather__daily__content__main__list__item row'>
              <strong className='weather__daily__content__main__list__item__temp col-4'>
                Max
              </strong>
              <div className='weather__daily__content__main__list__item_temp col-8'>
                °
              </div>
            </li>
            <li className='weather__daily__content__main__list__item row'>
              <strong className='weather__daily__content__main__list__item__temp col-4'>
                Min
              </strong>
              <div className='weather__daily__content__main__list__item__temp col-8'>
                °
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;

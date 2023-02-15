import React from 'react';
import PropTypes from 'prop-types';

const FormatDate = ({date}) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  // console.log(date);

  return <p>{`${day} ${hours}:${minutes}`}</p>;
};

FormatDate.propTypes = {
  date: PropTypes.object,
};

export default FormatDate;

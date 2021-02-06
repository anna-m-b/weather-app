import React from 'react';
import DailyForecast from '../components/DailyForecast';

import '../../styles/WeeklyForecast.css';

const WeeklyForecast = () => {
  return (
    <div className="WeeklyForecast">
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
    </div>
  );
};

export default WeeklyForecast;

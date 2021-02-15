/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import './styles/App.css';
import React, { useState, useEffect } from 'react';
import WeeklyForecast from './containers/WeeklyForecast';
import Location from './components/Location';
import DetailedForecast from './components/DetailedForecast';
import getForecast from './requests/getForecast';
import SearchForm from './components/SearchForm';
import ErrorMessage from './components/ErrorMessage';
import Title from './components/Title';

function App() {
  const [location, setLocation] = useState({});
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [city, setCity] = useState('');
  const [errorCode, setErrorCode] = useState();

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  useEffect(() => {
    getForecast(setSelectedDate, setLocation, setForecasts, setErrorCode, city);
  }, [city]);

  useEffect(() => {
    if (errorCode) {
      setLocation({});
      setSelectedDate();
    }
  }, [errorCode]);

  const handleMoreDetailsClick = (date) => {
    setSelectedDate(date);
  };

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmit = () => {
    setErrorCode();
    setCity(searchInput);
    setSearchInput('');
  };

  if (!forecasts.length) {
    return <h1 className="Loading">Loading...</h1>;
  }

  return (
    <div className="App">
      <Title />
      <SearchForm
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        searchInput={searchInput}
      />
      <Location location={location} />

      {errorCode && <ErrorMessage errorCode={errorCode} city={city} />}

      {selectedForecast && <DetailedForecast forecastItem={selectedForecast} />}
      <WeeklyForecast
        forecasts={forecasts}
        handleMoreDetailsClick={handleMoreDetailsClick}
        errorCode={errorCode}
      />
    </div>
  );
}

export default App;

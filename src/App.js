import './styles/App.css';
import React, { useState, useEffect } from 'react';
import WeeklyForecast from './containers/WeeklyForecast';
import Location from './components/Location';
import DetailedForecast from './components/DetailedForecast';
import getForecastData from './requests/getForecast';
import SearchForm from './components/SearchForm';
import ErrorMessage from './components/ErrorMessage';
import Title from './components/Title';

function App() {
  const [location, setLocation] = useState({});
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [city, setCity] = useState('');
  const [errorCode, setErrorCode] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  useEffect(() => {
    const getForecast = async () => {
      try {
        const result = await getForecastData(city);
        setSelectedDate(result.data.forecasts[0].date);
        setLocation(result.data.location);
        setForecasts(result.data.forecasts);
        setIsLoading(false);
      } catch (error) {
        if (error.response) {
          setErrorCode(error.response.status);
          setIsLoading(false);
        } else {
          setErrorCode(400);
          setIsLoading(false);
        }
      }
    };
    getForecast();
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

  const onSubmit = (e) => {
    e.preventDefault();
    setErrorCode(0);
    setCity(searchInput);
    setSearchInput('');
  };

  if (isLoading) {
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

      {errorCode > 0 && <ErrorMessage errorCode={errorCode} city={city} />}

      <DetailedForecast forecastItem={selectedForecast} />

      <WeeklyForecast
        forecasts={forecasts}
        handleMoreDetailsClick={handleMoreDetailsClick}
        errorCode={errorCode}
      />
    </div>
  );
}

export default App;

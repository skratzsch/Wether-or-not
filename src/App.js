import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import styled from 'styled-components';
import backgroundImage from './components/weather-background.png';

const StyledApp = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;



function App() {
  const [activities, setActivities] = useState([]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://example-apis.vercel.app/api/weather');
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Wetterdaten:', error);
      }
    };

    const intervalId = setInterval(fetchWeather, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const storedActivities = localStorage.getItem('activities');
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  const handleAddActivity = newActivity => {
    setActivities(prevActivities => [...prevActivities, newActivity]);
  };

  const filteredActivities = activities.filter(activity => activity.isForGoodWeather === weather.isGoodWeather);

  const handleDeleteActivity = id => {
    setActivities(prevActivities => prevActivities.filter(activity => activity.id !== id));
  };

  return (
    <StyledApp>
      <header>
        <h1>{weather.condition} {weather.temperature}°C</h1>
      </header>
      <List activities={filteredActivities} isGoodWeather={weather.isGoodWeather} onDeleteActivity={handleDeleteActivity}/>
      <Form onAddActivity={handleAddActivity} />
    </StyledApp>
  );
}

export default App;
      
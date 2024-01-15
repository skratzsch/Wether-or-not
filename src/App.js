import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

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
    <div className="App">
      <header>
        <h1>{weather.condition} {weather.temperature}°C</h1>
      </header>
      <List activities={filteredActivities} isGoodWeather={weather.isGoodWeather}  onDeleteActivity={handleDeleteActivity}/>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;

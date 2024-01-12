import React from 'react';

function List({ activities }) {
  if (!activities || activities.length === 0) {
    return <p>Keine Aktivitäten vorhanden.</p>;
  }

  return (
    <ul>
      {activities.map(activity => (
        <li key={activity.id}>
          {activity.name} - {activity.isForGoodWeather ? 'Gutes Wetter' : 'Schlechtes Wetter'}
        </li>
      ))}
    </ul>
  );
}

export default List;

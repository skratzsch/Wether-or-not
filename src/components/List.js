import React from 'react';

function List({ activities, isGoodWeather }) {
  return (
    <div>
      <h2>{isGoodWeather ? 'Das Wetter ist super, geh raus und tob dich aus!' : 'Aktivitäten für schlechtes Wetter'}</h2>
      <ul>
        {activities.length > 0 ? (
          activities.map(activity => (
            <li key={activity.id}>
              {activity.name}
            </li>
          ))
        ) : (
          <p>Keine Aktivitäten vorhanden.</p>
        )}
      </ul>
    </div>
  );
}

export default List;

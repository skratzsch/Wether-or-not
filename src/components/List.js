import React from 'react';
import styled from 'styled-components';

const StyledList = styled.div`
  margin-bottom: 10px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.3);
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 5px;
  }

  li button {
    margin-left: 10px;
  }
`;

function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <StyledList>
      <h2>{isGoodWeather ? 'Das Wetter ist super, geh raus und tob dich aus!' : 'Aktivitäten für schlechtes Wetter'}</h2>
      <ul>
        {activities.length > 0 ? (
          activities.map(activity => (
            <li key={activity.id}>
              {activity.name}
              <button onClick={() => onDeleteActivity(activity.id)}>x</button>
            </li>
          ))
        ) : (
          <p>Keine Aktivitäten vorhanden.</p>
        )}
      </ul>
    </StyledList>
  );
}

export default List;
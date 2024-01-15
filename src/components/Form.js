import React, { useState, useRef } from "react";
import { uid } from "uid";
import styled from 'styled-components';


const StyledForm = styled.form`
  display: inline-block;
  text-align: left;
  margin-top: 20px;

  div {
    margin-bottom: 10px;
  }

  label {
    margin-right: 10px;
  }

  button {
    margin-top: 10px;
  }
`;

export default function Form({ onAddActivity }) {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const activityData = {
      id: uid(),
      name,
      isForGoodWeather,
    };
    onAddActivity(activityData);
    setName("");
    setIsForGoodWeather(false);
    document.getElementById("activity-name").focus();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Aktivitätsplaner</h2>
      <div>
        <label htmlFor="activity-name">Aktivitätsname:</label>
        <input
          id="activity-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label>
          Gutes Wetter?
          <input
            type="checkbox"
            checked={isForGoodWeather}
            onChange={(event) => setIsForGoodWeather(event.target.checked)}
          />
        </label>
      </div>
      <button type="submit">Absenden</button>
    </StyledForm>
  );
}

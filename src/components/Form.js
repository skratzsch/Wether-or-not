import React, { useState, useRef } from "react";

function uid() {
  return Date.now().toString(36) + Math.random().toString(36);
}

export default function Form({ onAddActivity }) {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);
  const nameInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const activityData = {
      id: uid(),
      name,
      isForGoodWeather,
    };
    onAddActivity(activityData);
    setName("");
    setIsForGoodWeather(false);
    nameInputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Aktivitätsplaner</h2>
      <div>
        <label>
          Aktivitätsname:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameInputRef}
          />
        </label>
      </div>
      <div>
        <label>
          Gutes Wetter?
          <input
            type="checkbox"
            checked={isForGoodWeather}
            onChange={(e) => setIsForGoodWeather(e.target.checked)}
          />
        </label>
      </div>
      <button type="submit">Absenden</button>
    </form>
  );
}

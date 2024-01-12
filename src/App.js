import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
    console.log("Neue Aktivität hinzugefügt:", newActivity);
  };

  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
      {}
    </div>
  );
}

export default App;

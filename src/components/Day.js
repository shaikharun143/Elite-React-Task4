import React, { useState } from "react";
import "./Day.css";

const Day = ({ day, events, onAddEvent }) => {
  const [showModal, setShowModal] = useState(false);
  const [eventText, setEventText] = useState("");

  const handleAddEvent = () => {
    onAddEvent(day, eventText);
    setEventText("");
    setShowModal(false);
  };

  return (
    <div className="day">
      <div className="day-header">
        <span>{day}</span>
        <button onClick={() => setShowModal(true)}>+</button>
      </div>
      <div className="day-events">
        {events.map((event, index) => (
          <p key={index} className="event">{event}</p>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <textarea
            placeholder="Add an event"
            value={eventText}
            onChange={(e) => setEventText(e.target.value)}
          />
          <button onClick={handleAddEvent}>Add</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Day;

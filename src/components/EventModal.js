import React from "react";
import "./EventModal.css";

const EventModal = ({ isOpen, onClose, onSave, eventText, setEventText }) => {
  if (!isOpen) return null;

  return (
    <div className="event-modal">
      <div className="event-modal-content">
        <textarea
          placeholder="Add an event"
          value={eventText}
          onChange={(e) => setEventText(e.target.value)}
          className="event-modal-textarea"
        />
        <div className="event-modal-buttons">
          <button className="save-btn" onClick={onSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;

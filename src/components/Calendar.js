import React, { useState } from "react";
import Day from "./Day";
import Header from "./Header";
import EventModal from "./EventModal";
import "./Calendar.css";

const Calendar = () => {
  const [events, setEvents] = useState({});
  const [currentDay, setCurrentDay] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [eventText, setEventText] = useState("");

  const daysInMonth = new Date(2024, new Date().getMonth() + 1, 0).getDate();

  const handleOpenModal = (day) => {
    setCurrentDay(day);
    setModalOpen(true);
  };

  const handleSaveEvent = () => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [currentDay]: [...(prevEvents[currentDay] || []), eventText],
    }));
    setModalOpen(false);
    setEventText("");
  };

  return (
    <div className="calendar">
      <Header />
      <div className="calendar-grid">
        {Array.from({ length: daysInMonth }).map((_, index) => (
          <Day
            key={index}
            day={index + 1}
            events={events[index + 1] || []}
            onAddEvent={handleOpenModal}
          />
        ))}
      </div>
      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveEvent}
        eventText={eventText}
        setEventText={setEventText}
      />
    </div>
  );
};

export default Calendar;

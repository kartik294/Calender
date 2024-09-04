import React, { useState } from "react";

export default function AddEventForm({ addEvent }) {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(newEvent);
    setNewEvent({
      title: "",
      start: "",
      end: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-event-form">
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={newEvent.title}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="start"
        placeholder="Start Time"
        value={newEvent.start}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="end"
        placeholder="End Time"
        value={newEvent.end}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Event</button>
    </form>
  );
}

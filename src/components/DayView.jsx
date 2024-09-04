import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DayTimeSlots from "./DayTimeSlots";
import Events from "./Events";
import AddEventForm from "./AddEventForm";
import eventsData from "../data/events.json";

export default function DayView() {
  const [events, setEvents] = useState(eventsData);

  const addEvent = (event) => {
    setEvents([...events, { id: Date.now(), ...event }]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const updateEvent = (id, updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, ...updatedEvent } : event
      )
    );
  };

  const onDragEnd = (result) => {
    if (!result.destination) return; // dropped outside the list
    const updatedEvents = Array.from(events);
    const [movedEvent] = updatedEvents.splice(result.source.index, 1);
    updatedEvents.splice(result.destination.index, 0, movedEvent);
    setEvents(updatedEvents);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="vertical">
        {(provided) => (
          <div
            className="calendar"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className="left">
              <div className="line"></div>
            </div>
            <Events
              events={events}
              deleteEvent={deleteEvent}
              updateEvent={updateEvent}
            />
            <DayTimeSlots />
            <AddEventForm addEvent={addEvent} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

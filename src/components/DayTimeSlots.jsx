import React from "react";
import { Droppable } from "react-beautiful-dnd";

export default function DayTimeSlots() {
  const slots = Array.from({ length: 24 }, (_, index) => index);

  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <div
          className="day-time-slots"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {slots.map((slot) => (
            <div key={slot} className="slot">
              {slot < 10 ? `0${slot}:00` : `${slot}:00`}
            </div>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

import React, { useState } from 'react';
import "./VisitorCounter.style.css"

const VisitorCounter = () => {
  const [rooms, setRooms] = useState([{ adults: 2, children: 0 }]);
  const [isExpanded, setIsExpanded] = useState(false); // State to track if the counter container is expanded

  // Function to update the number of adults in a room
  const handleAdultChange = (roomIndex, amount) => {
    const newRooms = [...rooms];
    const newAdultCount = newRooms[roomIndex].adults + amount;
    if (newAdultCount >= 1) {
      newRooms[roomIndex].adults = newAdultCount;
      setRooms(newRooms);
    }
  };

  // Function to update the number of children in a room
  const handleChildChange = (roomIndex, amount) => {
    const newRooms = [...rooms];
    const newChildCount = newRooms[roomIndex].children + amount;
    if (newChildCount >= 0) {
      newRooms[roomIndex].children = newChildCount;
      setRooms(newRooms);
    }
  };

  // Function to add a new room
  const addRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0 }]);
  };

  // Function to remove a room
  const removeRoom = (roomIndex) => {
    const newRooms = rooms.filter((_, index) => index !== roomIndex);
    setRooms(newRooms);
  };

  // Calculate total travelers (adults + children) and rooms
  const totalTravelers = rooms.reduce(
    (total, room) => total + room.adults + room.children,
    0
  );

  const totalRooms = rooms.length;

  return (
    <div className="visitor-counter">
      {/* Input box to display total travelers and rooms, clickable to expand form */}
      <div className="input-box" onClick={() => setIsExpanded(true)}>
        <label>Travellers</label>
        <input
          type="text"
          readOnly
          value={`${totalTravelers} travellers, ${totalRooms} room${
            totalRooms > 1 ? 's' : ''
          }`}
        />
      </div>

      {/* Counter container that shows room details */}
      {isExpanded && (
        <div className="counter-container">
          {/* Popup card for each room */}
          {rooms.map((room, roomIndex) => (
            <div key={roomIndex} className="room">
              <h4>Room {roomIndex + 1}</h4>

              {/* Adult Counter */}
              <div className="counter">
                <label>Adults</label>
                <div className='counterBtn-wrap'>
                  <button className="counter-btn" onClick={() => handleAdultChange(roomIndex, -1)}>-</button>
                  <span>{room.adults}</span>
                  <button className="counter-btn" onClick={() => handleAdultChange(roomIndex, 1)}>+</button>
                </div>
              </div>

              {/* Children Counter */}
              <div className="counter">
                      <label>Children (Ages 0 to 17)</label>
                      <div className='counterBtn-wrap'>
                          <button className="counter-btn" onClick={() => handleChildChange(roomIndex, -1)}>-</button>
                <span>{room.children}</span>
                <button className="counter-btn" onClick={() => handleChildChange(roomIndex, 1)}>+</button>

                      </div>
                
              </div>

              {/* Remove room button for each room if more than 1 */}
              {totalRooms > 1 && (
                <button onClick={() => removeRoom(roomIndex)} className="remove-room-button">
                  Remove room
                </button>
              )}
            </div>
          ))}

          <div className='button-wrap'>
            <button onClick={addRoom} className="add-room-button">
              Add another room
            </button>

            {/* Done button to collapse the form */}
            <button className="done-button" onClick={() => setIsExpanded(false)}>
              Done
            </button>    
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitorCounter;
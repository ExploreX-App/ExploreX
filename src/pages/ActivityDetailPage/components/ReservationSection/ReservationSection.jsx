import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReservationSection = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTravellers, setShowTravellers] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowCalendar(true)}>Check-in</Button>
      <Button onClick={() => setShowCalendar(true)}>Check-out</Button>
      <Button onClick={() => setShowTravellers(true)}>Travellers</Button>
      <Button>Check Availability</Button>

      {/* Calendar Modal */}
      <Modal show={showCalendar} onHide={() => setShowCalendar(false)}>
        {/* Calendar content here */}
      </Modal>

      {/* Travellers Modal */}
      <Modal show={showTravellers} onHide={() => setShowTravellers(false)}>
        {/* Travellers selection content here */}
      </Modal>
    </div>
  );
};

export default ReservationSection;

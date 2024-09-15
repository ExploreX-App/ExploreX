import React from "react";
import { Container } from "react-bootstrap";
import SavedHotels from "./components/SavedHotels";
import SavedActivities from "./components/SavedActivities";

const ProfilePage = () => {
  return (
    <Container>
      <SavedHotels />
      <SavedActivities />
    </Container>
  );
};

export default ProfilePage;

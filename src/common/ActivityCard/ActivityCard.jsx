import React, { useState } from "react";
import "./ActivityCard.style.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";

const ActivityCard = ({ item }) => {
  const [toggleHeart, setToggleHeart] = useState(false);
  const handleSave = (e) => {
    e.stopPropagation();
    setToggleHeart(!toggleHeart);
    let savedActivities =
      JSON.parse(localStorage.getItem("savedActivities")) || [];

    if (savedActivities.includes(item.id)) {
      savedActivities = savedActivities.filter((id) => id !== item.id);
    } else {
      savedActivities.push(item.id);
    }

    localStorage.setItem("savedActivities", JSON.stringify(savedActivities));
  };

  const navigate = useNavigate();
  const goToDetails = () => {
    navigate(`/activities/${item.id}`);
  };
  return (
    <div
      className="activity-card-container position-relative"
      style={{ margin: "0px" }}
      onClick={goToDetails}
    >
      <div className="activity-card-img">
        <img
          src={item?.pictures[0]}
          style={{ aspectRatio: "3/3", borderRadius: "0" }}
          alt={item?.name || "activity image"}
        />
        {!toggleHeart ? (
          <IoIosHeartEmpty
            className="heart-icon"
            onClick={(e) => handleSave(e)}
          />
        ) : (
          <IoHeart className="heart-icon" onClick={(e) => handleSave(e)} />
        )}
      </div>
      <div className="activity-card-content">
        <div className="d-flex justify-content-between">
          <div className="activity-card-title">
            {item?.name?.slice(0, 30)}
            {item?.name?.length > 20 ? ".." : ""}
          </div>
          <div className="activitycard-hours d-flex align-items-center justify-content-end">
            <FaRegClock className="m-1" />
            <div className="text-nowrap">{item?.minimumDuration}</div>
          </div>
        </div>

        <div className="review-hours d-flex align-items-center">
          <div className="activitycard-review-wrap align-items-center">
            <div className="activitycard-score">{item?.rating}</div>
            <div className="activitycard-review">
              {item?.reviews} reviews
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <div className="activitycard-price text-nowrap">
              ${item?.price.amount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

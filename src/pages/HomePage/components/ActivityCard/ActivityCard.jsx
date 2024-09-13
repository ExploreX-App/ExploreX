import React from "react";
import "./ActivityCard.style.css";
import { IoIosHeartEmpty } from "react-icons/io";

const ActivityCard = ({ item }) => {
  return (
    <div
      className="activity-card-container position-relative"
      style={{ margin: "10px" }}
    >
      <div className="activity-card-img">
        <img
          src={item.pictures[0]}
          style={{ aspectRatio: "3/3", borderRadius: "0" }}
          alt={item.name|| 'activity image'}
        />
        <IoIosHeartEmpty className="heart-icon" />
      </div>
      <div className="activity-card-content">
        <div className="activity-card-title">
          {item?.name?.slice(0, 30)}
          {item?.name?.length > 20 ? ".." : ""}
        </div>


        <div className="review-hours">
          <div className="activitycard-review-wrap">
            <div className="activitycard-score">9.8</div>
            <div className="activitycard-review">43 reviews</div>
          </div>
          <div className="activitycard-hours">3-4 hours</div>
        </div>
        


        
        <div className="activity-card-description">
          {" "}
          {item?.description
            ? item.description.slice(0, 50) +
              (item.description.length > 50 ? "..." : "")
            : "No Description"}
        </div>
        <div className="activitycard-price">CA $140</div>



        
      </div>
    </div>
  );
};

export default ActivityCard;

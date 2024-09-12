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
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/97/7b/b4/caption.jpg?w=500&h=400&s=1"
          style={{ aspectRatio: "3/3", borderRadius: "10px" }}
          alt=""
        />
        <IoIosHeartEmpty className="heart-icon" />
      </div>
      <div className="activity-card-content">
        <div className="activity-card-title">
          {item?.name?.slice(0, 30)}
          {item?.name?.length > 20 ? ".." : ""}
        </div>
        <div className="activity-card-description">
          {" "}
          {item?.description
            ? item.description.slice(0, 50) +
              (item.description.length > 50 ? "..." : "")
            : "No Description"}
        </div>
        {/* <div>{item?.type}</div> */}
      </div>
    </div>
  );
};

export default ActivityCard;

import React from "react";
import { Image } from "react-bootstrap";

const Avatar = ({ imgUrl, name }) => {
  return (
    <div className="avatar d-flex gap-2 align-items-center">
      <span
          className="text-center align-content-center"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "skyblue",
            color: "white",
          }}
        >
          {name[0]}
        </span>
      <div className="fw-semibold">{name}</div>
    </div>
  );
};

export default Avatar;

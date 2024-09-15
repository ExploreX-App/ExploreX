import React from "react";

const MapPopup = ({ hotel, isDetailPage }) => {
    console.log(hotel, isDetailPage)
  return (
    <>
      {isDetailPage ? (
        <div className="fs-6 my-2" style={{width: "120px"}}>{hotel?.name}</div>
      ) : (
        <>
          {hotel?.photos && (
            <img
              src={hotel?.photos[0].replace("square60", "square200")}
              alt=""
            />
          )}

          <div className="fs-6 my-2">{hotel?.name}</div>
          <div className="d-flex justify-content-between align-content-center">
            <div className="d-flex align-items-center gap-2">
              <div className="px-2 py-1 bg-primary rounded text-white fw-semibold">
                {hotel?.reviewScore}
              </div>
              <div className="fw-bold fs-6">{hotel?.reviewScoreWord}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MapPopup;

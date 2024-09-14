import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaGlobe, FaSuitcase, FaWifi } from "react-icons/fa6";

const HotelHighlights = ({ data, faqRef }) => {
  return (
    <div className="card">
      <div className="card-header">Property Highlights</div>
      <div className="card-body">
        {/* <h5 className="card-title">Special title treatment</h5> */}
        <p className="card-text d-flex flex-column gap-2">
          <div className="d-flex align-items-center gap-1">
            <FaGlobe /> <strong>Languages Spoken:</strong> English
          </div>
          <div className="d-flex align-items-center gap-1">
            {data?.family_facilities?.length > 0
              ? data.family_facilities.map((facility, index) => (
                  <>
                    <FaUsers /> <strong>Family Facilities: </strong>
                    <span key={index} className="mr-1">
                      {facility}
                    </span>
                  </>
                ))
              : "No family facilities available"}
          </div>
          <div className="d-flex align-items-center gap-1">
            <FaWifi /> <strong>Wifi Reviews Score:</strong>{" "}
            {data?.wifi_review_score?.rating}
          </div>
          <div className="d-flex align-items-center gap-1">
            <FaSuitcase /> <strong>Parking:</strong>{" "}
            {data?.parking_available === 1
              ? "Parking is available on-site."
              : "Parking is not available."}
          </div>
        </p>
        <div className="d-flex justify-content-end">
        <a
          className="btn btn-primary px-4"
          onClick={() => faqRef.current.scrollIntoView()}
        >
          Read More
        </a></div>
      </div>
    </div>
  );
};

export default HotelHighlights;

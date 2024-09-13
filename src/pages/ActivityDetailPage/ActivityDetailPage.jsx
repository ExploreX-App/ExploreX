import React from "react";
import { useActivityQuery } from "../../hooks/useFetchActivityById";
import { Link, useParams } from "react-router-dom";
import "./ActivityDetailPage.style.css";
import GoogleMapCard from "../../common/GoogleMapCard/GoogleMapCard";
import { Button } from "react-bootstrap";
import { LuTimerReset } from "react-icons/lu";
import { PiMoney } from "react-icons/pi";
import StarRating from "../../common/StarRating";

const ActivityDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useActivityQuery({ id });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const { latitude, longitude } = data?.geoCode;
  return (
    <div className="container grid">
      <h1 className="m-0">{data?.name}</h1>
      <div className="d-flex align-items-center gap-1 fw-semibold">
        <StarRating rating={data?.rating} /> {data?.rating || 0} out of 5
      </div>
      <div className="row">
        <div className="col-md-8 mb-4">
          <div className="card">
            <img className="activity-img" src={data?.pictures[0]} alt="" />
            {console.log(data?.pictures)}
          </div>
        </div>
        <div className="col-md-4 pl-md-4">
          <GoogleMapCard lat={latitude} lng={longitude} />
          <div className="d-flex align-items-center mt-1 mb-1 fs-5">
            <LuTimerReset style={{ marginRight: ".25rem" }} />
            <div>{data?.minimumDuration || "1 hour 30 minutes"}</div>
          </div>
          <div className="d-flex align-items-center mt-1 mb-1 fs-5">
            <PiMoney style={{ marginRight: ".25rem" }} />
            {data?.price.currencyCode} ${data?.price.amount}
          </div>
          <Link
            to={data?.bookingLink || `https://maps.google.com?q=${data?.name}`}
          >
            <Button>Book</Button>
          </Link>
        </div>
      </div>
      About
      <div dangerouslySetInnerHTML={{ __html: data?.description }} ></div>
      {/* share, save */}
    </div>
  );
};

export default ActivityDetailPage;

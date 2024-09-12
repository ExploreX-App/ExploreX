import React from "react";
import { useHotelScoreQuery } from "../../../../../hooks/useFetchHotelScore";
import { ProgressBar } from "react-bootstrap";

const HotelReviewScore = ({ hotelId, reviewCount }) => {
  const { data, isLoading, error, isError } = useHotelScoreQuery({
    hotelId,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const filteredData = data[0]?.score_breakdown.filter(
    (score) => score?.customer_type === "total"
  )[0];
  const score = Number(filteredData?.average_score).toFixed(1);
  const scoreWord = data[0]?.score_percentage.filter(
    (range) => range?.score_start <= score && score < range?.score_end
  )[0]?.score_word;
  return (
    <div style={{ margin: "10px" }}>
      <div className="d-flex gap-2 align-items-center">
        <div className="px-2 py-1 bg-primary rounded text-white fw-bold">
          {score || 0}
        </div>
        <span>
          {scoreWord} &#183; {reviewCount} reviews
        </span>
      </div>
      <div className="fw-bold my-3">Categories:</div>
      <div className="row">
        {filteredData?.question?.map((question, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="d-flex justify-content-between">
              <div>{question?.localized_question}</div>
              <div className="fw-semibold">{question?.score}</div>
            </div>
            <ProgressBar
              className="mt-1"
              style={{ height: "8px" }}
              variant={
                question?.score >= 8
                  ? "success"
                  : question?.score < 7 && "danger"
              }
              now={question?.score * 10}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelReviewScore;

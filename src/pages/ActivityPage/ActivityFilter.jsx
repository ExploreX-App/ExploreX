
import React, { useState, useEffect } from "react";
import { Range } from "react-range";
import { Button, Form } from "react-bootstrap";
import "./ActivityFilter.style.css";
import { activityPriceMockData } from "../../utils/ActivityMockData";
import Slider from "rc-slider";

const MIN = 0;
const MAX = 100;

const ActivityFilter = ({ setSortCriteria, setPriceRange, handlePriceSort }) => {
  const [values, setValues] = useState([0, 100]);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
  const [selectedReviewsFilter, setSelectedReviewsFilter] = useState(null);
  const [selected, setSelected] = useState(null);
  const [compareActivities, setCompareActivities] = useState(false);
  const [filteredActivities, setFilteredActivities] = useState(activityPriceMockData);

  const handleReviewsFilterClick = (filter) => {
    //   if (selectedReviewsFilter === filter) {
    //     setSelectedReviewsFilter(null);
    //   } else {
    //     setSelectedReviewsFilter(filter);
    //     setSortCriteria(filter);
    //   }
  };

  return (
    <div className="filter-container">
      <div className="activity-filter">
        <div className="compare-activities">
          <span>Compare activities</span>
          <label className="toggle-switch">
            <input type="checkbox" checked={compareActivities} />
            <span className="slider"></span>
          </label>
        </div>

        <div className="w-100 search-activity">
          <div>
            <strong>Search by activity name</strong>
          </div>
          <div className="position-relative">
            <span className="position-absolute p-2">🔍</span>
            <Form.Control
              id="activity-search"
              type="text"
              placeholder="e.g. Musical"
              className=""
            />
          </div>
        </div>
      </div>

      <h5 className="filter-header">
        <strong>Filter by</strong>
      </h5>

      <div className="filter-group pt-3">
        <h6>
          <strong>Price</strong>
        </h6>
        {/* <Form.Check
          label="Highest Price"
          checked={selectedPriceFilter === "price_high"}
          onChange={() => setSortCriteria("price_high")}
        />
        <Form.Check
          label="Lowest Price"
          checked={selectedPriceFilter === "price_low"}
          value="low"
          onChange={(e) => {
            setSortCriteria("price_low");
          }}
        /> */}
        <Form.Check
          label="Highest Price"
          checked={selectedPriceFilter === "price_high"}
          onChange={() => {
            setSelectedPriceFilter("price_high");
            setSortCriteria("price_high");
            handlePriceSort("price_high"); // 높은 가격 순 정렬 실행
          }}
        />
        <Form.Check
          label="Lowest Price"
          checked={selectedPriceFilter === "price_low"}
          onChange={() => {
            setSelectedPriceFilter("price_low");
            setSortCriteria("price_low");
            handlePriceSort("price_low"); // 낮은 가격 순 정렬 실행
          }}
        />
      </div>

      <div className="filter-group">
        <h6>
          <strong>Price Range</strong>
        </h6>
        <div className="price__range d-flex gap-2">
          <div className="min">
            {/* <label className="">Min</label> */}
            <Form.Control
              type="text"
              value={`$${values[0]}`}
              onChange={(e) => setSortCriteria(e.target.value)}
              onFocus={(e) => (e.target.value = "")}
              onBlur={(e) => {
                if (e.target.value === "") {
                  e.target.value = `$${values[0]}`;
                }
              }}
              className=""
            />
          </div>
          <div className="max">
            <Form.Label className="max-label">Max</Form.Label>
            <Form.Control
              type="text"
              value={`$${values[1]}`}
              onChange={(e) => setSortCriteria(e.target.value)}
              onFocus={(e) => (e.target.value = "")}
              onBlur={(e) => {
                if (e.target.value === "") {
                  e.target.value = `$${values[1]}`;
                }
              }}
              className=""
            />
          </div>
        </div>
        <div className="slider-container">
          <Range
            step={10}
            min={MIN}
            max={MAX}
            values={values}
            renderTrack={({ props, children }) => (
              <div {...props} className="slider-track">
                <div
                  className="slider-track-filled"
                  style={{
                    left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                    right: `${100 - ((values[1] - MIN) / (MAX - MIN)) * 100}%`,
                  }}
                />
                {children}
              </div>
            )}
            renderThumb={({ props, index }) => (
              <div {...props} className="slider-thumb" />
            )}
          />
        </div>
      </div>

      <div className="filter-group">
        <h6>
          <strong>Reviews</strong>
        </h6>
        <Form.Check
          label="Most Reviews"
          checked={selectedReviewsFilter === "reviews_high"}
          onChange={() => handleReviewsFilterClick("reviews_high")}
        />
        <Form.Check
          label="Least Reviews"
          checked={selectedReviewsFilter === "reviews_low"}
          onChange={() => handleReviewsFilterClick("reviews_low")}
        />
      </div>

      <div className="filter-group">
        <h6>
          <strong>Rating</strong>
        </h6>
        <div className="w-100 d-flex gap-2">
          {["7+", "8+", "9+"].map((label, index) => (
            <Button
              key={index}
              className={`w-100 filter-button ${
                selected === label ? "selected" : ""
              }`}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFilter;

import React, { useState, useEffect } from "react";
import { Range } from "react-range";
import { Form } from "react-bootstrap";
import "./ActivityFilter.style.css";
import { activityPriceMockData } from "../../utils/ActivityMockData";
import Slider from "rc-slider";

const MIN = 0;
const MAX = 100;

const ActivityFilter = ({ setSortCriteria, setPriceRange }) => {
  const [values, setValues] = useState([0, 100]);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
  const [selectedReviewsFilter, setSelectedReviewsFilter] = useState(null);
  const [selected, setSelected] = useState(null);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [compareActivities, setCompareActivities] = useState(false);

  const handleToggle = () => {
    setCompareActivities(!compareActivities);
  };

  useEffect(() => {
    const filtered = activityPriceMockData.filter(
      (activity) => activity.price >= values[0] && activity.price <= values[1]
    );
    setFilteredActivities(filtered);
  }, [values, setFilteredActivities]);

  const handlePriceChange = (values) => {
    setValues(values);
    setPriceRange(values);
  };
  //price range 박스 설정부분 >> 숫자입력이 안됨 현재.. 수정필요
  const handleInputChange = (index, value) => {
    const numericValue = +value.replace(/\$/g, "");

    if (!isNaN(numericValue)) {
      const newValues = [...values];
      newValues[index] = numericValue;
      setValues(newValues);
    }
  };

  const filterActivitiesByRating = (minRating) => {
    return activityPriceMockData.filter((activity) => activity.rating >= minRating);
  };

  const handleClick = (label) => {
    setSelected(label);

    // 첫 번째 클릭
    if (label === "7+") {
      setSortCriteria("rating_7plus");
    } else if (label === "8+") {
      setSortCriteria("rating_8plus");
    } else if (label === "9+") {
      setSortCriteria("rating_9plus");
    }

    // 두 번째 클릭
    setTimeout(() => {
      if (label === "7+") {
        setSortCriteria("rating_7plus");
      } else if (label === "8+") {
        setSortCriteria("rating_8plus");
      } else if (label === "9+") {
        setSortCriteria("rating_9plus");
      }
    }, 10); //0.01초후에 두번클릭한 효과가 나타나게끔 수정... 임시방편 ㅠㅠ
  };

  const handlePriceFilterClick = (filter) => {
    if (selectedPriceFilter === filter) {
      setSelectedPriceFilter(null);
    } else {
      setSelectedPriceFilter(filter);
      setSortCriteria(filter);
    }
  };

  const handleReviewsFilterClick = (filter) => {
    if (selectedReviewsFilter === filter) {
      setSelectedReviewsFilter(null);
    } else {
      setSelectedReviewsFilter(filter);
      setSortCriteria(filter);
    }
  };

  return (
    <div className="filter-container">
      <div className="activity-filter">
        <div className="compare-activities">
          <span>Compare activities</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={compareActivities}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="w-100">
          <div>Search by activity name</div>
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
        <Form.Check
          label="Highest Price"
          checked={selectedPriceFilter === "price_high"}
          onChange={() => handlePriceFilterClick("price_high")}
        />
        <Form.Check
          label="Lowest Price"
          checked={selectedPriceFilter === "price_low"}
          onChange={() => handlePriceFilterClick("price_low")}
        />
      </div>

      <div className="filter-group">
        <h6>
          <strong>Price Range</strong>
        </h6>
        <div className="price__range d-flex gap-2">
          <div className="min">
            <label className="min-label">Min</label>
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
        <Form.Range />
        {/* <Range
          step={10}
          min={MIN}
          max={MAX}
          values={values}
          onChange={handlePriceChange}
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
        /> */}
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
        <div className="rating-button">
          {["7+", "8+", "9+"].map((label, index) => (
            <button
              key={index}
              className={`filter-button ${selected === label ? "selected" : ""}`}
              onClick={() => handleClick(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFilter;

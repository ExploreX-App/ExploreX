import React, { useState } from "react";
import { Range } from "react-range";
import { Form } from "react-bootstrap";
import "./ActivityFilter.style.css";

const MIN = 0;
const MAX = 300;

const ActivityFilter = ({ setSortCriteria }) => {
  const [values, setValues] = useState([0, 300]);

  const handleInputChange = (index, value) => {
    const numericValue = +value.replace(/\$/g, "");

    if (!isNaN(numericValue)) {
      const newValues = [...values];
      newValues[index] = numericValue;
      setValues(newValues);
    }
  };

  return (
    <div className="filter-container">
      <h5 className="filter-header">Filter by</h5>

      <div className="filter-group">
        <h6>Popular Filters</h6>
        <Form.Check label="Most Popular" />
        <Form.Check label="New Arrivals" />
        <Form.Check label="Neighborhood: A" />
        <Form.Check label="Neighborhood: B" />
      </div>

      <div className="filter-group">
        <h6>Price</h6>
        <div className="price-inputs">
          <div className="price-box-wrapper">
            <span className="min-label">Min</span>
            <input
              type="text"
              value={`$${values[0]}`}
              onChange={(e) => setSortCriteria(e.target.value)}
              onFocus={(e) => (e.target.value = "")}
              onBlur={(e) => {
                if (e.target.value === "") {
                  e.target.value = `$${values[0]}`;
                }
              }}
              className="price-box"
            />
          </div>
          <div className="price-box-wrapper">
            <span className="max-label">Max</span>
            <input
              type="text"
              value={`$${values[1]}`}
              onChange={(e) => setSortCriteria(e.target.value)}
              onFocus={(e) => (e.target.value = "")}
              onBlur={(e) => {
                if (e.target.value === "") {
                  e.target.value = `$${values[1]}`;
                }
              }}
              className="price-box"
            />
          </div>
        </div>

        {/* 슬라이더에 동그라미 2개 표시 */}
        <Range
          step={10}
          min={MIN}
          max={MAX}
          values={values}
          onChange={(values) => setValues(values)}
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

      {/* 임시로 만들어놓음, 필요없을듯 */}
      <Form.Select aria-label="Sort activities" onChange={(e) => setSortCriteria(e.target.value)}>
        <option value="">정렬 기준을 선택하세요</option>
        <option value="price_high">가격 높은순</option>
        <option value="price_low">가격 낮은순</option>
        <option value="reviews_high">리뷰 많은순</option>
        <option value="reviews_low">리뷰 적은순</option>
        <option value="rating_high">평점 높은순</option>
        <option value="rating_low">평점 낮은순</option>
        <option value="duration_high">소요시간 많은순</option>
        <option value="duration_low">소요시간 적은순</option>
      </Form.Select>
    </div>
  );
};

export default ActivityFilter;

import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Alert } from "react-bootstrap";
import { useActivitiesQuery } from "../../../hooks/useFetchActivities";
import { activityMockData } from "../../../utils/mockData/activityData";
import ActivitySlide from "../../../common/ActivitySlide/ActivitySlide";
import { responsive } from "../../../utils/settings/activitySliderSetting";

const ActivityCitySlide = ({ keyword, title }) => {
  const { data, isLoading, error, isError } = useActivitiesQuery({
    keyword,
  });
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }
  const mergedData = data?.map((activity) => {
    const randomMockData =
      activityMockData[Math.floor(Math.random() * activityMockData.length)];
    return {...activity, ...randomMockData}
  });
  return (
    <ActivitySlide title={title} data={mergedData} settings={responsive} />
  );
};

export default ActivityCitySlide;

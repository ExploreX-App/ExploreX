import React, { useEffect, useState } from "react";
import { useActivityQuery } from "../../../hooks/useFetchActivityById";
import ActivitySlide from "../../../common/ActivitySlide/ActivitySlide";
import { responsive } from "../../../utils/settings/activitySliderSetting";
import { activityMockData } from "../../../utils/mockData/activityData";
import { IoHeart } from "react-icons/io5";


const SavedActivities = () => {
  const [savedActivityIds, setSavedActivityIds] = useState([]);

  useEffect(() => {
    const savedActivities =
      JSON.parse(localStorage.getItem("savedActivities")) || [];
    setSavedActivityIds(savedActivities);
  }, []);

  const {
    data: activities,
    isLoading,
    error,
  } = useActivityQuery({ ids: savedActivityIds });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const filteredData = activities?.map((activity) => activity.data);
  const mergedData = filteredData?.map((activity) => {
    const randomMockData =
      activityMockData[Math.floor(Math.random() * activityMockData.length)];
    return { ...activity, ...randomMockData };
  });
  const numSaved = mergedData.length;
  return (
    <ActivitySlide
      saved={true}
      data={mergedData}
      title={
        <div className="d-flex justify-content-between">
          <div>Saved Activities</div>
          <div className="fs-6 text-gray">
            {numSaved} {numSaved >= 2 ? "avtivities" : "activity"} saved
          </div>
        </div>
      }
      settings={responsive}
      autoPlay={false}
    />
  );
};

export default SavedActivities;

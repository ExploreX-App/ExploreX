import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./ActivityTabs.style.css";
import ActivitySlide from "../components/ActivitySlide/ActivitySlide";

const ActivityTabs = () => {
  const [key, setKey] = useState("vancouver");
  return (
    <div className="activitytaps-container">
      <h2>Trending Activities</h2>
      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="vancouver" title="Vancouver">
            <ActivitySlide keyword={"Vancouver"} />
          </Tab>
          <Tab eventKey="new-york" title="New York">
            <ActivitySlide keyword={"new york"} />
          </Tab>
          <Tab eventKey="london" title="London">
            <ActivitySlide keyword={"london"} />
          </Tab>
          <Tab eventKey="tokyo" title="Tokyo">
            <ActivitySlide keyword={'tokyo'} />
          </Tab>
          <Tab eventKey="seattle" title="Seattle">
            <ActivitySlide keyword={'seattle'} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ActivityTabs;

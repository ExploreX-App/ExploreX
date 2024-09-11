import React from "react";
import CardSlide from "../../../common/CardSlide/CardSlide";

const CitySlider = () => {
  const cities = [
    {
      name: "New York",
      img: "https://res.cloudinary.com/hello-tickets/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_800/v1639448826/ignuqnj093e3v7tjot29.jpg",
    },
    {
      name: "Seoul",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/bb/south-korea.jpg?w=1400&h=1400&s=1",
    },
    {
      name: "Barcelona",
      img: "https://myspainvisa.com/wp-content/uploads/madrid-capital-of-spain-1024x683.jpg",
    },
    {
      name: "Cancun",
      img: "https://cdn.prod.website-files.com/645cf73a1399f9f6ed09a0e8/645cf73a1399f93eb009a93c_Hero-Mobile-Cancun.jpg",
    },
    {
      name: "Cancun",
      img: "https://cdn.prod.website-files.com/645cf73a1399f9f6ed09a0e8/645cf73a1399f93eb009a93c_Hero-Mobile-Cancun.jpg",
    },
  ];

  return (
    <div>
      <CardSlide title="Dream Your Next Trip" items={cities} />
    </div>
  );
};

export default CitySlider;

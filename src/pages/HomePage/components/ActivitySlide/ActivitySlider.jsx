import React from 'react'
import ActivitySlide from './ActivitySlide'
import ActivityCard from '../ActivityCard/ActivityCard'

const ActivitySlider = () => {
const activities ={
      "type": "activity",
      "id": "6427965",
      "self": {
        "href": "https://test.api.amadeus.com/v1/shopping/activities/6427965",
        "methods": [
          "GET"
        ]
      },
      "name": "Entrepanes Díaz",
      "description": "In this small restaurant, there is a wide offer of Catalan tapas, vermouth & regional wines.\r\n\r\nLocated on Pau Claris street, it is a buzzy venue with window and sidewalk seats where people can enjoy Entrepanes' informal ambience.\r\n\r\nThey offer, by the hand of chef Victor Lema, hand-made signature snacks and varied tapas.",
      "geoCode": {
        "latitude": 41.3972662,
        "longitude": 2.1609400000000036
      },
      "price": {},
      "pictures": [
        "https://cdn.smartvel.com/ccpictures/25660355_1777387385634460_3293034685841852122_n.jpg"
      ],
      "minimumDuration": ""
    }

  return (
    <div>
          <ActivityCard item={activities} />
    </div>
  )
}

export default ActivitySlider

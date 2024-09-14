import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./HotelBookingCard.style.css";
import { IoIosArrowDown } from "react-icons/io";
import { useHotelsByKeywordQuery } from "../../../../hooks/useFetchHotelsByKeyword";

const HotelBookingCard = ({ hotelId, dateFrom, dateTo, adultNum }) => {
const hotelCardList= {
  "status": true,
  "message": "Success",
  "timestamp": 1698349627097,
  "data": {
    "ufi": -2092174,
    "hotel_id": 191605,
    "hotel_name": "Novotel Mumbai Juhu Beach",
    "url": "https://www.booking.com/hotel/in/novotel-mumbai-juhu-beach.html",
    "hotel_name_trans": "",
    "review_nr": 2335,
    "arrival_date": "2023-11-17",
    "departure_date": "2023-11-18",
    "price_transparency_mode": "none",
    "accommodation_type_name": "Hotels",
    "latitude": 19.1085017376187,
    "longitude": 72.8243981301785,
    "address": "Juhu Beach, Maharastra",
    "address_trans": "",
    "city": "Mumbai",
    "city_trans": "Mumbai",
    "city_in_trans": "in Mumbai",
    "city_name_en": "Mumbai",
    "district": "Juhu",
    "countrycode": "in",
    "distance_to_cc": 6.66271369989499,
    "default_language": "en-gb",
    "country_trans": "India",
    "currency_code": "INR",
    "zip": "400049",
    "timezone": "Asia/Kolkata",
    "rare_find_state": "NOT_RARE",
    "soldout": 0,
    "available_rooms": 7,
    "max_rooms_in_reservation": 7,
    "average_room_size_for_ufi_m2": "14.07",
    "is_family_friendly": 0,
    "is_closed": 0,
    "is_crimea": 0,
    "is_hotel_ctrip": 0,
    "is_price_transparent": 0,
    "is_genius_deal": 0,
    "is_cash_accepted_check_enabled": 1,
    "qualifies_for_no_cc_reservation": 0,
    "hotel_include_breakfast": 1,
    "cc1": "in",
    "family_facilities": [
      "Outdoor pool",
      "Outdoor pool (all year)",
      "Beachfront",
      "Kids' club",
      "Babysitting/child services",
      "Family rooms"
    ],
    "product_price_breakdown": {
      "charges_details": {
        "amount": {
          "value": 25,
          "currency": "EUR"
        },
        "mode": "extra_charges",
        "translated_copy": "+€ 24.53 taxes and charges"
      },
      "nr_stays": 7,
      "has_long_stays_weekly_rate_price": 0,
      "has_long_stays_monthly_rate_price": 0,
      "benefits": [],
      "excluded_amount": {
        "currency": "EUR",
        "value": 24.526563374598
      },
      "gross_amount_hotel_currency": {
        "value": 12000,
        "currency": "INR"
      },
      "included_taxes_and_charges_amount": {
        "value": 0,
        "currency": "EUR"
      },
      "items": [
        {
          "name": "Goods & services tax",
          "item_amount": {
            "value": 24.526563374598,
            "currency": "EUR"
          },
          "kind": "charge",
          "base": {
            "base_amount": 0,
            "kind": "variable_amount"
          },
          "inclusion_type": "excluded",
          "details": null
        }
      ],
      "gross_amount_per_night": {
        "value": 136.25868,
        "currency": "EUR"
      },
      "all_inclusive_amount": {
        "currency": "EUR",
        "value": 160.785243374598
      },
      "net_amount": {
        "currency": "EUR",
        "value": 136.25868
      },
      "gross_amount": {
        "value": 136.25868,
        "currency": "EUR"
      }
    },
    "composite_price_breakdown": {
      "included_taxes_and_charges_amount": {
        "value": 0,
        "currency": "EUR"
      },
      "gross_amount_hotel_currency": {
        "currency": "INR",
        "value": 12000
      },
      "has_long_stays_weekly_rate_price": 0,
      "has_long_stays_monthly_rate_price": 0,
      "benefits": [],
      "excluded_amount": {
        "currency": "EUR",
        "value": 24.526563374598
      },
      "charges_details": {
        "mode": "extra_charges",
        "amount": {
          "value": 25,
          "currency": "EUR"
        },
        "translated_copy": "+€ 24.53 taxes and charges"
      },
      "all_inclusive_amount": {
        "currency": "EUR",
        "value": 160.785243374598
      },
      "net_amount": {
        "value": 136.25868,
        "currency": "EUR"
      },
      "gross_amount": {
        "value": 136.25868,
        "currency": "EUR"
      },
      "items": [
        {
          "name": "Goods & services tax",
          "item_amount": {
            "currency": "EUR",
            "value": 24.526563374598
          },
          "kind": "charge",
          "base": {
            "kind": "variable_amount",
            "base_amount": 0
          },
          "inclusion_type": "excluded",
          "details": null
        }
      ],
      "gross_amount_per_night": {
        "value": 136.25868,
        "currency": "EUR"
      }
    },
    "property_highlight_strip": [
      {
        "name": "Free parking",
        "icon_list": [
          {
            "size": 1,
            "icon": "iconset/parking_sign"
          }
        ]
      },
      {
        "icon_list": [
          {
            "size": 1,
            "icon": "iconset/pawprint"
          }
        ],
        "name": "Pets allowed"
      },
      {
        "name": "Swimming pool",
        "icon_list": [
          {
            "icon": "iconset/pool",
            "size": 1
          }
        ]
      },
      {
        "icon_list": [
          {
            "icon": "iconset/food",
            "size": 1
          }
        ],
        "name": "Restaurant"
      },
      {
        "name": "Spa and wellness centre",
        "icon_list": [
          {
            "icon": "iconset/spa",
            "size": 1
          }
        ]
      },
      {
        "icon_list": [
          {
            "size": 1,
            "icon": "iconset/snowflake"
          }
        ],
        "name": "Air conditioning"
      },
      {
        "name": "Private bathroom",
        "icon_list": [
          {
            "icon": "iconset/shower",
            "size": 1
          }
        ]
      },
      {
        "icon_list": [
          {
            "size": 1,
            "icon": "iconset/eye"
          }
        ],
        "name": "View"
      },
      {
        "name": "Free WiFi",
        "icon_list": [
          {
            "size": 1,
            "icon": "iconset/wifi"
          }
        ]
      },
      {
        "icon_list": [
          {
            "size": 1,
            "icon": "iconset/shower"
          }
        ],
        "name": "Shower"
      }
    ],
    "sustainability": {
      "sustainability_page": {
        "tier": "gold",
        "description": "These are the steps this property has taken to provide more sustainable and environmentally friendly travel:",
        "sustainable_facility_count": 25,
        "title": "Sustainability steps",
        "level_details": "This property has told us they’re making large investments and efforts towards sustainability by taking steps that can have environmental and social impact. We’ve worked with experts including Travalyst and Sustainalize to create the Travel Sustainable programme – making it easier for you to experience the world more sustainably.",
        "level": "L3",
        "cta": "Read more about Travel Sustainable",
        "efforts": [
          {
            "icon": "recycling_sign",
            "title": "Waste",
            "steps": [
              "Single-use plastic miniature shampoo, conditioner, and body wash bottles not used",
              "Single-use plastic straws not used",
              "Single-use plastic cups not used",
              "Single-use plastic water bottles not used",
              "Single-use plastic cutlery/plates not used",
              "Water cooler/dispenser",
              "Single-use plastic stirrers not used",
              "Recycling bins available to guests and waste is recycled"
            ]
          },
          {
            "icon": "blood_drop",
            "steps": [
              "Option to reuse towels",
              "Option to opt-out of daily room cleaning",
              "Water-efficient toilets",
              "Water-efficient showers"
            ],
            "title": "Water"
          },
          {
            "icon": "renewable_energy_charging",
            "steps": [
              "Key card or motion-controlled electricity",
              "Most lighting throughout property uses energy-efficient LED bulbs",
              "All windows are double-glazed",
              "The property makes efforts to reduce their food wastage",
              "Vegetarian menu options offered",
              "Vegan menu options offered "
            ],
            "title": "Energy and greenhouse gases"
          },
          {
            "icon": "group",
            "steps": [
              "Invests a percentage of revenue back into community projects or sustainability projects",
              "Tours and activities organised by local guides and businesses offered",
              "Local artists are offered a platform to display their talents",
              "Provides guests with information regarding local ecosystems, heritage and culture, as well as visitor etiquette"
            ],
            "title": "Destination and community"
          },
          {
            "steps": [
              "Wild (non-domesticated) animals are not displayed/interacted with while captive on the property or harvested, consumed, or sold.",
              "Offsets a portion of their carbon footprint",
              "Green spaces such as gardens/rooftop gardens on the property"
            ],
            "title": "Nature",
            "icon": "tree"
          }
        ],
        "has_programmes": 0
      },
      "hotel_page": {
        "has_badge": 1,
        "title": "Travel Sustainable Level 3",
        "cta": "Read more",
        "description": "This property is part of the Travel Sustainable programme, which means it’s taken significant steps to make your stay more sustainable."
      },
      "sustainability_level": {
        "name": "L3",
        "id": 3,
        "title": "Travel Sustainable Level 3"
      }
    },
    "facilities_block": {
      "facilities": [
        {
          "name": "1 swimming pool",
          "icon": "pool"
        },
        {
          "icon": "shuttle",
          "name": "Airport shuttle"
        },
        {
          "icon": "nosmoking",
          "name": "Non-smoking rooms"
        },
        {
          "name": "Fitness centre",
          "icon": "fitness"
        },
        {
          "name": "Room service",
          "icon": "clean"
        },
        {
          "name": "Spa and wellness centre",
          "icon": "spa"
        },
        {
          "name": "Restaurant",
          "icon": "food_and_drink"
        },
        {
          "icon": "disabled",
          "name": "Facilities for disabled guests"
        },
        {
          "name": "Beachfront",
          "icon": "beach"
        },
        {
          "icon": "wifi",
          "name": "WiFi available in all areas"
        },
        {
          "name": "Free parking",
          "icon": "parking_sign"
        },
        {
          "name": "Private parking",
          "icon": "parking_sign"
        },
        {
          "name": "Family rooms",
          "icon": "family"
        },
        {
          "icon": "pawprint",
          "name": "Pets allowed"
        },
        {
          "icon": "wifi",
          "name": "Free WiFi"
        }
      ],
      "name": "Most popular facilities",
      "type": "popular"
    },
    "top_ufi_benefits": [
      {
        "translated_name": "WiFi",
        "icon": "wifi"
      },
      {
        "translated_name": "Airport shuttle",
        "icon": "shuttle"
      },
      {
        "translated_name": "Swimming pool",
        "icon": "pool"
      },
      {
        "icon": "family",
        "translated_name": "Family rooms"
      },
      {
        "translated_name": "Parking",
        "icon": "parking_sign"
      },
      {
        "icon": "fitness",
        "translated_name": "Fitness centre"
      }
    ],
    "languages_spoken": {
      "languagecode": [
        "mr",
        "hi",
        "en-gb"
      ]
    },
    "spoken_languages": [
      "mr",
      "hi",
      "en-gb"
    ],
    "breakfast_review_score": {
      "rating": 6.8,
      "review_score": 6.8,
      "review_snippet": "",
      "review_score_word": "Pleasant",
      "review_number": 161,
      "review_count": 161
    },
    "wifi_review_score": {
      "rating": 7.5
    },
    "info_banners": [
      {
        "primary_action": {
          "action_context": "covid19-faq",
          "action": "open-page",
          "text": "Read more"
        },
        "type": "banner",
        "is_default_collapsed": 1,
        "priority": 100,
        "secondary_action": {},
        "title": "Coronavirus (COVID-19) Support",
        "position_to_inject": 0,
        "collapsible": 1,
        "id": "coronavirus",
        "show_after_dismissed_time": 24,
        "messages": [
          "Get the travel advice you need. Read more about possible travel restrictions before you go."
        ],
        "show_after_dismissed": 1,
        "dismissable": 0
      }
    ],
    "min_room_distribution": {
      "children": [],
      "adults": 1
    },
    "available_deal_descriptions": [],
    "tax_exceptions": [],
    "booking_home": {},
    "aggregated_data": {
      "has_refundable": 1,
      "has_nonrefundable": 0,
      "has_seating": 1,
      "has_kitchen": 0,
      "common_kitchen_fac": [
        {
          "name": "Electric kettle",
          "id": 86
        }
      ]
    },
    "last_reservation": {
      "country": null,
      "countrycode": null,
      "time": ""
    },
    "free_facilities_cancel_breakfast": [
      {
        "facility_id": 46
      },
      {
        "facility_id": 105
      }
    ],
    "room_recommendation": [
      {
        "children": 0,
        "babies": 0,
        "block_id": "19160501_95454962_2_34_0",
        "extra_babycots_price": 0,
        "extra_beds_for_children_price": 0,
        "number_of_extra_babycots": 0,
        "adults": 1,
        "total_extra_bed_price": 0,
        "extra_beds_for_children_price_in_hotel_currency": 0,
        "number_of_extra_beds_for_children": 0,
        "extra_babycots_price_in_hotel_currency": 0,
        "number_of_extra_beds_for_adults": 0,
        "total_extra_bed_price_in_hotel_currency": 0,
        "extra_beds_for_adults_price": 0,
        "number_of_extra_beds_and_babycots_total": 0,
        "extra_beds_for_adults_price_in_hotel_currency": 0
      }
    ],
    "hotel_text": {},
    "districts": [
      2375,
      3287
    ],
    "preferences": [],
    "hotel_important_information_with_codes": [
      {
        "phrase": "Please inform Novotel Mumbai Juhu Beach in advance of your expected arrival time. You can use the Special Requests box when booking, or contact the property directly with the contact details provided in your confirmation.",
        "executing_phase": 0,
        "sentence_id": 4
      },
      {
        "phrase": "Guests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply.",
        "executing_phase": 0,
        "sentence_id": 3
      },
      {
        "sentence_id": 45,
        "executing_phase": 0,
        "phrase": "Olio is closed from Fri 17 Mar 2023 until Sun 31 Mar 2024"
      }
    ],
    "rooms": {
      "19160501": {
        "private_bathroom_highlight": {
          "has_highlight": 1
        },
        "facilities": [
          {
            "name": "Laptop safe",
            "alt_facilitytype_id": 1,
            "id": 74,
            "facilitytype_name": "Media & Technology",
            "facilitytype_id": 6,
            "alt_facilitytype_name": "General"
          },
          {
            "alt_facilitytype_id": 5,
            "id": 19,
            "name": "Bathrobe",
            "facilitytype_name": "Bathroom",
            "facilitytype_id": 5,
            "alt_facilitytype_name": "Bathroom"
          },
          {
            "alt_facilitytype_name": "General",
            "facilitytype_id": 4,
            "facilitytype_name": "Room Amenities",
            "alt_facilitytype_id": 1,
            "id": 6,
            "name": "Safety deposit box"
          },
          {
            "facilitytype_name": "Accessibility",
            "name": "Upper floors accessible by elevator",
            "id": 132,
            "alt_facilitytype_id": 19,
            "alt_facilitytype_name": "Accessibility",
            "facilitytype_id": 19
          },
          {
            "alt_facilitytype_name": "Media & Technology",
            "facilitytype_id": 6,
            "facilitytype_name": "Media & Technology",
            "name": "Flat-screen TV",
            "id": 75,
            "alt_facilitytype_id": 6
          },
          {
            "facilitytype_id": 8,
            "alt_facilitytype_name": "Services",
            "id": 83,
            "alt_facilitytype_id": 3,
            "name": "Wake-up service",
            "facilitytype_name": "Services & Extras"
          },
          {
            "facilitytype_name": "Room Amenities",
            "name": "Sofa",
            "alt_facilitytype_id": 15,
            "id": 77,
            "alt_facilitytype_name": "Living Area",
            "facilitytype_id": 4
          },
          {
            "facilitytype_name": "Room Amenities",
            "name": "Iron",
            "alt_facilitytype_id": 1,
            "id": 15,
            "alt_facilitytype_name": "General",
            "facilitytype_id": 4
          },
          {
            "facilitytype_name": "Services & Extras",
            "name": "Towels",
            "id": 124,
            "alt_facilitytype_id": 5,
            "alt_facilitytype_name": "Bathroom",
            "facilitytype_id": 8
          },
          {
            "facilitytype_name": "Room Amenities",
            "name": "Ironing facilities",
            "id": 25,
            "alt_facilitytype_id": 1,
            "alt_facilitytype_name": "General",
            "facilitytype_id": 4
          },
          {
            "id": 27,
            "alt_facilitytype_id": 5,
            "name": "Free toiletries",
            "facilitytype_name": "Bathroom",
            "facilitytype_id": 5,
            "alt_facilitytype_name": "Bathroom"
          },
          {
            "name": "Additional toilet",
            "id": 72,
            "alt_facilitytype_id": 5,
            "facilitytype_name": "Bathroom",
            "facilitytype_id": 5,
            "alt_facilitytype_name": "Bathroom"
          },
          {
            "alt_facilitytype_name": "Room Amenities",
            "facilitytype_id": 4,
            "facilitytype_name": "Room Amenities",
            "id": 184,
            "alt_facilitytype_id": 4,
            "name": "Socket near the bed"
          },
          {
            "name": "Tea/Coffee maker",
            "id": 1,
            "alt_facilitytype_id": 7,
            "facilitytype_name": "Food & Drink",
            "facilitytype_id": 7,
            "alt_facilitytype_name": "Food & Drink"
          },
          {
            "facilitytype_id": 5,
            "alt_facilitytype_name": "Bathroom",
            "name": "Slippers",
            "id": 43,
            "alt_facilitytype_id": 5,
            "facilitytype_name": "Bathroom"
          },
          {
            "alt_facilitytype_id": 5,
            "id": 12,
            "name": "Hairdryer",
            "facilitytype_name": "Bathroom",
            "facilitytype_id": 5,
            "alt_facilitytype_name": "Bathroom"
          },
          {
            "alt_facilitytype_name": "Media & Technology",
            "facilitytype_id": 6,
            "facilitytype_name": "Media & Technology",
            "alt_facilitytype_id": 6,
            "id": 8,
            "name": "TV"
          },
          {
            "alt_facilitytype_id": 17,
            "id": 125,
            "name": "Linen",
            "facilitytype_name": "Services & Extras",
            "facilitytype_id": 8,
            "alt_facilitytype_name": "Bedroom"
          },
          {
            "name": "Minibar",
            "id": 3,
            "alt_facilitytype_id": 7,
            "facilitytype_name": "Food & Drink",
            "facilitytype_id": 7,
            "alt_facilitytype_name": "Food & Drink"
          },
          {
            "name": "City view",
            "alt_facilitytype_id": 14,
            "id": 121,
            "facilitytype_name": "Outdoor & View",
            "facilitytype_id": 9,
            "alt_facilitytype_name": "View"
          },
          {
            "facilitytype_id": 4,
            "alt_facilitytype_name": "General",
            "name": "Pants press",
            "id": 18,
            "alt_facilitytype_id": 1,
            "facilitytype_name": "Room Amenities"
          },
          {
            "facilitytype_name": "Bathroom",
            "name": "Toilet",
            "id": 31,
            "alt_facilitytype_id": 5,
            "alt_facilitytype_name": "Bathroom",
            "facilitytype_id": 5
          },
          {
            "alt_facilitytype_name": "Kitchen",
            "facilitytype_id": 7,
            "facilitytype_name": "Food & Drink",
            "name": "Electric kettle",
            "id": 86,
            "alt_facilitytype_id": 12
          },
          {
            "alt_facilitytype_name": "Media & Technology",
            "facilitytype_id": 6,
            "facilitytype_name": "Media & Technology",
            "name": "Telephone",
            "alt_facilitytype_id": 6,
            "id": 9
          },
          {
            "alt_facilitytype_name": "Bathroom",
            "facilitytype_id": 5,
            "facilitytype_name": "Bathroom",
            "alt_facilitytype_id": 5,
            "id": 4,
            "name": "Shower"
          },
          {
            "name": "Bidet",
            "alt_facilitytype_id": 5,
            "id": 100,
            "facilitytype_name": "Bathroom",
            "facilitytype_id": 5,
            "alt_facilitytype_name": "Bathroom"
          },
          {
            "name": "Cable channels",
            "alt_facilitytype_id": 6,
            "id": 68,
            "facilitytype_name": "Media & Technology",
            "facilitytype_id": 6,
            "alt_facilitytype_name": "Media & Technology"
          },
          {
            "facilitytype_id": 4,
            "alt_facilitytype_name": "Bedroom",
            "id": 95,
            "alt_facilitytype_id": 17,
            "name": "Wardrobe or closet",
            "facilitytype_name": "Room Amenities"
          },
          {
            "alt_facilitytype_name": "Bathroom",
            "facilitytype_id": 5,
            "facilitytype_name": "Bathroom",
            "name": "Toilet paper",
            "alt_facilitytype_id": 5,
            "id": 141
          },
          {
            "facilitytype_name": "Room Amenities",
            "alt_facilitytype_id": 1,
            "id": 73,
            "name": "Interconnected room(s) available",
            "alt_facilitytype_name": "General",
            "facilitytype_id": 4
          },
          {
            "facilitytype_id": 4,
            "alt_facilitytype_name": "General",
            "name": "Air conditioning",
            "alt_facilitytype_id": 1,
            "id": 11,
            "facilitytype_name": "Room Amenities"
          },
          {
            "facilitytype_id": 5,
            "alt_facilitytype_name": "Bathroom",
            "alt_facilitytype_id": 5,
            "id": 38,
            "name": "Private bathroom",
            "facilitytype_name": "Bathroom"
          }
        ],
        "photos": [
          {
            "url_max750": "https://cf.bstatic.com/xdata/images/hotel/max750/266814459.jpg?k=5d44df453be6dbcac045c0df1793e48ad4c22e4ce104033ac3d3b62277641c81&o=",
            "last_update_date": "2020-08-24 11:50:19",
            "url_square180": "https://cf.bstatic.com/xdata/images/hotel/square180/266814459.jpg?k=5d44df453be6dbcac045c0df1793e48ad4c22e4ce104033ac3d3b62277641c81&o=",
            "url_max1280": "https://cf.bstatic.com/xdata/images/hotel/1280x900/266814459.jpg?k=5d44df453be6dbcac045c0df1793e48ad4c22e4ce104033ac3d3b62277641c81&o=",
            "ratio": 1.88058298072402,
            "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/266814459.jpg?k=5d44df453be6dbcac045c0df1793e48ad4c22e4ce104033ac3d3b62277641c81&o=",
            "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/266814459.jpg?k=5d44df453be6dbcac045c0df1793e48ad4c22e4ce104033ac3d3b62277641c81&o=",
            "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/266814459.jpg?k=5d44df453be6dbcac045c0df1793e48ad4c22e4ce104033ac3d3b62277641c81&o=",
            "photo_id": 266814459,
            "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/266814459.jpg?k=5d44df453be6dbcac045c0df1793e48ad4c22e4ce104033ac3d3b62277641c81&o=",
            "new_order": 0
          },
          {
            "new_order": 1,
            "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/266814465.jpg?k=8b6e953af21895ce37f9b15e44cdf5b084b202d7fa382a821000cfd6bcd597e3&o=",
            "url_square180": "https://cf.bstatic.com/xdata/images/hotel/square180/266814465.jpg?k=8b6e953af21895ce37f9b15e44cdf5b084b202d7fa382a821000cfd6bcd597e3&o=",
            "url_max1280": "https://cf.bstatic.com/xdata/images/hotel/1280x900/266814465.jpg?k=8b6e953af21895ce37f9b15e44cdf5b084b202d7fa382a821000cfd6bcd597e3&o=",
            "ratio": 1.72562553925798,
            "url_max750": "https://cf.bstatic.com/xdata/images/hotel/max750/266814465.jpg?k=8b6e953af21895ce37f9b15e44cdf5b084b202d7fa382a821000cfd6bcd597e3&o=",
            "last_update_date": "2020-08-24 11:50:22",
            "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/266814465.jpg?k=8b6e953af21895ce37f9b15e44cdf5b084b202d7fa382a821000cfd6bcd597e3&o=",
            "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/266814465.jpg?k=8b6e953af21895ce37f9b15e44cdf5b084b202d7fa382a821000cfd6bcd597e3&o=",
            "photo_id": 266814465,
            "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/266814465.jpg?k=8b6e953af21895ce37f9b15e44cdf5b084b202d7fa382a821000cfd6bcd597e3&o="
          },
          {
            "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/266814529.jpg?k=cf04a6696e641fc8cee4a1804de33e8361adaeaf060dc049dfbe4ae0daeb8072&o=",
            "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/266814529.jpg?k=cf04a6696e641fc8cee4a1804de33e8361adaeaf060dc049dfbe4ae0daeb8072&o=",
            "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/266814529.jpg?k=cf04a6696e641fc8cee4a1804de33e8361adaeaf060dc049dfbe4ae0daeb8072&o=",
            "photo_id": 266814529,
            "url_max750": "https://cf.bstatic.com/xdata/images/hotel/max750/266814529.jpg?k=cf04a6696e641fc8cee4a1804de33e8361adaeaf060dc049dfbe4ae0daeb8072&o=",
            "last_update_date": "2020-08-24 11:50:45",
            "ratio": 1.79131213613972,
            "url_max1280": "https://cf.bstatic.com/xdata/images/hotel/1280x900/266814529.jpg?k=cf04a6696e641fc8cee4a1804de33e8361adaeaf060dc049dfbe4ae0daeb8072&o=",
            "url_square180": "https://cf.bstatic.com/xdata/images/hotel/square180/266814529.jpg?k=cf04a6696e641fc8cee4a1804de33e8361adaeaf060dc049dfbe4ae0daeb8072&o=",
            "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/266814529.jpg?k=cf04a6696e641fc8cee4a1804de33e8361adaeaf060dc049dfbe4ae0daeb8072&o=",
            "new_order": 2
          },
          {
            "url_max300": "https://cf.bstatic.com/xdata/images/hotel/max300/266814538.jpg?k=75b3780a6f269c77d5b90fec82b9d19a397150dc27a07e363353d74b991e2323&o=",
            "new_order": 3,
            "url_square60": "https://cf.bstatic.com/xdata/images/hotel/square60/266814538.jpg?k=75b3780a6f269c77d5b90fec82b9d19a397150dc27a07e363353d74b991e2323&o=",
            "url_640x200": "https://cf.bstatic.com/xdata/images/hotel/640x200/266814538.jpg?k=75b3780a6f269c77d5b90fec82b9d19a397150dc27a07e363353d74b991e2323&o=",
            "photo_id": 266814538,
            "url_original": "https://cf.bstatic.com/xdata/images/hotel/max500/266814538.jpg?k=75b3780a6f269c77d5b90fec82b9d19a397150dc27a07e363353d74b991e2323&o=",
            "last_update_date": "2020-08-24 11:50:46",
            "url_max750": "https://cf.bstatic.com/xdata/images/hotel/max750/266814538.jpg?k=75b3780a6f269c77d5b90fec82b9d19a397150dc27a07e363353d74b991e2323&o=",
            "url_max1280": "https://cf.bstatic.com/xdata/images/hotel/1280x900/266814538.jpg?k=75b3780a6f269c77d5b90fec82b9d19a397150dc27a07e363353d74b991e2323&o=",
            "url_square180": "https://cf.bstatic.com/xdata/images/hotel/square180/266814538.jpg?k=75b3780a6f269c77d5b90fec82b9d19a397150dc27a07e363353d74b991e2323&o=",
            "ratio": 1.49981252343457
          }
        ],
        "is_high_floor_guaranteed": 0,
        "bed_configurations": [
          {
            "bed_types": [
              {
                "bed_type": 1,
                "name_with_count": "2 single beds",
                "count": 2,
                "description": "90-130 cm wide",
                "name": "Single bed(s)",
                "description_imperial": "35-51 inches wide",
                "description_localized": null
              }
            ]
          }
        ],
        "cribs_extra_beds": {
          "extra_beds": {
            "all_free": 0,
            "max_count": 1,
            "ages": [
              16,
              17,
              255
            ]
          }
        },
        "highlights": [
          {
            "icon": "wifi",
            "translated_name": "Free WiFi"
          },
          {
            "icon": "city",
            "translated_name": "City view",
            "id": 121
          },
          {
            "id": 159,
            "translated_name": "Pool with a view",
            "icon": "checkmark"
          },
          {
            "icon": "snowflake",
            "translated_name": "Air conditioning",
            "id": 11
          },
          {
            "icon": "bath",
            "id": 38,
            "translated_name": "Ensuite bathroom"
          },
          {
            "translated_name": "Flat-screen TV",
            "id": 75,
            "icon": "screen"
          },
          {
            "id": 3,
            "translated_name": "Minibar",
            "icon": "checkmark"
          }
        ],
        "children_and_beds_text": {
          "age_intervals": [
            {
              "types_by_price": [
                [
                  "crib"
                ]
              ],
              "group_by_price": {
                "free,per_night,0": [
                  "crib"
                ]
              },
              "max_age": 3,
              "min_age": 0,
              "crib": {
                "id": 15118170,
                "price_type_n": 0,
                "price_mode": "per_night",
                "price_type": "free",
                "price": 0,
                "price_mode_n": 0
              }
            },
            {
              "max_age": 255,
              "min_age": 16,
              "group_by_price": {
                "fixed,per_night,21.80": [
                  "extra_bed"
                ]
              },
              "extra_bed": {
                "id": 15118171,
                "price_mode": "per_night",
                "price_type_n": 2,
                "price": "€ 21.80",
                "price_mode_n": 0,
                "price_type": "fixed"
              },
              "types_by_price": [
                [
                  "extra_bed"
                ]
              ]
            }
          ],
          "allow_children": 1,
          "children_at_the_property": [
            {
              "text": "Children of any age are welcome.",
              "highlight": 0
            },
            {
              "text": "Children aged 16 years and above are considered adults at this property.",
              "highlight": 0
            },
            {
              "text": "To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.",
              "highlight": 1
            }
          ],
          "cribs_and_extra_beds": [
            {
              "highlight": 0,
              "text": "The price in INR has been converted to show you the approximate price in EUR."
            },
            {
              "highlight": 0,
              "text": "Supplements are not calculated automatically in the total costs and will have to be paid for separately during your stay."
            },
            {
              "text": "The maximum number of cots, extra beds and children allowed in existing beds may vary depending on the option you book.",
              "highlight": 0
            },
            {
              "text": "All cots and extra beds are subject to availability.",
              "highlight": 0
            }
          ]
        },
        "private_bathroom_count": 0,
        "description": "This spacious, air-conditioned room has views of Mumbai, a flat-screen TV, and a rain shower. This room is newly renovated."
      }
    },
    "block": [
      {
        "nr_children": 0,
        "refundable": 1,
        "room_name": "Superior Twin Room with City View with 15% discount on Food & Beverage",
        "room_id": 19160501,
        "name_without_policy": "Superior Twin Room with City View with 15% discount on Food & Beverage",
        "number_of_bedrooms": 0,
        "refundable_until_epoch": 1700224199,
        "paymentterms": {
          "cancellation": {
            "description": "You may cancel free of charge until 18:00 on the day of arrival. You will be charged the total price of the reservation if you cancel after 18:00 on the day of arrival. If you don't show up, the no-show fee will be the same as the cancellation fee.",
            "info": {
              "time_before_midnight": null,
              "timezone": "IST",
              "date": "17 November 2023",
              "time": "18:00",
              "date_before": "16 November 2023",
              "is_midnight": "",
              "refundable": 1,
              "date_raw": "2023-11-17 18:00:00",
              "timezone_offset": "19800",
              "date_before_raw": "2023-11-16"
            },
            "guaranteed_non_refundable": 0,
            "type_translation": "Free cancellation",
            "bucket": "SMP_FULLY_FLEX",
            "type": "free_cancellation",
            "non_refundable_anymore": 0,
            "timeline": {
              "u_currency_code": "EUR",
              "currency_code": "INR",
              "stages": [
                {
                  "limit_from": "27 October 2023 01:17",
                  "text": "Free cancellation until 17:59 on 17 Nov",
                  "limit_from_date": "27 October 2023",
                  "fee_remaining": 12000,
                  "fee_pretty": "INR 0",
                  "stage_translation": "Free to cancel",
                  "text_refundable": "You'll get a full refund if you cancel before 17:59 on 17 November 2023.",
                  "b_number": 0,
                  "u_stage_fee_pretty": "&#x20AC; 0",
                  "limit_from_raw": "2023-10-27 01:17:06",
                  "fee": 0,
                  "is_effective": 1,
                  "limit_until_time": "17:59",
                  "b_state": "FREE",
                  "effective_number": 0,
                  "fee_rounded": 0,
                  "current_stage": 1,
                  "u_fee_remaining_pretty": "&#x20AC; 136",
                  "u_fee_remaining": "136.26",
                  "date_until": "2023-11-17 17:59:59 +0530",
                  "is_free": 1,
                  "limit_until": "17 November 2023 17:59",
                  "u_stage_fee": "0.00",
                  "limit_until_date": "17 November 2023",
                  "u_fee": "0.00",
                  "limit_until_raw": "2023-11-17 17:59:59",
                  "u_fee_pretty": "&#x20AC; 0",
                  "limit_from_time": "01:17",
                  "stage_fee_pretty": "INR 0",
                  "fee_remaining_pretty": "INR 12000",
                  "limit_timezone": "Mumbai",
                  "stage_fee": 0
                },
                {
                  "limit_from_time": "18:00",
                  "u_fee_pretty": "&#x20AC; 136",
                  "u_fee": "136.26",
                  "limit_until_date": "17 November 2023",
                  "limit_until_raw": "2023-11-17 18:00:00",
                  "limit_timezone": "Mumbai",
                  "stage_fee": 12000,
                  "stage_fee_pretty": "INR 12000",
                  "fee_remaining_pretty": "INR 0",
                  "date_from": "2023-11-17 18:00:00 +0530",
                  "u_fee_remaining": "0.00",
                  "u_fee_remaining_pretty": "&#x20AC; 0",
                  "u_stage_fee": "136.26",
                  "is_free": 0,
                  "limit_until": "17 November 2023 18:00",
                  "fee": 12000,
                  "limit_from_raw": "2023-11-17 18:00:00",
                  "u_stage_fee_pretty": "&#x20AC; 136",
                  "is_effective": 1,
                  "amount": 136.26,
                  "b_number": 1,
                  "text_refundable": "If you cancel from 18:00 on 17 November 2023, you will no longer be eligible for a refund.",
                  "current_stage": 0,
                  "effective_number": 1,
                  "b_state": "NONREF",
                  "limit_until_time": "18:00",
                  "fee_rounded": 12000,
                  "text": "From 18:00 on 17 Nov",
                  "limit_from": "17 November 2023 18:00",
                  "stage_translation": "No refund if you cancel",
                  "amount_pretty": "&#x20AC; 136",
                  "fee_remaining": 0,
                  "limit_from_date": "17 November 2023",
                  "fee_pretty": "INR 12000"
                }
              ],
              "policygroup_instance_id": "42/152/-",
              "nr_stages": 2
            }
          },
          "prepayment": {
            "description": "You'll pay during your stay.",
            "simple_translation": "No prepayment",
            "type_extended": "non_refundable_prepayment",
            "info": {
              "timezone_offset": null,
              "refundable": "anytime",
              "is_midnight": null,
              "time": null,
              "date": null,
              "date_before": null,
              "prepayment_at_booktime": 0,
              "timezone": null,
              "time_before_midnight": null
            },
            "extended_type_translation": "No payment needed today",
            "type": "no_prepayment",
            "type_translation": "No payment needed today",
            "timeline": {
              "u_currency_code": "EUR",
              "currency_code": "INR",
              "policygroup_instance_id": "42/152/-",
              "stages": [
                {
                  "amount_pretty": "&#x20AC; 0",
                  "fee_remaining": 12000,
                  "limit_from_date": "27 October 2023",
                  "fee_pretty": "INR 0",
                  "text": "Before you stay you'll pay",
                  "limit_from": "27 October 2023 01:17",
                  "current_stage": 1,
                  "effective_number": 0,
                  "b_state": "FREE",
                  "limit_until_time": "23:59",
                  "fee_rounded": 0,
                  "limit_from_raw": "2023-10-27 01:17:06",
                  "fee": 0,
                  "u_stage_fee_pretty": "&#x20AC; 0",
                  "amount": "0.00",
                  "is_effective": 1,
                  "b_number": 0,
                  "u_stage_fee": "0.00",
                  "is_free": 1,
                  "limit_until": "17 November 2023 23:59",
                  "u_fee_remaining": "136.26",
                  "u_fee_remaining_pretty": "&#x20AC; 136",
                  "stage_fee": 0,
                  "limit_timezone": "Mumbai",
                  "stage_fee_pretty": "INR 0",
                  "fee_remaining_pretty": "INR 12000",
                  "limit_from_time": "01:17",
                  "u_fee_pretty": "&#x20AC; 0",
                  "u_fee": "0.00",
                  "limit_until_date": "17 November 2023",
                  "limit_until_raw": "2023-11-17 23:59:59"
                },
                {
                  "after_checkin": 1,
                  "amount": "136.26",
                  "text": "At the property you'll pay",
                  "amount_pretty": "&#x20AC; 136",
                  "is_free": 0
                }
              ],
              "nr_stages": 2
            }
          }
        },
        "room_count": 14,
        "room_surface_in_m2": 29,
        "smoking": 2,
        "max_children_free_age": 17,
        "mealplan": "Enjoy a convenient breakfast at the property for EUR 15 per person per night.\nEnjoy a convenient dinner at the property for EUR 26 per person per night.",
        "is_domestic_rate": 0,
        "must_reserve_free_parking": 1,
        "children_ages": [],
        "is_block_fit": 1,
        "max_occupancy": "2",
        "genius_discount_percentage": 0,
        "bh_room_highlights": [],
        "extrabed_available": 0,
        "deposit_required": 0,
        "breakfast_included": 0,
        "block_id": "19160501_95454962_2_34_0",
        "roomtype_id": 8,
        "all_inclusive": 0,
        "refundable_until": "2023-11-17 17:59:59 +0530",
        "name": "Superior Twin Room with City View with 15% discount on Food & Beverage - Free cancellation",
        "is_last_minute_deal": 0,
        "can_reserve_free_parking": 1,
        "babycots_available": 0,
        "is_flash_deal": 0,
        "room_surface_in_feet2": 312.1534016,
        "babycots_available_amount": null,
        "number_of_bathrooms": 0,
        "nr_adults": 2,
        "half_board": 0,
        "extrabed_available_amount": null,
        "is_secret_deal": 0,
        "pod_ios_migrate_policies_to_smp_fullon": 0,
        "is_smart_deal": 0,
        "block_text": {
          "policies": [
            {
              "class": "POLICY_CANCELLATION",
              "content": "You may cancel free of charge until 18:00 on the day of arrival. You will be charged the total price of the reservation if you cancel after 18:00 on the day of arrival. If you don't show up, the no-show fee will be the same as the cancellation fee."
            },
            {
              "content": "No prepayment is needed.",
              "class": "POLICY_PREPAY"
            },
            {
              "mealplan_vector": "34",
              "content": "Enjoy a convenient breakfast at the property for EUR 15 per person per night.\nEnjoy a convenient dinner at the property for EUR 26 per person per night.",
              "class": "POLICY_HOTEL_MEALPLAN"
            },
            {
              "class": "POLICY_TITLE",
              "content": "Special conditions"
            }
          ]
        },
        "deals": {
          "deal_attributes": {
            "has_secret_channel_option": 0
          }
        },
        "is_genius_deal": null,
        "full_board": 0,
        "max_children_free": 2
      }
    ]
  }
}

//   const { data,isLoading,isError,error}= useHotelsByKeywordQuery({hotelId,dateFrom,dateTo,adultNum})
//   console.log("hotelData:", data);
//  if (isLoading) return <div>Loading...</div>;
  //   if (isError) return <div>Error: {error.message}</div>;


  
  console.log("hotel:", hotelCardList)

  const data = hotelCardList.data


  return (
    <div
      className="gap-3 hotelBookingCard-container mb-4"
      style={{ border: "1px solid black" }}
      //   onClick={goToDetail}
    >
      <div>
        <div>
          <img
            className="hotelBookingCard-img"
            src={data.rooms?.['19160501']?.photos[0].url_640x200}
            alt=""
          />
        </div>
        <div className=" pe-3 ps-3 pb-2 d-flex flex-column justify-content-between">
          <div>
            <div className="mb-2">
              <div className="fs-4 fw-bold w-100 mt-2 hotelBookingCard-title">
                {data?.hotel_name || "hotel name unavailable"}
              </div>
              <div className="hotelBookingCard-address">{ data.address}</div>
            </div>
            <div className="d-flex align-items-start">
              <div className="hotelBookingCard-reviewScore">9.5</div>

              <div className="lh-1 d-flex mb-4">
                <div className="fs-6 fw-bold ps-2">Good</div>
                <div className="hotelBookingCard-reviewCount">23 reviews</div>
              </div>
            </div>

            <div className="lh-md">
              <Row className="pt-2 pb-2 me-1 ms-1 hotelBookingCard-checkinBox">
                <Col
                  lg={6}
                  sm={6}
                  className="d-flex flex-column align-items-center"
                >
                  {" "}
                  <div style={{ fontSize: "14px", color: "#636363" }}>
                    Check-in{" "}
                  </div>
                  <div
                    className="fw-bold hotelBookingCard-date"
                    style={{ fontSize: "17px" }}
                  >
                    {" "}
                    2024 Sep 24
                  </div>
                </Col>
                <Col
                  lg={6}
                  sm={6}
                  className="d-flex flex-column align-items-center"
                >
                  {" "}
                  <div style={{ fontSize: "14px", color: "#636363" }}>
                    Check-out
                  </div>
                  <div
                    className="fw-bold hotelBookingCard-date"
                    style={{ fontSize: "17px" }}
                  >
                    2024 Sep 26{" "}
                  </div>
                </Col>
                <div
                  className="d-flex justify-content-end me-3"
                  style={{ fontSize: "12px" }}
                >
                  2-nights stay
                </div>
              </Row>

              <div className="mt-3"> 
                <div style={{ fontSize: "14px", color: "#636363" }} > You Selected</div>
                <div className="d-flex align-items-center justify-content-between" ><div><b>1 room for 2 adults</b></div> <IoIosArrowDown /> </div>
              </div>
              <div className="mt-4 fw-bold text-primary d-flex justify-content-end">Change your Selection </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingCard;

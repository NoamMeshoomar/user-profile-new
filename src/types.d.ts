
/**
 * Here you can find the types of the trip_details response
 */
interface ITripDetails {
  id: number;
  status: number;
  token?: string;
  design: {
    PrimaryColor_bg: string,
  };
  booked: any;
  td: ITripAccommodation;
  tp: ITripPreferences;
  day_itinerary: Array<IDayItinerary>;
}

enum TRIP_PACES {
  Leisurely,
  Moderate,
  SeeItAll,
}
interface ITripPreferences {
  intensity: TRIP_PACES;
  interests: number[];
}

interface IDayItinerary {
  id: number;
  date: string;
  index: number;
  itinerary_item: Array<
    IItineraryItemCommute |
    IItineraryItemResturant |
    IItineraryItemAttraction
  >;
}

interface ITripAccommodation extends ITripDetailsRequest {
  id: number;
  state: string;
  city: string;
  accommodation_name: string;
  accommodation_address: string;
  start_date: any;
  end_date: any;
}

enum BookedStatuses {
  NotBooked,
  Booked,
  Pending,
  Cancelled
}
interface IItineraryItem {
  address: string;
  day_itinerary: number;
  duration_desc: string;
  duration_sec: string;
  event_details: null;
  event_id: null;
  id: number;
  index: number;
  type: TRIP_ITEMS;

  // IMPORTANT: Booked Section fields!
  booked_status: BookedStatuses;
  booked_datetime: string | null;//2021-08-10T14:01:03+03:00,
  order_uuid: string | null;// 5f5d3c0a-3f31-404a-8ae9-c5f8ee141464,
  activity_scheduled_datetime: string | null; //2021-08-12T10:00:00+03:00,
  pickup_point_name: string | null,
  pickup_point_uuid: string | null,
  cancelled_datetime: string | null;

}
interface IItineraryItemCommute extends IItineraryItem { }

interface IItineraryItemResturant extends IItineraryItem {
  event_details: Array<EventDetails_Resturant>;
}
interface IItineraryItemAttraction extends IItineraryItem {
  event_details: Array<EventDetails_Attraction>;
}
interface EventDetails {
  id: number;
  location_lng: number;
  location_lat: number;
  created: string;
  source: string;
  name: string;
  address: string;
  rating: string;
  number_of_reviews: string;
  about: string | null;
  tags: string[];
  main_photo_url: string;
  order_page: string | null;
  curated: boolean;
}
interface EventDetails_Resturant extends EventDetails {
  type: number;
}
interface EventDetails_Attraction extends EventDetails {
  opening_hours: string[] | null;
  is_free: boolean;
  price: string | null;
  external_id?: string;
}

declare module 'styled-components';

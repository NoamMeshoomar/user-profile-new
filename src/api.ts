import axios from "./helpers/axios";

//The following token should be setted as the GET request Authorization header
const TRAVELER_AUTH_TOKEN = 'ed3cee90-4611-4ca7-bdd3-8d620675209e'
/**
 * The trip details need to be fetched from Bridgify API
 * Important: don't forget to attach the user's token to the request header as a Bearer token.
 * Bridgify API trip-details endpoint - `${BRIDGIFY_API_ENDPOINT}/trip-details`
 */
export const getTripDetails = async (): Promise<ITripDetails | undefined> => {
    const response = await axios.get("/trip-details", {
        headers: {
            Authorization: `Bearer ${TRAVELER_AUTH_TOKEN}`
        }
    });
    const start_date = response.data.td.start_date;
    const end_date = new Date(response.data.td.start_date);
    const numberOfDays = response.data.td.number_of_days;

    response.data.td.start_date = new Date(start_date).toLocaleDateString("en");
    response.data.td.end_date = new Date(end_date.setDate(end_date.getDate() + numberOfDays)).toLocaleDateString("en");

    response.data.booked = [];
    for(let i = 0; i < response.data.day_itinerary.length; i++) {
        const itinerary_item = response.data.day_itinerary[i].itinerary_item;
        for(let j = 0; j < itinerary_item.length; j++) {
            const booked = itinerary_item[j].booked_status
            if(booked === 1) {
                response.data.booked.push(itinerary_item[j]);
            }
        }
    }

    return response.data;
}
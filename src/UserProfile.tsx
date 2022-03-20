import { Dialog } from "@material-ui/core"
import { useEffect, useState } from "react"
import { getTripDetails } from "./api"
import styled from "styled-components";

import PurchaseHistory from "./components/PurchaseHistory";

import interestsJSON from "./interests.json";
import tripPacesJSON from "./trip_paces.json";

import "./UserProfile.css";

interface IProps {
    open: boolean;
    closeModalFunction: (() => void);
}

export default function UserProfile({ open, closeModalFunction }: IProps) {
    const [tripDetails, setTripDetails] = useState<ITripDetails>();
    const [error, setError] = useState<boolean>();
    const [loading, setLoading] = useState<boolean>(true);

    /**
     * Should fetch asynchronously the trip details from Bridgify's API
     */
    useEffect(() => {
        const initTripDetails = async () => {
            try {
                const tripDetails: ITripDetails | undefined = await getTripDetails()
                setTripDetails(tripDetails);
                setLoading(false);
            } catch {
                setError(true);
            }
        }
        initTripDetails();
    }, []);

    return !error ?
        <Dialog open={open} maxWidth={false} PaperProps={{
            style: {
                borderRadius: 40
            }
        }}>
            <Container>
                {!loading && <>
                    <div className="top">
                        <h3 className="title">Your Trip Details</h3>
                        <span className="close-btn" onClick={closeModalFunction}>✖</span>
                    </div>
                    <div className="trip-details">
                        <div className="icon" style={{backgroundColor: tripDetails?.design.PrimaryColor_bg}}>🛏️</div>
                        <h1 className="name">{tripDetails?.td.accommodation_name}</h1>
                        <h3 className="address">{tripDetails?.td.accommodation_address}</h3>
                        <div className="bottom-details">
                            <h3>Trip dates: <span>{tripDetails?.td.start_date} - {tripDetails?.td.end_date}</span></h3>
                            <h3>Trip intensity: <span>{tripDetails?.tp.intensity && tripPacesJSON[tripDetails?.tp.intensity].title}</span></h3>
                            <h3>Trip interests mix: <span>{tripDetails?.tp.interests.map((interest) => (interestsJSON as any)[interest].title).join(", ")}</span></h3>
                        </div>
                    </div>
                </>}
                <PurchaseHistory purchases={tripDetails?.booked} userPrimaryColor={tripDetails?.design.PrimaryColor_bg} />
            </Container>
        </Dialog> :
        <ErrorMsg>
        OOPS! There's an error with fetching the trip details.
        </ErrorMsg>
}

const Container = styled.div`
    padding: 3.5rem;
    width: 1067px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 1130px) {
        width: 100%;
    }
`;

const ErrorMsg = styled.h3`
    color: red;
`;
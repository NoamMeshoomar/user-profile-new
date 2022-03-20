import { useState } from 'react';
import { Button } from '@material-ui/core';
import styled from "styled-components";
import UserProfile from './UserProfile';


export default function App() {
    const [openUserProfile, setOpenUserProfile] = useState<boolean>(false);

    const handleOpenUserProfile = () => {
        setOpenUserProfile(prev => !prev);
    }
    
    return (
        <Container>
            <StyledButton onClick={handleOpenUserProfile}>
                Open User Profile
            </StyledButton>
            <UserProfile open={openUserProfile} closeModalFunction={handleOpenUserProfile} />
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: unset;
    margin:auto;
    text-align: center;
`;

const StyledButton = styled(Button)`
    && {
    background-color:purple;
    color:white;
    }
`;
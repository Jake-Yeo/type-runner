import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import { auth, dataBase, googleProvider } from "../config/firebase"
import { keyframes } from '@emotion/react';
import { signInWithPopup, signOut } from "firebase/auth"
import { currentUser } from "../objects/User";
import { DocumentData } from 'firebase/firestore';
import LogoNavBar from "../components/LogoNavBar";
import { TypingStatDataType, TypingStat } from "../objects/TypingStat";
import { SettingsDataType } from "../objects/Settings";
import { initializeOnSignupOrLogin, logout, signinWithGooglePopup, updateOnlineHistorySettings, updateOnlineSettings, updateOnlineTypingStats } from "../functions/Backend";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { TypingDataContext } from "../components/TypeFeedAreaDisplay";
import { useNavigate } from "react-router-dom";
import TwoPeakWaveSvg, { WavePropsType } from "../components/TwoPeakWaveSvg";
import OnePeakWaveSvg from "../components/OnePeakWaveSvg";
import { getLogo, getRandomShootingStar, getWaveAnimation } from "../functions/HelperFunction";
import DrawerButton from "../components/DrawerButton";
import ShootingStarsAnimation from "../components/ShootingStarsAnimation";
import zIndex from "@mui/material/styles/zIndex";
import LinksDisplay from "../components/LinksDisplay";

const SignupLoginPage = () => {

    var getSignupLoginButton = () => {
        if (auth.currentUser != null) { // for some reason using isUserLoggedIn doesen't work, idk... But we still need the state because setting isUserLoggedIn re-renders this component
            return <Button
                sx={{
                    color: 'white',
                    backgroundColor: '#292140',
                    borderRadius: '20px',
                    width: 'min-content',
                    textTransform: 'none', // for some reason text in button was all caps... This stops that!
                    '&:hover': { //When you use &:hover, you’re saying: “Apply the following styles to the current selector when it’s being hovered.”
                        backgroundColor: '#393055',
                    },
                }}
                onClick={() => {
                    logout();
                }}>Logout</Button>;
        } else {
            return <Button
                sx={{
                    color: 'white',
                    backgroundColor: '#292140',
                    borderRadius: '20px',
                    width: 'min-content',
                    textTransform: 'none', // for some reason text in button was all caps... This stops that!
                    '&:hover': { //When you use &:hover, you’re saying: “Apply the following styles to the current selector when it’s being hovered.”
                        backgroundColor: '#393055',
                    },
                }}
                onClick={async () => {
                    await signinWithGooglePopup();
                }}>Signup/Login with Google</Button>
        }
    }

    const [starArray, setStarArray] = useState<JSX.Element[]>([]);

    const getMeteorShower = () => {
        return (<>
            <Box sx={{
                position: 'fixed',
                width: '100vw', // alter if don't work
                height: '100vh', // alter if don't work
            }}>
                {starArray}
            </Box>
        </>)
    }

    useEffect(() => {
        setTimeout(() => {
            setStarArray([...starArray, getRandomShootingStar()]);
        }, 300)
    }, [starArray]);

    return (<>
        <Stack // Please fix overflow on mobile, they cant scroll!
            direction='column'
            justifyContent='space-between'
            alignItems={'center'}
            height='100vh'
            width='100vw'
            sx={{
                overflowX: 'hidden',
                position: 'relative'
            }}
        >

            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{
                    padding: '10px',
                    paddingLeft: '100px',
                    paddingTop: '30px',
                    paddingBottom: '20px',
                    paddingRight: '30px'
                }}
            >
                <Box sx={{ opacity: 0 }}>
                    {getLogo(30)}
                </Box>
                <DrawerButton />
            </Grid>

            <Grid item>
                <Stack
                    direction='column'
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    {getLogo(45)}
                    {getSignupLoginButton()}
                    <Box style={{ height: '30vh', zIndex: 1 }}>

                    </Box>
                </Stack>
            </Grid>
            <Grid item sx={{
                position: 'absolute',
                bottom: 0,
                width: '100vw',
                height: '100vh',
                margin: 0, // Set margin to 0 to remove any default spacing
                padding: 0, // Set padding to 0 to remove any default padding
                zIndex: -2,
            }}>{getMeteorShower()}</Grid>
            <Grid item // important to use grid items if you want your animation to stay at the very bottom of the component
                sx={{
                    position: 'relative',
                    width: '100vw',

                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100vw',
                        margin: 0, // Set margin to 0 to remove any default spacing
                        padding: 0, // Set padding to 0 to remove any default padding
                        zIndex: -1,
                    }}
                >
                    {getWaveAnimation('10vh', 0.25, 'forwards', 8, OnePeakWaveSvg)}
                    {getWaveAnimation('15vh', 0.25, 'forwards', 5, TwoPeakWaveSvg)}
                    {getWaveAnimation('18vh', 0.25, 'backwards', 9, TwoPeakWaveSvg)}

                    {getWaveAnimation('20vh', 0.25, 'backwards', 11, OnePeakWaveSvg)}
                    {getWaveAnimation('15vh', 0.25, 'forwards', 8, TwoPeakWaveSvg)}
                    {getWaveAnimation('25vh', 0.25, 'forwards', 15, TwoPeakWaveSvg)}
                </Box >
            </Grid>
            <Box sx={{
                position: 'absolute',
                width: '100vw',
                bottom: '0px'
            }}>
                <LinksDisplay />
            </Box>
        </Stack>
    </>)
}

export default SignupLoginPage
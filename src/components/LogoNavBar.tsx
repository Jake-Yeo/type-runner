import { Box, Button, ButtonBase, ButtonTypeMap, Drawer, Grid, Stack, Typography } from "@mui/material";
import { ClassNameConfigurator } from '@mui/base/utils';
import { useRef, useState } from "react";
import DrawerItems from "./DrawerItems";

export const getLogo = (fontSize: number) => {

    const fontSizeMain = fontSize + "px";
    const fontSizeSub = (fontSize * (14 / 30)) + "px";
    const fontSizeSpace = (fontSize * (20 / 30)) + "px";
    const widthOfLogo = (fontSize * (100 / 30));
    const heightOfLogo = widthOfLogo * 0.611570247;

    return (
        <Stack direction={'row'} alignItems={'center'}>

            <Box
                sx={{
                    backgroundImage: 'url("./svgFiles/runnerTypeLogo.svg")', // Load background image
                    backgroundSize: 'contain', // Scale the background image to fit within the container while preserving its aspect ratio
                    backgroundRepeat: 'no-repeat',
                    width: widthOfLogo, // Set the width of the container
                    height: heightOfLogo // Automatically adjust the height based on the aspect ratio
                }}
            />
            <Stack>
                <Stack flexDirection={'row'}>
                    <Typography fontSize={fontSizeSpace}>&nbsp;</Typography>
                    <Typography color="white" fontSize={fontSizeMain} fontWeight={'bold'}>Type</Typography>
                    <Typography color="#9287B7" fontSize={fontSizeMain} fontWeight={'bold'}>Runner</Typography>
                </Stack>
                <Stack flexDirection={'row'}>
                    <Typography fontSize={fontSizeSpace}>&nbsp;</Typography>
                    <Typography color="#635985" fontSize={fontSizeSub} fontWeight={'bold'}>Munkey See Munkey Type</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

const LogoNavBar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    return (<>
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
            {getLogo(30)}
            <Button
                onClick={() => setIsDrawerOpen(true)}
                variant="contained"
                sx={{
                    color: 'White',
                    textEmphasisColor: '#292140',
                    backgroundColor: '#635985',
                    '&:hover': { //When you use &:hover, you’re saying: “Apply the following styles to the current selector when it’s being hovered.”
                        backgroundColor: '#9287B7',
                    },
                }}
            >            <Box
                    sx={{
                        backgroundImage: 'url("./svgFiles/menu.svg")', // Load background image
                        backgroundSize: 'contain', // Scale the background image to fit within the container while preserving its aspect ratio
                        backgroundRepeat: 'no-repeat',
                        width: 32, // Set the width of the container
                        height: 32 // Automatically adjust the height based on the aspect ratio
                    }}
                /></Button>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                PaperProps={{ // This is the giving properties to the PaperProp that is used in the drawer (it's the part that slides out) read the documentation of the component apis to know which components makes up another component so you can add colour to those different parts
                    sx: { backgroundColor: '#9287B7' },
                }}
                sx={{
                    color: '#635985',
                }}
                onClose={() => setIsDrawerOpen(false)}>
                <DrawerItems setIsDrawerOpen={setIsDrawerOpen}></DrawerItems>
            </Drawer>
        </Grid>
    </>);
}

export default LogoNavBar
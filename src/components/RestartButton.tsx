import { Box, Button, Grid } from "@mui/material"
import { restartPractice, setFocusToTypingArea } from "./TypingArea"
import { getSvgBox } from "../functions/HelperFunction";


const RestartButton = () => {

    const onClick = () => {
        restartPractice();
        setFocusToTypingArea();
    }

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent='center'
                sx={{
                    padding: '20px'
                }}
            >
                <Button
                    onClick={() => onClick()}
                    sx={{
                        color: '#635985',
                        backgroundColor: '#292140',
                        borderRadius: '20px',
                        '&:hover': { //When you use &:hover, you’re saying: “Apply the following styles to the current selector when it’s being hovered.”
                            backgroundColor: '#393055',
                        },
                    }}>
                    {getSvgBox('40px', "40px", "./svgFiles/restart.svg")}
                </Button>
            </Grid>
        </>
    )
}

export default RestartButton
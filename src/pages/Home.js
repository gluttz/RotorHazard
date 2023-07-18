import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import winterranger from "../assets/images/winterranger.jpg";

export default function Home() {
    const Background = styled(Box)({
        backgroundImage: `url(${winterranger})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "-9999",
    });

    return (
        <Box component="main">
            <Background component="img" />
            <Typography
                variant="h1"
                component="h2"
                color="textPrimary"
                align="left"
            >
                FPV Race Timing
            </Typography>
            <Typography variant="h3" color="secondary">
                FPV lap timing and event management
            </Typography>
        </Box>
    );
}

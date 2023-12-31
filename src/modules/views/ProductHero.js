import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import backgroundImage from "../../assets/images/winterranger.jpg";

export default function ProductHero() {
    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: "#7fc7d9", // Average color of the background image.
                backgroundPosition: "bottom",
            }}
        >
            {/* Increase the network loading priority of the background image. */}
            <img
                style={{ display: "none" }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography
                color="inherit"
                align="center"
                variant="h2"
                marked="center"
                sx={{ caretColor: "transparent" }}
            >
                Upgrade your Sundays
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { xs: 4, sm: 10 }, caretColor: "transparent" }}
            >
                FPV Race Timing and Event Management
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                href="/products"
                sx={{ minWidth: 200 }}
            >
                Products
            </Button>
            <Typography
                variant="body2"
                color="inherit"
                sx={{ mt: 2, caretColor: "transparent" }}
            >
                Discover the latest in FPV racing lap timers
            </Typography>
        </ProductHeroLayout>
    );
}

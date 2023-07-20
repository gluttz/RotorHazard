import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
    color: theme.palette.common.white,
    position: "static",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
}));

const Background = styled(Box)({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -10,
});

export default function ProductHeroLayout(props) {
    const { sxBackground, children } = props;

    return (
        <ProductHeroLayoutRoot>
            <Container
                sx={{
                    mt: 3,
                    mb: 14,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {children}
                <Box
                    sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: "common.black",
                        opacity: 0.5,
                        zIndex: -9,
                    }}
                />
                <Background sx={sxBackground} />
                <ExpandCircleDownIcon
                    src={ExpandCircleDownIcon}
                    height="16"
                    width="12"
                    alt="arrow down"
                    sx={{ position: "absolute", bottom: 32 }}
                    color="secondary"
                />
            </Container>
        </ProductHeroLayoutRoot>
    );
}

ProductHeroLayout.propTypes = {
    children: PropTypes.node,
    sxBackground: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.func,
                PropTypes.object,
                PropTypes.bool,
            ])
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

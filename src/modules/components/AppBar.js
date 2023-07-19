import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SvgIcon from "@mui/material/SvgIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import { ReactComponent as IconSvg } from "../../assets/images/icon.svg";
import TemporaryDrawer from "./AppBarDrawer";

const pages = ["Home", "Products", "About", "Contribute"];
const settings = ["Discord", "Patreon", "Facebook", "GitHub", "Theme"];
const drawerWidth = "100%";

export default function Header({ value }) {
    // const context = React.useContext(value);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setDrawerOpen(open);
    };

    const HomeIcon = (props) => (
        <SvgIcon {...props}>
            <IconSvg />
        </SvgIcon>
    );

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HomeIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        RotorHazard
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <Link
                                    key={page}
                                    to={
                                        page !== "Products"
                                            ? `/${page.toLowerCase()}`
                                            : null
                                    }
                                    onClick={
                                        page !== "Products"
                                            ? handleCloseNavMenu
                                            : () => {
                                                  handleCloseNavMenu();
                                                  setDrawerOpen(true);
                                              }
                                    }
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <MenuItem>
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <HomeIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        RotorHazard
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            marginLeft: "10%",
                            justifyContent: "flex-start",
                            gap: "2rem",
                        }}
                    >
                        {pages.map((page) => (
                            <Link
                                key={page}
                                to={
                                    page !== "Products"
                                        ? `/${page.toLowerCase()}`
                                        : null
                                }
                                onClick={
                                    page !== "Products"
                                        ? handleCloseNavMenu
                                        : () => {
                                              handleCloseNavMenu();
                                              setDrawerOpen(true);
                                          }
                                }
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <MenuItem>
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <SettingsIcon
                                    alt="Account"
                                    fontSize="large"
                                    color="inherit"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {drawerOpen && (
                        <TemporaryDrawer
                            drawerOpen={drawerOpen}
                            toggleDrawer={toggleDrawer}
                        />
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

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
import ProductsDrawer from "./AppBarDrawer";
import patreonIcon from "../../assets/images/patreonIcon.svg";
import discordIcon from "../../assets/images/discordIcon.svg";
import facebookIcon from "../../assets/images/facebookIcon.svg";
import githubIcon from "../../assets/images/githubIcon.svg";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useAppContext } from "../../AppProvider";
const pages = ["Products", "Resources", "About", "Contribute"];
//TODO: make icon for socials instead of the cog
const settings = {
    Theme: [Brightness4Icon, null],
    Discord: [discordIcon, "https://discord.gg"],
    Patreon: [patreonIcon, "https://www.patreon.com"],
    Facebook: [facebookIcon, "https://www.facebook.com"],
    GitHub: [githubIcon, "https://github.com"],
};
// Theme: { icon: Brightness4Icon, url: null, action: () => {} },
<IconButton sx={{ ml: 1 }} onClick={null} color="inherit">
    {"dark" ? <Brightness7Icon /> : <Brightness4Icon />}
</IconButton>;
export default function Header() {
    const theme = useTheme();
    const { setMode } = useAppContext();
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
                        <Tooltip title="Open settings" color="inherit">
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
                            {
                                //TODO: fix Theme button alignment
                            }
                            {Object.keys(settings).map((key) =>
                                key === "Theme" ? (
                                    <MenuItem
                                        key={settings[key][0]}
                                        onClick={() => {
                                            setMode((old) =>
                                                old === "light"
                                                    ? "dark"
                                                    : "light"
                                            );
                                            handleCloseUserMenu();
                                        }}
                                    >
                                        <Box
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: "5px 15px",
                                            }}
                                        >
                                            <IconButton
                                                sx={{
                                                    ml: 1,
                                                    marginRight: "10px",
                                                }}
                                            >
                                                {theme.palette.mode ===
                                                "dark" ? (
                                                    <Brightness7Icon
                                                        sx={{
                                                            fill: "rgb(105, 112, 143)",
                                                        }}
                                                    />
                                                ) : (
                                                    <Brightness4Icon
                                                        sx={{
                                                            fill: "rgb(105, 112, 143)",
                                                        }}
                                                    />
                                                )}
                                            </IconButton>
                                            <Typography textAlign="center">
                                                {key}
                                            </Typography>
                                        </Box>
                                    </MenuItem>
                                ) : (
                                    <MenuItem
                                        key={settings[key][0]}
                                        onClick={handleCloseUserMenu}
                                    >
                                        <Link
                                            to={settings[key][1]}
                                            target="_blank"
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                padding: "5px 15px",
                                            }}
                                        >
                                            <IconButton>
                                                <img
                                                    src={settings[key][0]}
                                                    alt={key}
                                                    style={{
                                                        width: "25px",
                                                        height: "25px",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                            </IconButton>
                                            <Typography textAlign="center">
                                                {key}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                )
                            )}
                        </Menu>
                    </Box>
                    {drawerOpen && (
                        <ProductsDrawer
                            drawerOpen={drawerOpen}
                            toggleDrawer={toggleDrawer}
                        />
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

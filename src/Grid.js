import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { AppBar, Grid, Tabs, Tab, Menu, MenuItem, Button, Avatar, AvatarGroup, Badge, Stack ,styled} from '@mui/material';
import { DensityMedium, Man } from '@mui/icons-material';
import manimg from "../src/img/man1.png";

export default function GridLayout() {

    const [menu, setMenu] = useState();

    const openMenu = (e) => {
        setMenu(e.target);
    }

    const closeMenu = (e) => {
        setMenu(null);
    }
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}}));
    return (
        <>
            <BrowserRouter>
                <Button onClick={openMenu} startIcon={<DensityMedium />}>Menu</Button>

                <Menu open={Boolean(menu)} onClose={closeMenu}>
                    <MenuItem onClick={closeMenu}><Link to="/">Home</Link></MenuItem>
                    <MenuItem onClick={closeMenu}><Link to="/about">About Us</Link></MenuItem>
                    <MenuItem onClick={closeMenu}><Link to="/signin">Sign-In</Link></MenuItem>
                </Menu>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </BrowserRouter>

            {/* Grid */}

            {/* <Grid item xs={12} container spacing={1}>
                <Grid item lg={3} sm={6} xs={12}><h1 style={{ backgroundColor: "skyblue" }}>The Paragraphs module in Drupale with Paragraphs.</h1></Grid>
                <Grid item lg={3} sm={6} xs={12}><h1 style={{ backgroundColor: "skyblue" }}>Hello 2</h1></Grid>
                <Grid item lg={3} sm={6} xs={12}><h1 style={{ backgroundColor: "skyblue" }}>The The  Paragraphs module in Drupale with Paragraphs3 Paragraphs module in Drupale with Paragraphs3</h1></Grid>
                <Grid item lg={3} sm={6} xs={12}><h1 style={{ backgroundColor: "skyblue" }}>Hello 4</h1></Grid>
            </Grid> */}

            {/* <Grid item xs={12} container spacing={1} style={{ backgroundColor: "skyblue" }}>
                <Grid item lg={3} sm={6} xs={12}><p style={{ color: "white", backgroundColor: "green" }}>Hello</p></Grid>
                <Grid item lg={3} sm={6} xs={12}><p>About</p></Grid>
                <Grid item lg={3} sm={6} xs={12}><p>Location</p></Grid>
                <Grid item lg={3} sm={6} xs={12}><p>Sign-In</p></Grid>
            </Grid> */}

            <AvatarGroup max={2}>

                <Avatar></Avatar>
                <Avatar>o</Avatar>
                <Avatar sx={{ bgcolor: "skyblue" }}>ok</Avatar>
                <Avatar alt='img' src={manimg} sx={{ height: 55, margin: "15px" }}></Avatar>
                <Avatar><Man /></Avatar>
            </AvatarGroup>



            <Stack direction="row" spacing={2}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot">
                    <Avatar/>
                </StyledBadge>

                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot">
                    <Avatar alt="Remy Sharp" src={manimg} />
                </StyledBadge>
            </Stack>

        </>
    )

}
function Home() {
    return (<h1>Home Page Here..</h1>)
}

function About() {
    return (<h1>About Page Here..</h1>)
}
function SignIn() {
    return (<h1>Sign-In Page Is Here..</h1>)
}














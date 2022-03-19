import React from 'react'
import { Container, Grid, Button, Box } from "@mui/material";
import swcLogo from "./Images/swc.png";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <Container maxWidth="md" component="main">
                <Box sx={{
                    paddingTop: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Grid container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={2}>
                        <Grid item><h1 style={{ fontSize: "4em" }}>Gratitude Day 2022</h1></Grid>
                        <Grid item><img src={swcLogo} style={{ maxHeight: "300px" }}></img></Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        <Grid item><Button color="primary" to="/createPostCard" variant="contained" component={Link} style={{ minWidth: "200px", minHeight: "50px", textTransform: "none", fontSize: "1em", backgroundColor: "#3f51b5" }}>
                            <h1 style={{ fontSize: "1.5em", color: "white", margin: "0" }}>Write a Postcard</h1>
                        </Button></Grid>
                        <Grid item><Button color="primary" to="/memorywall" variant="contained" component={Link} style={{ minWidth: "200px", minHeight: "50px", textTransform: "none", fontSize: "1em", backgroundColor: "#3f51b5" }}>
                            <h1 style={{ fontSize: "1.5em", color: "white", margin: "0" }}>To Memory Wall</h1>
                        </Button></Grid>
                    </Grid>
                </Box>
            </Container>

        </div>
    )
}

export default Home;
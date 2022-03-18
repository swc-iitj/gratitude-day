import React,{useState} from 'react'
import {Container,Grid,Button,Box,Typography} from "@mui/material";
import swcLogo from "./Images/swc.png";
import {Link} from "react-router-dom";
const Home = () =>{
    return (
        <div style={{ backgroundColor:"#c2c2c2"}}>
            <div style={{padding:"80px"}}></div>
                <Container maxWidth="md" component="main">
                    <Box sx={{p: 2,
               
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",}}>
                      <Grid container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                  spacing={2}>
                      <Grid item><Typography variant="h3">Gratitude Day 2022</Typography></Grid>
                      <Grid item><img src={swcLogo} style={{ maxHeight: "300px" }}></img></Grid>
                  </Grid>
                  <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}>
                      <Grid item><Button color="primary" to="/createPostCard" variant="contained"component={Link} style = {{minWidth:"200px",minHeight:"50px",backgroundColor:"#46dbe8"}}>
              Make a Postcard
            </Button></Grid>
                      <Grid item><Button color="secondary" to="/memorywall" variant="contained" component={Link} style = {{minWidth:"200px",minHeight:"50px",backgroundColor:"#3329f0"}}>
              To MemoryWall
            </Button></Grid>
                  </Grid>

                  </Box>
                </Container>
                <div style={{padding:"200px"}}></div>
    
        </div>
    )
}

export default Home;
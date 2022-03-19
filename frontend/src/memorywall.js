import React from 'react'
import './App.css'
import Gallery from './Gallery';
import Navbar from "./components/Navbar";
import { Button } from "@material-ui/core";

const Memorywall = () => {
    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: 'center' }}>🖼️ Memory Wall</h1>
            <Button color="primary" variant="contained" style={{ textTransform: "none", fontSize: "1em", backgroundColor: "#3f51b5", marginLeft: "10px" }} onClick={() => window.open('https://forms.gle/uHrvwQEqQjUCiqh48')}>
                <h1 style={{ fontSize: "1.5em", color: "white", margin: "0" }}>📸 Add a Memory</h1>
            </Button>
            <Gallery />
        </div>
    )
}

export default Memorywall;
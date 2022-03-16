import React from 'react'
import './App.css'
import Gallery from './Gallery';

const Memorywall = () =>{
    return (
        <>
        <div
            style={{
            backgroundColor: "#e2cd60",
            backgroundSize: "100%",
            }}
        >
            <Gallery/>
        </div>
        </>
    )
}

export default Memorywall;
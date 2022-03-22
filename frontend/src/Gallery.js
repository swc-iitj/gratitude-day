import React, { useState, useEffect } from "react";
import "./gallery.css";
import CloseIcon from "@material-ui/icons/Close";
import GSheetReader from "g-sheets-api";
import Polaroid from "polaroid-image";



const Gallery = () => {

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const [tempimgCap, setTempImgCap] = useState('');
    const getImg = (src, cap) => {
        setTempImgSrc(src);
        setTempImgCap(cap)
        setModel(true);
    }
    const [photoData, setPhotoData] = useState([]);
    let data = photoData;


    const options = {
        apiKey: 'AIzaSyB2XspoxlMj1n0N__mLFsDXIMkO8Ny6fjI',
        sheetId: '1R5KSpWBfExHabHNEvmZq0LY8FbiOItxkgGWzY1AvqkY',
        sheetNumber: 1,
        sheetName: 'Form Responses 1', // if sheetName is supplied, this will take precedence over sheetNumber
        returnAllResults: true,
    }
    useEffect(() => {
        GSheetReader(options, (results) => {

            const tempPhotoData = []
            results.map((result) => {
                var id = result['Add your memory'].replace("https://drive.google.com/open?id=", "");
                var srclink = "https://drive.google.com/uc?export=download&id=" + id;
                const tempDict = { id: 0, src: srclink, cap: result['Any caption for your memory (optional)'], width: 1, height: 1 };
                tempPhotoData.push(tempDict);
            })
            setPhotoData(tempPhotoData);
        }).catch((err) => { console.log(err) })

    }, [])

    return (
        <>
            <div
                style={{
                    backgroundSize: "100%",
                }}
            >

                {
                    <><div className={model ? "model open" : "model"}>
                        <img src={tempimgSrc} style={{ margin: "0" }} />
                        <CloseIcon onClick={() => setModel(false)} style={{ cursor: "pointer" }} />

                    </div><div className='gallery'>
                            <div className='container'>
                                <div className='row'>
                                    {data.map((item, index) => {
                                        return (
                                            <div key={index} onClick={() => getImg(item.src, item.cap)}>
                                                {/* <div className='imgbox'> 
                                            <img src={item.src} height='500' width={'500'} />
                                            <div className='caption'>
                                                <h1 style={{color: "black", fontSize: "1.2em" }}># {item.cap}</h1>
                                            </div>
                                        </div> */}
                                                <div>
                                                    {
                                                        item.cap ? (
                                                            <Polaroid imgSrc={item.src} text={"#" + item.cap} zoom='scale(1.1)' />
                                                        )
                                                            : (
                                                                <Polaroid imgSrc={item.src} zoom='scale(1.1)' />
                                                            )
                                                    }

                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div></>
                }
            </div>
        </>

    )
}

export default Gallery;

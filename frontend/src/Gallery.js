import React, {useState} from 'react';
import { photos } from "./photos";
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';



const Gallery= ()=>{
    let data= photos
    const [model, setModel]= useState(false);
    const [tempimgSrc, setTempImgSrc]= useState('');
    const [tempimgCap, setTempImgCap]= useState('');
    const getImg= (src,cap)=>{
        setTempImgSrc(src);
        setTempImgCap(cap)
        setModel(true);
    }
    return(
        <>
        <div
            style={{
            backgroundSize: "100%",
            }}
        >
        
        {
            <><div className={model ? "model open" : "model"}>
                    <img src={tempimgSrc} style={{margin: "0"}}/>
                    <div className='Caption'>
                        <h1 style={{color: "white"}}>{tempimgCap}</h1>
                    </div>
                    <CloseIcon onClick={() => setModel(false)} style={{cursor: "pointer"}}/>

                </div><div className='gallery'>
                    <div className='container'>
                        <div className='row'>
                            {data.map((item, index) => {
                                return (
                                    <div className='pics' key={index} onClick={() => getImg(item.src, item.cap)}>
                                        <div className='imgbox'> 
                                            <img src={item.src} height='500' width={'500'} />
                                            <div className='caption'>
                                                <h1 style={{color: "black"}}>#</h1>
                                                <h1 style={{color: "black"}}> {item.cap}</h1>
                                            </div>
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

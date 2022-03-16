import React, {useState} from 'react';
import { photos } from "./photos";
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';



const Gallery= ()=>{
    let data= photos
    const [model, setModel]= useState(false);
    const [tempimgSrc, setTempImgSrc]= useState('');
    const getImg= (src)=>{
        setTempImgSrc(src);
        setModel(true);
    }
    return(
        <>
        <div
            style={{
            backgroundColor: "#e2cd60",
            backgroundSize: "100%",
            }}
        >
        
        {
            <><div className={model ? "model open" : "model"}>
                    <img src={tempimgSrc} />
                    <CloseIcon onClick={() => setModel(false)} />

                </div><div className='gallery'>
                        {data.map((item, index) => {
                            return (
                                <div className='pics' key={index} onClick={() => getImg(item.src)}>
                                    <img src={item.src} />
                                </div>
                            );
                        })}
                    </div></>
        }
        </div>
        </>

    )
}

export default Gallery;

import React from 'react';
import Photo from './Photo';
import { photos } from "./photos";
import './gallery.css';

const Gallery= ()=>{
    let data= photos
    const getImg= (src)=>{
        console.warn(src)
    }
    return(
        <>
        {
            <div className='gallery'>
                {data.map((item,index)=>{
                    return(
                        <div className='pics' key={index} onClick={() => getImg(item.src)}>
                            <img src={item.src} />
                        </div>
                    )
                })}
            </div>
        }
        </>

    )
}

export default Gallery;

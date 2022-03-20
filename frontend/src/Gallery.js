import React, { useState,useEffect } from "react";
import "./gallery.css";
import CloseIcon from "@material-ui/icons/Close";
import GSheetReader from "g-sheets-api";
import './photos.js'
import { photos } from "./photos.js";


const Gallery= ()=>{
    
    const [model, setModel]= useState(false);
    const [tempimgSrc, setTempImgSrc]= useState('');
    const [tempimgCap, setTempImgCap]= useState('');
    const getImg= (src,cap)=>{
        setTempImgSrc(src);
        setTempImgCap(cap)
        setModel(true);
    }
    const [photoData,setPhotoData] = useState([]);
	// let data = photoData;


	const options = {
		apiKey: 'AIzaSyB2XspoxlMj1n0N__mLFsDXIMkO8Ny6fjI',
		sheetId: '1R5KSpWBfExHabHNEvmZq0LY8FbiOItxkgGWzY1AvqkY',
		sheetNumber: 1,
		sheetName: 'Form Responses 1', // if sheetName is supplied, this will take precedence over sheetNumber
		returnAllResults: true,
	  }
	  useEffect(()=>{
		GSheetReader(options,(results)=>{

			const tempPhotoData = []
		  results.map((result)=>{
              var id = result['Add your memory'].replace("https://drive.google.com/open?id=", "");
              var srclink = "https://drive.google.com/uc?export=download&id=" + id;
			  const tempDict = {id:0,src:srclink,cap:result['Any caption for your memory (optional)'],width:1,height:1};
			  tempPhotoData.push(tempDict);
		  })
		  setPhotoData(tempPhotoData);
	  }).catch((err)=>{console.log(err)})

	  },[])
      let data= photos
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

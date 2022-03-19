import React, { useState,useEffect } from "react";
import { photos } from "./photos";
import "./gallery.css";
import CloseIcon from "@material-ui/icons/Close";
import { Grid } from "@mui/material";
import GSheetReader from "g-sheets-api";

const Gallery = () => {
	const [model, setModel] = useState(false);
	const [tempimgSrc, setTempImgSrc] = useState("");
	const [tempimgCap, setTempImgCap] = useState("");
	const getImg = (src, cap) => {
		setTempImgSrc(src);
		setTempImgCap(cap);
		setModel(true);
	};
	const [photoData,setPhotoData] = useState([]);
	let data = photoData;


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
			  const tempDict = {id:0,src:result['Add your memory'],cap:result['Any caption for your memory (optional)'],width:1,height:1};
			  tempPhotoData.push(tempDict);
		  })
		  setPhotoData(tempPhotoData);
	  }).catch((err)=>{console.log(err)})

	  },[])
	  
	
	return (
		<>
			<div
				style={{
					backgroundSize: "100%",
				}}
			>
				{
					<>
						<div className={model ? "model open" : "model"}>
							<Grid
								container
								direction="column"
								justifyContent="center"
								alignItems="center"
							>
								<Grid item>
									<img src={tempimgSrc} style={{ margin: "0" }} />
								</Grid>
								<Grid item>
									<h1 style={{ color: "white" }}>{tempimgCap}</h1>
								</Grid>
							</Grid>
							<CloseIcon
								onClick={() => setModel(false)}
								style={{ cursor: "pointer" }}
							/>
						</div>
						<div className="gallery">
							{data.map((item, index) => {
								return (
									<div
										className="pics"
										key={index}
										onClick={() => getImg(item.src, item.cap)}
									>
										<img src={item.src} />
									</div>
								);
							})}
						</div>
					</>
				}
			</div>
		</>
	);
};

export default Gallery;

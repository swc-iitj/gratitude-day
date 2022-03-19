import React, { useState } from "react";
import { photos } from "./photos";
import "./gallery.css";
import CloseIcon from "@material-ui/icons/Close";
import { Grid } from "@mui/material";

const Gallery = () => {
	let data = photos;
	const [model, setModel] = useState(false);
	const [tempimgSrc, setTempImgSrc] = useState("");
	const [tempimgCap, setTempImgCap] = useState("");
	const getImg = (src, cap) => {
		setTempImgSrc(src);
		setTempImgCap(cap);
		setModel(true);
	};
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

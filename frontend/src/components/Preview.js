import React from "react";
import { BACKEND } from "../api";
import "./Preview.css";

export default function Preview({ mail, message, images }) {
	return (
		<div class="wrapper">
			<div class="wrapper-inner">
				<table class="outer-table"></table>
				<table class="border-top"></table>
				<table class="main-table-first">
					<tr>
						<td class="two-column">
							<div class="prev-section">
								<img
									src="https://i.imgur.com/EJLPkd8.png"
									height=""
									alt="alt_text"
									border="0"
									style={{
										width: "100%",
										maxWidth: "200px",
										fontFamily: "sans-serif",
										color: "#555555",
										display: "block",
										transform: "rotate(90deg)"
									}}
								/>
							</div>
							<div class="prev-section">
								<img
									src="https://i.imgur.com/JJgRlI0.png"
									height=""
									alt="alt_text"
									border="0"
									style={{
										width: "200%",
										height: "auto",
										fontFamily: "sans-serif",
										color: "#555555",
										display: "block",
										marginTop: "25px"
									}}
								/>
							</div>
							<p
								style={{
									fontSize: "x-large",
									fontFamily: "Gabriola",
									textAlign: "start",
									padding: "10%",
									whiteSpace: "pre-wrap",
								}}
							>
								{message}
							</p>
							{images.map((image) => (
								<div>
									<img
										src={`${BACKEND}/media/postcard_images/${image}`}
										height="auto"
										alt="alt_text"
										border="0"
										style={{
											marginLeft: "auto",
											marginRight: "auto",
											marginBottom: 20,
											maxWidth: 500,
										}}
									/>
								</div>
							))}
							<div>
								<img
									src="https://i.imgur.com/EJLPkd8.png"
									height=""
									alt="alt_text"
									border="0"
									style={{
										width: "100%",
										maxWidth: "200px",
										fontFamily: "sans-serif",
										color: "#555555",
										display: "block",
										textAlign: "right",
										float: "right",
										transform: "rotate(270deg)"
									}}
								/>
							</div>
						</td>
					</tr>
				</table>
			</div>
			<p className="preview-text">
				Preview <br />
				This is how {mail ? mail : "(s)he"} will receive the gratitude...🙈
			</p>
		</div>
	);
}

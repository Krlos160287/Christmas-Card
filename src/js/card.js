import { useState, useEffect } from "react";
import React from "react";
import "animate.css";

export const Card = () => {
	const [name, setName] = useState(" ");
	const [name2, setName2] = useState(" ");
	const [message, setMessage] = useState(" ");

	return (
		<div className="container" id="cont1">
			<div className="cCard">
				<h2
					className="animate__animated animate__fadeInLeft"
					id="first">
					Querido{" "}
				</h2>
				<input
					className="name"
					type="text"
					value={name2}
					onChange={e => setName2(e.target.value)}
				/>
			</div>
			<div className="cName">
				<h2
					className="animate__animated animate__fadeInLeft"
					id="second">
					Mi nombre es:{" "}
				</h2>
				<input
					className="name"
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</div>
			<div className="cFeli">
				<h2
					className="animate__animated animate__fadeInLeft"
					id="third">
					Y quiero felicitarte de una manera especial:{" "}
				</h2>
				<input
					className="feli"
					type="text"
					value={message}
					onChange={e => setMessage(e.target.value)}
				/>
			</div>
		</div>
	);
};

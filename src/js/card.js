import { useState, useEffect } from "react";
import React from "react";
import "animate.css";

export const Card = () => {
	const [name, setName] = useState(" ");
	const [message, setMessage] = useState(" ");

	return (
		<div
			className="container animate__animated animate__fadeInTopLeft"
			id="cont1">
			<div className="cCard">
				<h2
					className="animate__animated animate__fadeInLeft"
					id="first">
					Querido/a:
				</h2>
				<input
					className="name"
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</div>
			<div className="cFeli contenteditable">
				<textarea
					id="feli"
					type="text"
					value={message}
					rows="4"
					onChange={e => setMessage(e.target.value)}
				/>
			</div>
		</div>
	);
};

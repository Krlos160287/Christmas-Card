import { useState, useEffect } from "react";
import React from "react";
import "animate.css";

export const Card = () => {
	const [name, setName] = useState(" ");
	const [name2, setName2] = useState(" ");
	const [message, setMessage] = useState(" ");

	return (
		<div
			className="container animate__animated animate__fadeInTopLeft"
			id="cont1">
			<div className="cCard">
				<h2
					className="animate__animated animate__fadeInLeft"
					id="first">
					Querido/a{" "}
				</h2>
				<select>
					<option> Papá</option>
					<option> Mamá</option>
					<option> Marido</option>
					<option> Esposa</option>
					<option> Hermano/a</option>
					<option> Hijo/a</option>
					<option> Abuelo/a</option>
					<option> Familia</option>
				</select>
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

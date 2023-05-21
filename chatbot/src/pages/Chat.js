import React, { useEffect, useState } from "react";
import "../App.scss";

const Chat = () => {
	const [user, setUser] = useState([]);
	const [input, setInput] = useState("");
	// const [ai, setAi] = useState();

	const handleSearch = (event) => {
		event.preventDefault();
		setUser([...user, input]);
		console.log(user);
		setInput("");
	};

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	return (
		<div>
			<div className="container">
				{user && user.length > 0 ? (
					<div>
						{user.map((chat) => (
							<>
								<div className="user-txt">{chat}</div>
								<div className="ai"></div>
							</>
						))}
						<div></div>
					</div>
				) : (
					<div></div>
				)}
			</div>

			<div className="form">
				<div>
					<form onSubmit={handleSearch}>
						<input
							type="text"
							placeholder="Ask the AI something"
							value={input}
							onChange={handleChange}
							required
						/>
						<button type="submit" value="submit">
							Generate Response
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Chat;

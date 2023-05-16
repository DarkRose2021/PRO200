import React, { useEffect, useState } from "react";
import "../App.scss";

const Chat = (props) => {
	const [user, setUser] = useState("user");

	const handleSearch = (event) => {
		event.preventDefault();

		if (user !== "") {
			usertxt();
		}
	};

	const usertxt = () => {
		console.log(user);
	};

	return (
		<div>
			<div className="container">
				<div>
					<div className="ai">{props.data[0]?.name}</div>
					<div className="user-txt">{user}</div>
				</div>
			</div>
			<div className="form">
				<div>
					<form onSubmit={handleSearch}>
						<input
							type="text"
							placeholder="Ask the AI something"
							onChange={(evt) => setUser(evt.target.value)}
						/>
						<button type="submit" value="submit">Generate Response</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Chat;

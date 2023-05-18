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

	const url = "http://localhost:2000/chat"
	// let sendData = () => {
	// 	axios.post(url, user)
	// 	   .then(res => console.log('Data send'))
	// 	   .catch(err => console.log(err.data))
	// 	}

	const usertxt = () => {
		console.log(user);
	};

	return (
		<div>
			<div className="container">
				<div>
					<div className="ai">{props.data[0]?.results.content}</div>
					<div className="user-txt">{user}</div>
				</div>
			</div>
			<div className="form">
				<div>
					<form onSubmit={handleSearch}>
						<input
							type="text"
							placeholder="Ask the AI something"
							onSubmit={(evt) => setUser(evt.target.value)}
						/>
						<button type="submit" value="submit" onSubmit={(evt) => setUser(evt.target.value)}>Generate Response</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Chat;

import React from "react";
import "../App.scss";

const Chat = (props) => {
	return (
		<div>
			<div className="container">
				<div>
					<div className="ai">{props.data[0]?.name}</div>
					<div className="user-txt">{props.data[0]?.chat}</div>
				</div>
			</div>
			<div className="form">
				<div>
					<form>
						<input type="text" placeholder="Ask the AI something" />
						<button type="submit">Generate Response</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Chat;
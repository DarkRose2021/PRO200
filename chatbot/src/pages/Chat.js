import React from "react";
import "../App.scss";

const Chat = (props) => {
    // console.log(props.name)
	return (
		<div>
			<div className="container">
				<div>
					<div className="ai">{props.name}</div>
					<div className="user-txt">{props.chat}</div>
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

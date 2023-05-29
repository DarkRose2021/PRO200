import React, { useEffect, useState } from "react";
import "../App.scss";
// import "../App2.scss";

const Chat = () => {
	// const [stylePath, setStylePath] = useState('./chatbot/public/App.scss');
	
	const [dataArray, setDataArray] = useState([]);
	const [inputValue, setInputValue] = useState({
		user: ""
	});
	const [loading, setLoading] = useState(false);
	let aiData = ""

	const url = "http://localhost:2000/chat";

	// handleButtonClick = () => {
	// 	this.setState({stylePath: './chatbot/public/App.scss'});
	// }

	const loadApi = async () => {
		console.log(JSON.stringify(inputValue))
		setLoading(true);
		await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(inputValue),
		})
			.then((resp) => resp.json())
			.then((data) => {
				console.log("api: " + data[0].results.content);
				aiData = data[0].results.content;
				// setAiData(data[0].results.content);
				console.log(aiData +" ai data")
			})
			.catch((err) =>
				aiData = "Rate Limit Reached, Try again in a few minutes"
			)
			.finally(() => {
				setLoading(false);
			})
	};

	const handleChange = (event) => {
		setInputValue({
			user: event.target.value
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await loadApi();
		console.log("Creating data object")
		const newDataObject = {
			aiTxt: aiData,
			userTxt: inputValue.user,
		};
		setDataArray([...dataArray, newDataObject]);
		setInputValue({
			user: ""
		});
	};

	return (
		<div >
			{/* <link rel='stylesheet' type='text/css' href={ process.env.PUBLIC_URL + '/foo.scss' }/>
			<button type="button" onClick={this.handleButtonClick.bind(this)}>Dark Mode</button> */}
		<div className="center">
			<div className="container">
			
				{dataArray && dataArray.length > 0 ? (
					<div>
						{dataArray.map((data) => (
							<>
								<div className="user-txt">{data.userTxt}</div>
								<div className="ai">{data.aiTxt}</div>
							</>
						))}
					</div>
				) : (
					<div></div>
				)}
			</div>
			</div>

			{
				
				loading ? <h3 className="center loading">Loading</h3> : <br />
			
			}

			<div className="form">
				<div>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="user"
							placeholder="Ask the AI something"
							value={inputValue.user}
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

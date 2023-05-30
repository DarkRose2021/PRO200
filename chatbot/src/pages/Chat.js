import React, { useEffect, useState } from "react";
import "../App.scss";
// import "../App2.scss";

const Chat = () => {
	const [isActive, setActive] = useState("false");

	const [dataArray, setDataArray] = useState([]);
	const [inputValue, setInputValue] = useState({
		user: "",
	});
	const [loading, setLoading] = useState(false);
	let aiData = "";

	const url = "http://localhost:2000/chat";

	const toggleClass = () => {
		setActive(!isActive);
	};

	const loadApi = async () => {
		console.log(JSON.stringify(inputValue));
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
				console.log(aiData + " ai data");
			})
			.catch(
				(err) => (aiData = "Rate Limit Reached, Try again in a few minutes")
			)
			.finally(() => {
				setLoading(false);
			});
	};

	const handleChange = (event) => {
		setInputValue({
			user: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await loadApi();
		console.log("Creating data object");
		const newDataObject = {
			aiTxt: aiData,
			userTxt: inputValue.user,
		};
		setDataArray([...dataArray, newDataObject]);
		setInputValue({
			user: "",
		});
	};

	return (
		<div className={isActive ? "light" : "dark"}>
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
						<>
							<h1>Welcome to Our Chatbot!</h1>
							<div className="start">
								This chatbot was made by Grace &amp; Katie. Start typing in the
								box below to get started!
							</div>
						</>
					)}
				</div>
			</div>

			{loading ? (
				<h3
					className={
						isActive
							? "loadingLight loading center"
							: "loadingDark loading center"
					}
				>
					Loading
				</h3>
			) : (
				<br />
			)}

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
					<div className="darkmodeBtn">
							<button onClick={toggleClass} >Dark Mode</button>
						</div>
				</div>
			</div>
		</div>
	);
};

export default Chat;

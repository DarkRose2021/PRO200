import { Configuration, OpenAIApi } from "openai";
import React, { useEffect, useState } from "react";
import "./App.scss";
import Chat from "./pages/Chat";

function App() {
	const url = "http://localhost:2000/test"
	const [data, setData] = useState([])

	useEffect(() => {
		loadApi();
	}, []);

	const loadApi = () => {
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data.results);
				setData(data.results);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="App">
			{/* <button onClick={generateImage}>Generate Image</button> */}
			{
				data ? <Chat data={data} />:<></>
			}
		</div>
	);
}

export default App;

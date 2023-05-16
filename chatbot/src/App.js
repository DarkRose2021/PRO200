
import "./App.scss";
import Chat from "./pages/Chat";
import { useEffect, useState } from "react";

 function App() {
	

	const url = "http://localhost:2000/test"
	const [testData, setTestData] = useState([])

	useEffect(() => {
		loadApi();
	}, []);

	const loadApi = () => {
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data.results);
				setTestData(data.results);
			})
			.catch((err) => console.log(err));
	};


	return (
		<div className="App">
			{/* <button onClick={generateImage}>Generate Image</button> */}
			{
				testData ? <Chat data={testData} />:<></>
			}
			
		</div>
	);
}

export default App;
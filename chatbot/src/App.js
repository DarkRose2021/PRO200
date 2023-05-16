
import "./App.scss";
import Chat from "./pages/Chat";
import { useEffect, useState } from "react";

 function App() {
	const configuration = new Configuration({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	});

	const openai = new OpenAIApi(configuration);

	// const generateImage = async () => {
		// const res = await openai.createImage({
		// 	prompt: "a white siamese cat",
		// 	n: 1,
		// 	size: "1024x1024",
		// });
		// console.log(res.data.data[0].url);
	// };

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
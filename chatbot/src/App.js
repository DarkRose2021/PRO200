
import "./App.scss";

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

	return (
		<div className="App">
			{/* <button onClick={generateImage}>Generate Image</button> */}

			<div className="container">
				<div>
					<div className="ai"></div>
					<div className="user-txt"></div>
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
}

export default App;

import { Configuration, OpenAIApi } from "openai";
import "./App.scss";

function App() {
	const configuration = new Configuration({
		apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	});

	const openai = new OpenAIApi(configuration);

	const generateImage = async () => {
		const res = await openai.createImage({
			prompt: "a white siamese cat",
			n: 1,
			size: "1024x1024",
		});
		console.log(res.data.data[0].url);
	};

	return (
		<div className="App">
			<button onClick={generateImage}>Generate Image</button>
		</div>
	);
}

export default App;

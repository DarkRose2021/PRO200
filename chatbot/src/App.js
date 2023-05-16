import { Configuration, OpenAIApi } from "openai";
import "./App.scss";

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
			<button onClick={generateImage}>Generate Image</button>

			<div className="container">
				<div className='background'>
					<div className="ai">Testing AI Area</div>
					<div className="user-txt">Testing User Area</div>
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

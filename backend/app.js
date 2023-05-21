const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
const express = require("express");
const openAi = require("openai");
require("dotenv").config();

const app = express();

const port = 2000;

app.use(cors());
app.use(express());
app.use(express.json());

const configuration = new Configuration({
	// organization: "org-OU327dCg9JrXyz2slt1x5ZoZ",
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
//process.env.REACT_APP_OPENAI_API_KEY

const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
	res.send("Hey");
});

app.get("/chat", async (req, res) => {
//     const url = "http://localhost:2000/chat"
// const usersData= [];

// let getData = () => {
// axios.get(url)
//    .then(res => usersData.push(res.data))x   
//    .catch(err => console.log(err.data))
// }
// console.log(getData)
	let chat = await generateCompletion()
    let messageData = [
        {
            results: chat
        }
    ]
    console.log(chat)

    res.json(messageData);
});

const generateCompletion = async (content) => {
	const completion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [{ role: "user", content: "Hello World" }],
	});
    return completion.data.choices[0].message
};

// generateCompletion();

app.listen(port, () => {
	console.log(`Express listening on port ${port}`);
});

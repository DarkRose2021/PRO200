const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors');
const express = require('express');
const openAi = require('openai');
require('dotenv').config()

const app = express();

const port = 2000;

app.use(cors());

const configuration = new Configuration({
    organization: 'org-OU327dCg9JrXyz2slt1x5ZoZ',
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

let testing = [
    {
        name: "Sam",
        chat: "How are you",
        answer: "I don't know"
    }
]

app.get("/test", (req, res) => {
    let test = testing;
    let responseData = {
        results: test
    }
    res.json(responseData)
})

app.get("/", (req, res) => {
    res.send("Hey");
});

app.get("/chat", (req, res) => {
    let messageData = [
    {
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "Hello world", name: "Design Chatbot"}],
    }
]
    res.json();
})

const generateCompletion = async () => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "Hello world"}],
      });
      console.log(completion.data.choices[0].message);
};

generateCompletion();


app.listen(port, () => {console.log(`Express listening on port ${port}`)});
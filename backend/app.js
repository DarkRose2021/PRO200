const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors');
const express = require('express');
const openAi = require('openai');

const app = express();

const port = 2000;

app.use(cors());

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
    res.send("Yo");
});

app.post("/image", (req, res) => {
    req.send(generateImage());
})

const configuration = new Configuration({
    apiKey: `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`,
});

const openai = new OpenAIApi(configuration);

const generateImage = async () => {
    const res = await openai.createImage({
        prompt: "a white siamese cat",
        n: 1,
        size: "256x256",
    });
    console.log(res.data.data[0].url);
};

	

app.listen(port, () => {console.log(`Express listening on port ${port}`)});
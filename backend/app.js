const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors');
const express = require('express');
const openAi = require('openai');

const app = express();

const port = 2000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hey");
});

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
	

app.listen(port, () => {console.log(`Express listening on port ${port}`)});
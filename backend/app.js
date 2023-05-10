const express = require('express');
const cors = require('cors');

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
    res.send("Hey");
});

app.listen(port, () => {console.log(`Express listening on port ${port}`)});
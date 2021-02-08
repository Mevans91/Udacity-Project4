var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/', function (req, res) {
    res.send('dist/index.html')
})

app.post('/analyze', function (req, res) {
    const API_KEY = process.env.API_KEY;
    const textUrl = req.body.texturl;
    const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1';
    const params = `?key=${API_KEY}&lang=en&model=general&url=${textUrl}`;
    const fetchUrl = apiUrl + params;

    fetch(fetchUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        return res.json();
    }).then((data) => {
        res.send({
            score_tag: data.score_tag,
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            irony: data.irony,
        })
    });
})

console.log(`Your API key is ${process.env.API_KEY}`);
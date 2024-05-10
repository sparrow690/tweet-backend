import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';



dotenv.config();

const {port} = process.env
const app = express();
let mesTweets = [...data.tweets]

app.use(express.json());
app.get('/tweets', (req, res) => {
    res.send(mesTweets);
})

app.post('/tweets', (req, res) => {
    const newTweets = req.body
    mesTweets.push(newTweets);
    res.send(newTweetsTweets);
})

app.get('user/:handler', (req, res) => {
    const theuser = req.params.handler;
    const userTweets = mesTweets.filter((tweet) => tweet.user.username === theuser)

    res.send(userTweets);
})

app.get('/user', (req, res) => {
    res.send(data["current-user"]);
})

 app.listen(port);


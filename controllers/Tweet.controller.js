import data from "../data.js";

export default function twitterController(req, res) {
    try {
        res.json(data.tweets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des tweets." });
    }
}

export function addTwitter(req, res) {
    try {
        const newTweet = req.body;
        const id = Math.round(Math.random() * 10000).toString(); // Identifiant aléatoire
        data.tweets.push({ id, ...newTweet });
        res.json(data.tweets.reverse());
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}
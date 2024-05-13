import data from "../data.js";

export default function viewUser(req, res, next) {
    try {
        res.send(data["current-user"]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur." });
    }
}

export function viewTweetsByUsername(req, res, next) {
    try {
        const { username } = req.params;
        const tweets = data.tweets.filter(tweet => tweet.user.userName === username);
        if (tweets.length > 0) {
            res.json(tweets);
        } else {
            res.status(404).json({ message: "Aucun tweet trouvé pour le nom d'utilisateur spécifié" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des tweets." });
    }
}
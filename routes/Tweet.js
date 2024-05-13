
import { Router } from "express";
import  twitterController, { addTwitter }  from "../controllers/Tweet.controller.js";
import viewUser, { viewTweetsByUsername } from "../controllers/use.controllers.js";


const route = Router();
route.get('/users/:username', viewTweetsByUsername) 
route.get('/tweets', twitterController)
route.get('/user/', viewUser)
route.post('/tweets', addTwitter)
export default Router;
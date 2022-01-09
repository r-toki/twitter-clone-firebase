import { createPath } from "./helper";

const _users = "users";
const _user = "users/:userId";
const _userTweets = "users/:userId/tweets";
const _userTweet = "users/:userId/tweets/:tweetId";

const _likes = "likes";
const _like = "likes/:likeId";

export const usersPath = () => _users;
export const userPath = createPath(_user);
export const userTweetsPath = createPath(_userTweets);
export const userTweetPath = createPath(_userTweet);

export const likesPath = () => _likes;
export const likePath = createPath(_like);

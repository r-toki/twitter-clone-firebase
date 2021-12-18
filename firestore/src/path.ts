import { createPath } from "./helper";

const _users = "users";
const _user = "users/:userId";
const _userTweets = "users/:userId/tweets";
const _userTweet = "users/:userId/tweets/:tweetId";

const _likes = "likes";
const _like = "likes/:likeId";

export const users = () => _users;
export const user = createPath(_user);
export const userTweets = createPath(_userTweets);
export const userTweet = createPath(_userTweet);

export const likes = () => _likes;
export const like = createPath(_like);

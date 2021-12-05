import { createPath } from "src/helper";

const _commandV1Prefix = "commands/v1/";
const _createPath = <T extends string>(url: T) => createPath(url, _commandV1Prefix);

const _users = "users";
const _user = "users/:userId";
const _userTweets = "users/:userId/tweets";
const _userTweet = "users/:userId/tweets/:tweetId";

const _likes = "likes";
const _like = "likes/:likeId";

export const users = () => _commandV1Prefix + _users;
export const user = _createPath(_user);
export const userTweets = _createPath(_userTweets);
export const userTweet = _createPath(_userTweet);

export const likes = () => _commandV1Prefix + _likes;
export const like = _createPath(_like);

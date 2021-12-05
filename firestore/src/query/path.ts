import { createPath } from "../helper";

const _queryV1Prefix = "queries/v1/";
const _createPath = <T extends string>(url: T) => createPath(url, _queryV1Prefix);

const _users = "users";
const _user = "users/:userId";
const _userTweets = "users/:userId/tweets";
const _userTweet = "users/:userId/tweets/:tweetId";

export const users = () => _queryV1Prefix + _users;
export const user = _createPath(_user);
export const userTweets = _createPath(_userTweets);
export const userTweet = _createPath(_userTweet);

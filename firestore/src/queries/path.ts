import { createPath } from "../helper";

const _queryV1 = "queries/v1/";
const createQueryV1Path = <T extends string>(url: T) => createPath(url, _queryV1);

const _users = "users";
const _user = "users/:userId";
const _userTweets = "users/:userId/tweets";
const _userTweet = "users/:userId/tweets/:tweetId";

export const users = () => _queryV1 + _users;
export const user = createQueryV1Path(_user);
export const userTweets = createQueryV1Path(_userTweets);
export const userTweet = createQueryV1Path(_userTweet);

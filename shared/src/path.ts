import { createPath } from "./helper";

const _users = "users";
const _userTweets = "users/:userId/tweets";
const _likes = "likes";

export const usersPath = () => _users;
export const userTweetsPath = createPath(_userTweets);
export const likesPath = () => _likes;

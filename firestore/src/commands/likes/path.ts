const LIKES = "likes";

export const likes = {
  path: LIKES,
  doc: (likeId: string) => ({
    path: [LIKES, likeId].join("/"),
  }),
};

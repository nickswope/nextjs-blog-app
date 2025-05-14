export type Comment = {
  id: number;
  body: string;
  commentId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
};

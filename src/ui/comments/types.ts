import { type Comment } from "@/lib/comments";

export type CommentProps = {
  comment: Comment;
};

export type CommentsListProps = {
  comments: Promise<Comment[]>;
};

export type CommentSectionProps = {
  postId: string | number;
};

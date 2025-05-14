"use client";
import { use } from "react";
import { type CommentsListProps } from "./types";
import Comment from "./Comment";

export default function CommentsList({ comments }: CommentsListProps) {
  const commentList = use(comments);
  return commentList.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
}

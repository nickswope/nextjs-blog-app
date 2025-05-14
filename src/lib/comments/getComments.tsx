import { type Comment } from "./types";

// This function is used to fetch comments from an API
// and return them as an array of Comment objects.
// The API used is a dummy API provided by https://dummyjson.com

export default async function getComments(): Promise<Comment[]> {
  const delay = Math.floor(Math.random() * 800) + 200;
  const res = await fetch(`https://dummyjson.com/comments?delay=${delay}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { comments } = await res.json();
  return comments;
}

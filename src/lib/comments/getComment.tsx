import { type Comment } from "./types";

// This function is used to fetch a Comment object from
// a dummy API provided by https://dummyjson.com
export default async function getComment(
  id: string | number,
): Promise<Comment> {
  const delay = Math.floor(Math.random() * 900) + 100;
  const res = await fetch(
    `https://dummyjson.com/comments/${id}?delay=${delay}`,
    {
      next: { revalidate: 60 },
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

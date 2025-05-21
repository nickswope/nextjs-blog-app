import { type Comment } from "./types";

// This function is used to fetch a Comment object from
// a dummy API provided by https://dummyjson.com
export default async function getCommentsByPostId(
  id: string | number,
): Promise<Comment[]> {
  const delay = Math.floor(Math.random() * 1400) + 600;
  // eslint-disable-next-line no-console
  console.log("Fetching comments for post", id, "with delay", delay);
  const res = await fetch(
    `https://dummyjson.com/comments/post/${id}?delay=${delay}`,
    {
      next: { revalidate: 60 },
    },
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch comments for post ${id}`);
  }
  // eslint-disable-next-line no-console
  console.log("Successfully fetched comments for post", id);
  const { comments } = await res.json();
  return comments;
}

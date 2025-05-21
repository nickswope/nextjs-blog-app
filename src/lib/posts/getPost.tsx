import { type Post } from "./types";

// This function is used to fetch a Post object from
// a dummy API provided by https://dummyjson.com
export default async function getPost(id: string | number): Promise<Post> {
  const delay = Math.floor(Math.random() * 950) + 50;
  // eslint-disable-next-line no-console
  console.log("Fetching post", id, "with delay", delay);
  const res = await fetch(`https://dummyjson.com/posts/${id}?delay=${delay}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`Failed to post ${id}`);
  }
  // eslint-disable-next-line no-console
  console.log("Successfully fetched post", id);
  return res.json();
}

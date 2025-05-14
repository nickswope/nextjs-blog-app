import { type Post } from "./types";

// This function is used to fetch posts from an API
// and return them as an array of Post objects.
// The API used is a dummy API provided by https://dummyjson.com

export default async function getPosts(): Promise<Post[]> {
  const delay = Math.floor(Math.random() * 1700) + 300;
  const res = await fetch(`https://dummyjson.com/posts?delay=${delay}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { posts } = await res.json();
  return posts;
}

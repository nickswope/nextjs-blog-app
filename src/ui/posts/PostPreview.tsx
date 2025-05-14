import Link from "next/link";
import { type PostPreviewProps } from "./types";

export default async function PostPreview({ post }: PostPreviewProps) {
  return (
    <section className="flex flex-col gap-4 rounded-lg border-2 border-gray-500 bg-gray-900 p-4 shadow-md hover:shadow-gray-700">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <div className="flex gap-2">
        {post.tags.map((tag) => (
          <div
            key={tag}
            className="rounded bg-gray-800 px-2 py-1 text-sm text-gray-300"
          >
            {tag}
          </div>
        ))}
      </div>
      <p className="line-clamp-2 text-gray-400">{post.body}</p>
      <div className="flex justify-between">
        <Link
          className="rounded border-1 border-gray-500 px-2 py-1 hover:bg-gray-800"
          href={`/blog/${post.id}`}
        >
          See full post
        </Link>
        <div className="flex gap-2">
          <div className="rounded border-3 border-blue-950 px-2 py-1 text-sm text-gray-300">
            {post.reactions.likes} likes
          </div>
          <div className="rounded border-3 border-red-950 px-2 py-1 text-sm text-gray-300">
            {post.reactions.dislikes} dislikes
          </div>
          <div className="rounded border-3 border-gray-800 px-2 py-1 text-sm text-gray-300">
            {post.views} views
          </div>
        </div>
      </div>
    </section>
  );
}

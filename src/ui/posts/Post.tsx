import { type PostProps } from "./types";

export default async function Post({ post }: PostProps) {
  return (
    <section className="flex flex-col gap-4 rounded-lg border-2 border-gray-500 bg-gray-900 p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <div className="flex gap-2">
        {post.tags.map((tag) => (
          <div
            key={tag}
            className="rounded bg-gray-800 px-2 py-1 text-sm text-gray-300 hover:bg-gray-700 hover:shadow-md hover:shadow-gray-800"
          >
            {tag}
          </div>
        ))}
      </div>
      <p className="whitespace-pre-line text-gray-400">{post.body}</p>
    </section>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { Post } from "@/ui/posts";
import { CommentsSection } from "@/ui/comments";
import { getPost, getPosts } from "@/lib/posts";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const posts = await getPosts();
  return posts.map((post) => ({ id: post.id.toString() }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }
  return (
    <article className="flex max-w-200 flex-col gap-4">
      <Link href="/blog">❮❮ Back to other posts</Link>
      <Post post={post} />
      <div className="flex justify-between">
        <div className="flex gap-2">
          <button className="rounded bg-blue-500 px-4 py-1 text-white hover:cursor-pointer hover:bg-blue-700 hover:font-stretch-normal hover:shadow-md hover:shadow-gray-800">
            Like 👍
          </button>
          <button className="rounded bg-red-800 px-4 py-1 text-white hover:cursor-pointer hover:bg-red-900 hover:font-stretch-normal hover:shadow-md hover:shadow-gray-800">
            Dislike 👎
          </button>
        </div>
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
      <hr />
      <CommentsSection postId={id} />
    </article>
  );
}

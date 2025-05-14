import { getPosts } from "@/lib/posts";
import { PostPreview } from "@/ui/posts";

export default async function Page() {
  const posts = await getPosts();

  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-strong text-3xl">Posts</h1>
      <ul className="flex max-w-128 flex-col gap-4">
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </ul>
    </article>
  );
}

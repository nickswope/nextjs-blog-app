import { type CommentProps } from "./types";

export default function Comment({ comment }: CommentProps) {
  return (
    <section className="flex flex-col gap-4 rounded-lg border-2 border-gray-500 bg-gray-900 p-4 shadow-md hover:shadow-gray-700">
      <h1 className="text-xl font-bold">
        {comment.user.fullName} ({comment.user.username})
      </h1>
      <p className="text-gray-400">{comment.body}</p>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <button className="rounded bg-blue-500 px-4 py-1 text-white hover:cursor-pointer hover:bg-blue-700 hover:font-stretch-normal hover:shadow-md hover:shadow-gray-800">
            Like 👍
          </button>
        </div>
        <div className="flex gap-2">
          <div className="rounded border-3 border-blue-950 px-2 py-1 text-sm text-gray-300">
            {comment.likes} likes
          </div>
        </div>
      </div>
    </section>
  );
}

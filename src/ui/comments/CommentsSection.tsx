import { Suspense } from "react";
import { getCommentsByPostId } from "@/lib/comments";
import CommentsList from "./CommentsList";
import { type CommentSectionProps } from "./types";
import { LoadingSpinner } from "../loaders";

export default function CommentSection({ postId }: CommentSectionProps) {
  const comments = getCommentsByPostId(postId);

  return (
    <section className="flex flex-col justify-center gap-4">
      <h2 className="text-2xl font-bold">Comments</h2>
      <Suspense
        fallback={
          <div className="flex justify-center p-16">
            <LoadingSpinner />
          </div>
        }
      >
        <form>
          <label htmlFor="comment" className="hidden">
            Add a comment:
          </label>
          <textarea
            id="comment"
            name="comment"
            className="max-h-100 min-h-15 w-full rounded border-2 border-gray-500 p-4 whitespace-pre-line outline-none"
            placeholder="Start writing here 😀"
            maxLength={10}
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="mt-2 rounded bg-blue-500 px-12 py-2 text-white hover:cursor-pointer hover:bg-blue-700 hover:shadow-md hover:shadow-gray-800"
            >
              Add
            </button>
            <p>
              <small>
                <b>Note:</b> Limit of 1000 characters
              </small>
            </p>
          </div>
        </form>
        <CommentsList comments={comments} />
      </Suspense>
    </section>
  );
}

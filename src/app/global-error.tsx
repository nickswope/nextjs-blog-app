"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>
          {error.message}
          {error.digest && <span> ({error.digest})</span>}
        </p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

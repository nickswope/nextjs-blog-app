import { LoadingSpinner } from "@/ui/loaders";

export default function Loading() {
  return (
    <div className="flex justify-center p-24">
      <LoadingSpinner size="xlarge" />
    </div>
  );
}

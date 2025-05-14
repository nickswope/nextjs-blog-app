import { type LoadingSpinnerProps } from "./types";

const sizeClassNameMap = {
  xsmall: "h-8 w-8",
  small: "h-16 w-16",
  medium: "h-24 w-24",
  large: "h-28 w-28",
  xlarge: "h-32 w-32",
};

export default function LoadingSpinner({
  className,
  size = "medium",
}: LoadingSpinnerProps) {
  const sizeClassName = sizeClassNameMap[size];
  return (
    <svg
      className={`animate-spin ${sizeClassName} ${className}`}
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

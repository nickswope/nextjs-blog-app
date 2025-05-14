import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "A simple blog layout",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-4 flex justify-center rounded-lg border-1 border-gray-900 p-4">
      {children}
    </div>
  );
}

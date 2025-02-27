import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Kesch.dev",
  description: "Read my latest blog posts about my thoughts and projects",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

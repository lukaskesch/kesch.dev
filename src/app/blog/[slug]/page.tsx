import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

// Get a specific blog post by slug
async function getBlogPost(slug: string) {
  const fullPath = path.join(process.cwd(), "content/blog", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    frontMatter: {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || "",
    },
    content,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { frontMatter, content } = await getBlogPost(slug);

  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        href="/blog"
        className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to blog
      </Link>

      <article className="prose lg:prose-xl max-w-none">
        <h1>{frontMatter.title}</h1>
        <div className="text-gray-500 mb-6">
          {new Date(frontMatter.date).toLocaleDateString()}
        </div>
        <MDXRemote source={content} />
      </article>
    </main>
  );
}

// Add metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { frontMatter } = await getBlogPost(slug);

  return {
    title: `${frontMatter.title} | Blog`,
    description: frontMatter.excerpt,
  };
}

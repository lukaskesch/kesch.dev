import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";

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
      <Link href="/blog" className=" hover:underline mb-6 inline-block">
        ← Back to blog
      </Link>

      <article className="prose lg:prose-xl max-w-none">
        <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
        <div className="text-gray-500">
          {new Date(frontMatter.date).toLocaleDateString()}
        </div>
        <div className="blog-content">
          <MDXRemote source={content} />
        </div>
      </article>
      <div className="mt-8">
        <Link href="/blog" className="hover:underline mb-6 inline-block">
          ← Back to blog
        </Link>
      </div>
    </main>
  );
}

// Add metadata for the page
export async function generateMetadata(props: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = props.params;
  const post = await getBlogPost(slug);

  return {
    title: `${post.frontMatter.title} | Blog | Kesch.dev`,
    description: post.frontMatter.excerpt,
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.excerpt,
      type: "article",
      publishedTime: post.frontMatter.date,
    },
  };
}

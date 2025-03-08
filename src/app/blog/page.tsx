import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    // Remove ".md" from filename to get slug
    const slug = filename.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || "",
    };
  });

  // Sort posts by date
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <p className="mb-8">
        I am a big fan of sharing my work and the journey it took to accomplish something amazing.
        Here are some of my thoughts on the things I&apos;ve learned and currently work on.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                className="hover:underline">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

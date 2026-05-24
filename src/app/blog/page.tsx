import { Metadata } from "next";
import BasePage from "../../../components/BasePage";
import BlogCard from "../../../components/ui/BlogCard";
import { getAllPosts } from "../../../lib/blog";

export const metadata: Metadata = {
  title: "Blog | Skillorum",
  description: "Thoughts on skill-building, habits, and levelling up your real life.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <BasePage>
      <div className="bg-paper-light min-h-screen pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="block font-display text-[0.72rem] italic tracking-[0.22em] uppercase text-brand-primary mb-3">
              The Journal
            </span>
            <h1 className="font-display text-4xl font-extrabold text-dark-ink leading-tight mb-4">
              From the Skillorum Blog
            </h1>
            <p className="font-body text-text-parchment text-lg leading-relaxed max-w-xl">
              Thoughts on skill-building, habits, and turning your real life into an adventure worth tracking.
            </p>
            <div className="mt-8 border-b border-parchment-mid/40" />
          </div>

          {posts.length === 0 ? (
            <p className="font-body text-text-parchment text-center py-16">
              No posts yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </BasePage>
  );
}
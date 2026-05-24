import { Metadata } from "next";
import MarkdownPage from "../../../../components/MarkdownPage";
import { getPostBySlug, getAllSlugs } from "../../../../lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: `${post.title} | Skillorum Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const formattedDate = new Date(post.date + "T00:00:00").toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const headerSlot = (
    <div className="mb-8 pb-8 border-b border-parchment-mid/40">
      <div className="flex justify-between">
        {post.tags[0] && (
          <span className="block font-display text-[0.65rem] italic tracking-[0.22em] uppercase text-brand-primary mb-3">
            {post.tags[0]}
          </span>
        )}
        <span className="text-[0.72rem] tracking-widest uppercase text-parchment-dark">
          {formattedDate}
        </span>
      </div>
      <h1 className="font-display text-4xl font-extrabold text-dark-ink leading-tight mb-4">
        {post.title}
      </h1>
      <div className="flex items-center gap-3 font-display text-[0.72rem] tracking-widest uppercase text-parchment-dark">
        {post.author && <span>{post.author}</span>}
      </div>
    </div>
  );

  return <MarkdownPage markdown={post.content} headerSlot={headerSlot} />;
}

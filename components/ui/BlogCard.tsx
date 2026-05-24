import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

export default function BlogCard({
  slug,
  title,
  date,
  description,
  author,
  tags,
}: PostMeta) {
  const eyebrow = tags[0] ?? "Insight";
  const formattedDate = new Date(date + "T00:00:00").toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <Link href={`/blog/${slug}`} className="group block no-underline">
      <article className="feature-card h-full bg-[#FFFCF5] border border-parchment-mid/30 rounded-xl p-8 flex flex-col transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(92,61,30,0.12)] hover:border-parchment-dark">
        <span className="block font-display text-[0.65rem] italic tracking-[0.22em] uppercase text-brand-primary mb-2">
          {eyebrow}
        </span>
        <h2 className="font-display text-xl font-bold text-dark-ink mb-3 leading-tight group-hover:text-wood-brown transition-colors">
          {title}
        </h2>
        <p className="font-body text-[0.92rem] text-text-parchment leading-[1.78] line-clamp-2 mb-auto">
          {description}
        </p>
        <div className="mt-5 pt-4 border-t border-parchment-mid/30 flex justify-between items-center font-display text-[0.72rem] tracking-widest uppercase text-parchment-dark">
          <span>{formattedDate}</span>
          {author && <span>{author}</span>}
        </div>
      </article>
    </Link>
  );
}

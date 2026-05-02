interface QuoteCardProps {
  quote: string;
  avatar: string;
  delayClass?: string;
}

export default function QuoteCard({
  quote,
  avatar,
  delayClass = "",
}: QuoteCardProps) {
  return (
    <div
      className={`quote-card reveal ${delayClass} flex flex-col bg-parchment-light border border-parchment-dark/40 rounded p-8`}
    >
      <blockquote className="italic text-[1rem] leading-[1.78] text-text-parchment mt-2 pb-4">
        {quote}
      </blockquote>

      <div className="mt-auto pt-4 border-t border-parchment-dark/35 font-display text-[0.75rem] tracking-[0.06em] text-wood-brown uppercase">
        {avatar}
      </div>
    </div>
  );
}

import BasePage from "./BasePage";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  markdown: string;
};

const MarkdownPage = ({ markdown }: Props) => {
  const TailwindComponents: Components = {
    h1: ({ children }) => (
      <h1 className="font-display text-4xl font-extrabold mb-8 mt-6 text-dark-ink leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-2xl font-bold mb-4 mt-8 text-wood-brown border-b border-parchment-mid/40 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-xl font-semibold mb-3 mt-6 text-wood-brown">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="font-body mb-5 leading-relaxed text-text-parchment">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="font-body list-disc ml-6 mb-6 space-y-2 text-text-parchment">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="font-body list-decimal ml-6 mb-6 space-y-2 text-text-parchment">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-1">{children}</li>,
    table: ({ children }) => (
      <div className="my-8 overflow-x-auto rounded-lg border border-parchment-mid/30">
        <table className="min-w-full divide-y divide-parchment-mid/30 border-collapse">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-parchment-light/50">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="font-display px-6 py-3 text-left text-sm font-semibold text-dark-ink uppercase tracking-wider border-b border-parchment-mid/30">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="font-body px-6 py-4 text-sm text-text-parchment border-b border-parchment-mid/20 last:border-b-0">
        {children}
      </td>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-brand-primary hover:text-wood-brown underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-dark-ink">{children}</strong>
    ),
  };

  return (
    <BasePage>
      <div className="bg-paper-light min-h-screen pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto bg-[#FFFCF5] border border-parchment-mid/25 shadow-[0_4px_24px_rgba(92,61,30,0.1)] rounded-xl px-8 md:px-12 py-12">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={TailwindComponents}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </BasePage>
  );
};

export default MarkdownPage;

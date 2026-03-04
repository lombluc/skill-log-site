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
      <h1 className="text-4xl font-extrabold mb-8 mt-10 text-slate-900 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-4 mt-8 text-slate-800 border-b border-slate-200 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mb-3 mt-6 text-slate-800">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-5 leading-relaxed text-slate-600">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc ml-6 mb-6 space-y-2 text-slate-600">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal ml-6 mb-6 space-y-2 text-slate-600">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-1">{children}</li>,
    table: ({ children }) => (
      <div className="my-8 overflow-x-auto rounded-lg border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 border-collapse">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-slate-50">{children}</thead>,
    th: ({ children }) => (
      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 uppercase tracking-wider border-b border-slate-200">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-100 last:border-b-0">
        {children}
      </td>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 hover:text-blue-800 underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
  };

  return (
    <BasePage>
      <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-sm rounded-xl my-10 border border-slate-100 font-description">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={TailwindComponents}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </BasePage>
  );
};

export default MarkdownPage;

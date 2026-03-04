import fs from "fs";
import path from "path";
import MarkdownPage from "../../../components/MarkdownPage";

export default function Privacy() {
  const filePath = path.join(process.cwd(), "public", "terms_of_use.md");
  const markdown = fs.readFileSync(filePath, "utf8");

  return <MarkdownPage markdown={markdown} />;
}

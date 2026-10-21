/**
 * A tiny TSX highlighter — enough for short, curated snippets without
 * shipping a full syntax-highlighting library.
 */
const TOKEN =
  /(\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)|(<\/?[A-Za-z][\w.]*(?=[\s>/]))|(\b(?:const|let|type|interface|export|function|return|as|import|from|default|extends|keyof|typeof)\b)|(\b\d+(?:\.\d+)?\b)/g;

const KINDS = ["comment", "string", "tag", "keyword", "number"] as const;

const styles: Record<(typeof KINDS)[number], string> = {
  comment: "text-ink-3 italic",
  string: "text-[#e2cfa9]",
  tag: "text-[#ff7a4d]",
  keyword: "text-[#9aaaff]",
  number: "text-[#e2cfa9]",
};

function highlight(code: string) {
  const out: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of code.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) out.push(code.slice(last, index));
    const kind = KINDS[match.slice(1).findIndex((g) => g !== undefined)];
    out.push(
      <span key={key++} className={kind ? styles[kind] : undefined}>
        {match[0]}
      </span>,
    );
    last = index + match[0].length;
  }
  if (last < code.length) out.push(code.slice(last));
  return out;
}

export function CodeBlock({ code, file, label }: { code: string; file: string; label?: string }) {
  const lines = code.split("\n");
  return (
    <figure className="border border-line-inv bg-[#0b0b0a]">
      <figcaption className="t-label flex items-center justify-between gap-4 border-b border-line-inv px-4 py-2.5 text-ink-3 normal-case">
        <span className="truncate">{file}</span>
        <span className="shrink-0">{label ?? "TSX"}</span>
      </figcaption>
      <pre
        tabIndex={0}
        aria-label={`Code: ${file}`}
        className="max-h-[420px] overflow-auto p-4 font-mono text-[12.5px] leading-[1.7] text-paper"
      >
        <code>
          {lines.map((line, i) => (
            <span key={i} className="grid grid-cols-[2.25rem_1fr]">
              <span aria-hidden className="select-none pr-3 text-right text-ink-3">
                {i + 1}
              </span>
              <span className="whitespace-pre">{highlight(line)}</span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
